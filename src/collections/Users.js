import {Collection} from 'backbone';
import User from '../models/User';

/**
 * Collection for the matches endpoint
 *
 * @constructor
 */
const Users = Collection.extend({
    model: User,
    url: 'http://www.timfalken.com/heromanager/users/raw'
});

export default Users;
