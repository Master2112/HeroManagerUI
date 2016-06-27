import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import HeroController from '../controllers/HeroController'

const HeroControlView = View.extend
({
	userEmail : "",
	userKey: "",
	
	events: 
	{
		'click a' : 'clickHandler'
	},
	
	initialize : function()
	{
		this.loadMatches()
	},
	
	clickHandler: function(e)
	{
		console.log("Form interaction on #" + e.target.id + " ." + $(e.target).attr("class"));
		console.log(e.target);
		if(e.target.id == "LoginButton")
		{
			let name = $(this.el).find('#loginEmail').val();
			let password = $(this.el).find('#loginPassword').val();
				
			console.log("Attempting login: " + name + ", " + password);
				
			HeroController.GetUserKey(name, password, function(key, self)
			{
				self.userEmail = name;
				self.userKey = key;
				self.loadMatches();
				console.log("Success! key = " + key);
			}, this);
		}
		else if($(e.target).attr("class") == "actionButton")
		{
			console.log("Commanded " + this.userKey);
			HeroController.CommandHero(e.target.dataset['id'], e.target.id, this.userKey, function(data, self)
			{
				self.loadMatches();
				console.log(data);
			}, this);
		}
		else if($(e.target).attr("class") == "storeButton")
		{
			console.log("Store " + this.userKey);
			let heroId = e.target.dataset['heroid'];
			let hero = null;
			
			for(let i = 0; i < this.collection.models.length; i++) //TODO: Remove un-necessary User Loop
			{
				for(let h = 0; h < this.collection.models[i].attributes.heroes.length; h++)
				{
					if(heroId == this.collection.models[i].attributes.heroes[h].id)
						hero = this.collection.models[i].attributes.heroes[h];
				}
			}
			
			console.log("Opening store for " + hero.name);
			App.events.trigger('reloadStore', {hero:hero, key:this.userKey, email:this.userEmail});
		}
	},
	
	loadMatches: function(match)
	{
		this.collection.fetch
		({
			success:(collection) => {this.matchesLoaded(collection)},
			error: (collection, response) => {this.loadError(collection, response)}/*,
			data: {
				id: match.id,
			}*/
		});
	},
	
	matchesLoaded: function(collection)
	{
		if(collection == null)
		{
			console.log("Could not fetch user collection for login form");
			return;
		}	
	
		_.templateSettings.variable = "rc";
		
		var template = _.template(
            $( "script#template-controller" ).html()
        );
		
		let userDat = null;
		console.log(collection.models);
		console.log(this.userEmail);
		for(let i = 0; i < collection.models.length; i++)
		{
			if(collection.models[i].attributes.email == this.userEmail)
			{
				console.log("user found");
				userDat = collection.models[i].attributes;
			}
		}
		
		console.log(userDat);
		
		$( "#controlBox" ).html(
            template( userDat )
        );
	},
	
	loadError: function(collection, error)
	{
		console.log(error);
	}
});

export default HeroControlView;