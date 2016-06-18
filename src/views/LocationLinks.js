import {View} from 'backbone';
import LocationsRouter from '../routers/LocationsRouter';

const LocationLinks = View.extend
({
	router: null,

	events: 
	{
		'click a' : 'clickHandler'
	},

	initialize: function()
	{
		this.router = new LocationsRouter();
	},
	
	clickHandler: function(e)
	{
		let t = e.currentTarget;
		
		let url = "locations/" + t.dataset['id'];
		this.router.navigate(url, {trigger: true, replace: true});
		console.log(url);
	}
});

export default LocationLinks