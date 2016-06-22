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
		console.log("Form interaction on " + e.toElement.id);
		console.log(e.toElement);
		if(e.toElement.id == "LoginButton")
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
		else if(e.toElement.class = "actionButton")
		{
			console.log("Commanded " + this.userKey);
			HeroController.CommandHero(e.currentTarget.dataset['id'], e.toElement.id, this.userKey, function(data, self)
			{
				self.loadMatches();
				console.log(data);
			}, this);
		}
	},
	
	loadMatches: function(match)
	{
		console.log(match);
	
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