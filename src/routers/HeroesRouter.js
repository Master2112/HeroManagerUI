import {Router} from 'backbone';

const HeroesRouter = Router.extend({
	routes:
	{
		'heroes/:id': 'heroAction'
	},
	
	heroAction: function(id)
	{
		App.events.trigger('reloadHeroes', {id:id});
	}
});

export default HeroesRouter;