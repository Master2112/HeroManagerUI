import {View} from 'backbone';

var ClickA = View.extend
({
	events:
	{
		'click': 'clickHandler'
	},
	
	clickHandler: function(e)
	{
		e.preventDefault();
		this.model.set({alive: !this.model.get('alive')});
	},

	initialize: function()
	{
	
	}
});

export default ClickA;