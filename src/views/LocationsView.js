import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const LocationsView = View.extend
({
	initialize : function()
	{
		App.events.on('reloadLocations', this.loadMatches, this);
	},
	
	loadMatches: function(match)
	{
		console.log(match);
	
		this.collection.fetch
		({
			success:(collection) => {this.matchesLoaded(collection)},
			error: (collection, response) => {this.loadError(collection, response)},
			data: {
				id: match.id
			}
		});
	},
	
	matchesLoaded: function(collection)
	{
		_.templateSettings.variable = "rc";
		
		var template = _.template(
            $( "script#template-locations" ).html()
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

export default LocationsView;