import {View} from 'backbone';
import UsersRouter from '../routers/UsersRouter';

const UserLinks = View.extend
({
	router: null,

	events: 
	{
		'click a' : 'clickHandler'
	},

	initialize: function()
	{
		this.router = new UsersRouter();
	},
	
	/**
	 * The OnClick handler
	 * @param {event} e - The click event.
	 */
	clickHandler: function(e)
	{
		let t = e.currentTarget;
		
		let url = "users/" + t.dataset['id'];
		this.router.navigate(url, {trigger: true, replace: true});
		console.log(url);
	}
});

export default UserLinks