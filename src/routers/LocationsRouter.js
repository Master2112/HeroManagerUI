import {Router} from 'backbone';

const LocationsRouter = Router.extend({
	routes:
	{
		'locations/:id': 'locationAction'
	},
	
	/**
	 * Reload data
	 * @param {int} id - The ID to load in the URL
	 */
	locationAction: function(id)
	{
		App.events.trigger('reloadLocations', {id:id});
	}
});

export default LocationsRouter;