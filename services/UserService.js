import {User} from '../models/user.js';
async function findById(id){
    return await User.findById(id)
}

export const UserService = {
    findById : findById
}
