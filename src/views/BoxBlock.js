import {View} from 'backbone';

var BoxBlock  = View.extend
({
	initialize: function()
	{
		this.model.on("change:alive", this.changeColor, this);
		console.log(this);
		
		this.model.fetch({
			success: function(model, response, options)
			{
				console.log(model);
			},
			error: function (model, response, options)
			{
			
			}
		});
	},
	
	changeColor: function(model, alive)
	{
		console.log(model.get('currentHealth'));
		console.log(alive);
	
		//change class
		/*this.$el.toggleClass("red");
		console.log("Toggled");*/
		if(alive)
		{
			this.$el.addClass("red");
		}
		else
		{
			this.$el.removeClass("red");
		}
	}
});

export default BoxBlock;