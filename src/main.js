import _ from 'underscore';
import {Events} from 'backbone';
import Heroes from './collections/Heroes';
import Locations from './collections/Locations';
import Users from './collections/Users';
import UserLinks from './views/UserLinks';
import LocationLinks from './views/LocationLinks';
import HeroLinks from './views/HeroLinks';
import HeroesView from './views/HeroesView';
import UsersView from './views/UsersView';
import LocationsView from './views/LocationsView';

import StoreView from './views/StoreView';

import HeroControlView from './views/HeroControlView';

(function ()
{
    let setGlobalVariables = function ()
    {
        window.App = {};
        App.events = _.clone(Events);
    };

    /**
     * Run after dom is ready
     */
    let init = function ()
    {
        setGlobalVariables();

        loadLinks();

        Backbone.history.start({pushState: true, root: '/hr/backbone-routing-start/'}); //Change to your root URL
    };
	
	/**
	 * Load the views and initialize them
	 */
	let loadLinks = function()
	{
		var heroesCollection = new Heroes();
        var locationsCollection = new Locations();
        var usersCollection = new Users();
		
        new HeroLinks({el: "#heroes-links"});
        new LocationLinks({el: "#locations-links"});
        new UserLinks({el: "#users-links"});
		
        new StoreView({el: "#shopBox"});
		
        new HeroesView({el: "#heroes", collection: heroesCollection});
        new LocationsView({el: "#locations", collection: locationsCollection});
        new UsersView({el: "#users", collection: usersCollection});
        new HeroControlView({el: "#controlBox", collection: usersCollection});
	}

    window.addEventListener('load', init);
})();
