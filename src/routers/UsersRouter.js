import {Router} from 'backbone';

const UsersRouter = Router.extend({
	routes:
	{
		'users/:id': 'userAction'
	},
	
	/**
	 * Reload data
	 * @param {int} id - The ID to load in the URL
	 */
	userAction: function(id)
	{
		App.events.trigger('reloadUsers', {id:id});
	}
});

export default UsersRouter;