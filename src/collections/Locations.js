import {Collection} from 'backbone';
import Location from '../models/Location';

/**
 * Collection for the matches endpoint
 *
 * @constructor
 */
const Locations = Collection.extend({
    model: Location,
    url: 'http://www.timfalken.com/heromanager/locations/raw'
});

export default Locations;
