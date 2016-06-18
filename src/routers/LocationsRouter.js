import {Router} from 'backbone';

const LocationsRouter = Router.extend({
	routes:
	{
		'locations/:id': 'locationAction'
	},
	
	locationAction: function(id)
	{
		App.events.trigger('reloadLocations', {id:id});
	}
});

export default LocationsRouter;