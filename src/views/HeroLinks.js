import {View} from 'backbone';
import HeroesRouter from '../routers/HeroesRouter';

const HeroLinks = View.extend
({
	router: null,

	events: 
	{
		'click a' : 'clickHandler'
	},

	initialize: function()
	{
		this.router = new HeroesRouter();
	},
	
	/**
	 * The OnClick handler
	 * @param {event} e - The click event.
	 */
	clickHandler: function(e)
	{
		let t = e.currentTarget;
		
		let url = "heroes/" + t.dataset['id'];
		this.router.navigate(url, {trigger: true, replace: true});
		console.log(url);
	}
});

export default HeroLinks