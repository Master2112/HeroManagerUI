import {Collection} from 'backbone';
import Hero from '../models/Hero';

/**
 * Collection for the matches endpoint
 *
 * @constructor
 */
const Heroes = Collection.extend({
    model: Hero,
    url: 'http://www.timfalken.com/heromanager/heroes/raw'
});

export default Heroes;
