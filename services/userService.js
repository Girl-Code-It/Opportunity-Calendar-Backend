const User = require('../models/user')
async function findById(id){
    return await User.findById(id)
}

module.exports = {
    findById : findById
}