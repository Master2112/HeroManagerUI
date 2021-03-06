import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const HeroesView = View.extend
({
	initialize : function()
	{
		App.events.on('reloadHeroes', this.loadMatches, this);
	},
	/**
	 * Load matching models
	 * @param {object} match - Object containing id to search for.
	 */
	loadMatches: function(match)
	{
		console.log(match);
	
		this.collection.fetch
		({
			success:(collection) => {this.matchesLoaded(collection)},
			error: (collection, response) => {this.loadError(collection, response)},
			data: {
				id: match.id,
			}
		});
	},
	
	matchesLoaded: function(collection)
	{
		_.templateSettings.variable = "rc";
		
		var template = _.template(
            $( "script#template-heroes" ).html()
        );
		
		$( "#displayBox" ).html(
            template( collection )
        );
	},
	
	loadError: function(collection, error)
	{
		console.log(error);
	}
});

export default HeroesView;