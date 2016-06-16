import _ from 'underscore'
import {Events} from 'backbone';
import ClickA from './views/ClickA';
import BoxBlock from './views/BoxBlock';

import Hero from './models/Hero';

(function()
{
	const setGlobalVariables = function()
	{
		window.App = {};
		App.events = _.clone(Events);
		console.log(window);
	}

	let init = function()
	{
		setGlobalVariables();
		
		var heroModel = new Hero();
		
		new ClickA({el:'#clicker', model:heroModel});
		new BoxBlock({el:'#box', model:heroModel});
	};
	
	window.addEventListener('load', init);
})();