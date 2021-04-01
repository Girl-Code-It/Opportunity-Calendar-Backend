const User = require('../../models/user')
const jwt = require('jsonwebtoken');

async function upsertUser(user){
    const data = await User.findOne({
        email : user.email
    })
    if(data){
        return await generateJWT({_id : data._id});
    }
    let newUser = new User(user);
    newUser = await newUser.save();
    return await generateJWT({_id : newUser._id})
}
async function generateJWT(data){
    return await jwt.sign(data, process.env.jwt_secret, {expiresIn : '7d'})
}

module.exports = {
    upsertUser : upsertUser
}
