import $ from 'jquery';
import _ from 'underscore'

const HeroController = {	
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

	SellHeroItem: function(heroId, itemId, key, isDone)
	{
		$.post
		(
			"http://timfalken.com/heromanager/shop",
			'{"id":' + heroId + ', "action":"Selling", "itemId":"' + itemId + '", "key":"' + key + '"}',
			function(data) 
			{
			  console.log(data);
			}
		);
	},

	BuyShopItem: function(heroId, shopItemId, key, isDone)
	{
		$.post
		(
			"http://timfalken.com/heromanager/shop",
			'{"id":' + heroId + ', "action":"Buying", "itemId":"' + shopItemId + '", "key":"' + key + '"}',
			function(data) 
			{
			  console.log(data);
			}
		);
	}
}

export default HeroController;