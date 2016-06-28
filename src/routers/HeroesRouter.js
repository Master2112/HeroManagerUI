import {Router} from 'backbone';

const HeroesRouter = Router.extend({
	routes:
	{
		'heroes/:id': 'heroAction'
	},
	
	/**
	 * Reload data
	 * @param {int} id - The ID to load in the URL
	 */
	heroAction: function(id)
	{
		App.events.trigger('reloadHeroes', {id:id});
	}
});

export default HeroesRouter;