import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import HeroController from '../controllers/HeroController';

const StoreView = View.extend
({
	HeroData: null,
	
	initialize : function()
	{
		App.events.on('reloadStore', this.loadStore, this);
		console.log("Store Initialized");
	},
	
	events: 
	{
		'click a' : 'clickHandler'
	},
	
	clickHandler: function(e)
	{
		console.log($(e.target).attr("class"));
		if($(e.target).attr("class") == "closeButton")
		{
			$( "#shopBox" ).slideUp();
			console.log("Closing");
		}	
		
		if($(e.target).attr("class") == "buyActionButton")
		{
			HeroController.BuyShopItem(e.target.dataset['heroid'], e.target.dataset['itemid'], this.HeroData.key, function(key, self)
			{
				console.log("Transaction Result:");
				console.log(key);
				App.events.trigger('reloadStore', self.HeroData);
			}, this);
		}
		
		if($(e.target).attr("class") == "sellActionButton")
		{
			HeroController.SellHeroItem(e.target.dataset['heroid'], e.target.dataset['itemid'], this.HeroData.key, function(key, self)
			{
				console.log("Transaction Result:");
				console.log(key);
				App.events.trigger('reloadStore', self.HeroData);
			}, this);
		}
	},
	/**
	 * Load the matching data
	 * @param {object} An object containing hero data needed for the store.
	 */
	loadStore: function(heroData)
	{
		this.HeroData = heroData;
		console.log("LoadMatches Store");
		console.log(heroData);
	
		$.ajax({
		url: "http://www.timfalken.com/heromanager/heroes/" + heroData.hero.id,
		data:"",
		dataType:"json",
		success: function(hero)
		{
			$.ajax({
			url: "http://www.timfalken.com/heromanager/locations/" + hero.locationId.id,
			data:"",
			dataType:"json",
			success: function(location)
			{
				console.log("Location");
				console.log(location);
				console.log("Hero");
				console.log(hero);
				
				_.templateSettings.variable = "rc";
				
				var template = _.template(
					$( "script#template-store" ).html()
				);
				
				let store = {};
				store.heroId = hero.id;
				store.buying = false;
				store.selling = false;
				store.heroMoney = hero.money;
				
				for(let i = 0; i < location.possibleActions.length; i++)
				{
					if(location.possibleActions[i] == "Buying")
						store.buying = true;
						
					if(location.possibleActions[i] == "Selling")
						store.selling = true;
				}
				
				store.buyList = location.shop;
				store.sellList = hero.inventory;
				
				console.log(store);
				
				$( "#shopBox" ).html(
					template( store )
				);
				
				console.log("Store template opened");
				$( "#shopBox" ).slideDown();
			}
			});
		}
		});
	}
});

export default StoreView;