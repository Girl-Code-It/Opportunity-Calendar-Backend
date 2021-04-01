const jwt = require('jsonwebtoken');
const UserService = require('../services/userService');
const loggedIn = (req,res,next)=>{
    (async()=>{
        const token = req.headers['x-access-token']
        if (!token)throw new Error('Invalid Token 1');
        const payload = await jwt.verify(token, process.env.jwt_secret);
        let user = await UserService.findById(payload._id);
        if(user)return user;
        else throw new Error('Invalid Token 2');
    })()
    .then((user) => {
        req.user = user;
        next();
    })
    .catch(err => {
        res.status(401).send(err.message);
    })
}
module.exports = loggedIn;