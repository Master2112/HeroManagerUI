import {Router} from 'backbone';

const UsersRouter = Router.extend({
	routes:
	{
		'users/:id': 'userAction'
	},
	
	userAction: function(id)
	{
		App.events.trigger('reloadUsers', {id:id});
	}
});

export default UsersRouter;