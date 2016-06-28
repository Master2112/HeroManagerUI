import $ from 'jquery';
import _ from 'underscore'

const HeroController = {

	/**
	 * Retrieve user key with email and password
	 * @param {string} userEmail
	 * @param {string} userPassword
	 * @param {function} isDone - callback for when the call completes
	 * @param {object} caller - context reference (you usually pass "this" here
	 */	
	GetUserKey: function(userEmail, userPassword, isDone, caller = null)
	{
		$.post
		(
			"http://timfalken.com/heromanager/getkey",
			'{"email":"' + userEmail + '", "password":"' + userPassword + '"}',
			function(data) 
			{
				data = JSON.parse(data);
				console.log("response received: " + data);
				
				if(_.has(data, 'key'))
				{
					console.log("response: OK");
					isDone(data.key, caller);
				}
			}
		);
	},
	
	/**
	 * Command a hero to do something
	 * @param {int} heroId
	 * @param {string} action - the action you want the hero to perform
	 * @param {string} key - the hero's user's key.
	 * @param {function} isDone - callback for when the call completes
	 * @param {object} caller - context reference (you usually pass "this" here
	 */	
	CommandHero: function(heroId, action, key, isDone, caller)
	{
		$.post
		(
			"http://timfalken.com/heromanager/command",
			'{"id":' + heroId + ', "action":"' + action + '", "key":"' + key + '"}',
			function(data) 
			{
				isDone(data, caller);
			}
		);
	},

	/**
	 * Make a hero sell an inventory item
	 * @param {int} heroId
	 * @param {int} itemId - the id of the item to sell
	 * @param {string} key - the hero's user's key.
	 * @param {function} isDone - callback for when the call completes
	 * @param {object} caller - context reference (you usually pass "this" here
	 */	
	SellHeroItem: function(heroId, itemId, key, isDone, caller)
	{
		$.post
		(
			"http://timfalken.com/heromanager/shop",
			'{"id":' + heroId + ', "action":"Selling", "itemId":"' + itemId + '", "key":"' + key + '"}',
			function(data) 
			{
				isDone(data, caller);
			}
		);
	},

	/**
	 * Make a hero buy a shop item
	 * @param {int} heroId
	 * @param {int} itemId - the id of the item to buy
	 * @param {string} key - the hero's user's key.
	 * @param {function} isDone - callback for when the call completes
	 * @param {object} caller - context reference (you usually pass "this" here
	 */	
	BuyShopItem: function(heroId, shopItemId, key, isDone, caller)
	{
		$.post
		(
			"http://timfalken.com/heromanager/shop",
			'{"id":' + heroId + ', "action":"Buying", "itemId":"' + shopItemId + '", "key":"' + key + '"}',
			function(data) 
			{
				isDone(data, caller);
			}
		);
	}
}

export default HeroController;