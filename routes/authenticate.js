let express = require('express'),
  router = express.Router();
const passport = require('passport');
const googleAuthenticator = require('../authentication/strategies/google');
const User = require('../models/user');
const config = require('../config');
const authController = require('../controllers/auth/AuthController');

router.get('/login', (req, res)=>{
    res.redirect('/auth/google-authenticate');
});

router.get(
    '/google-authenticate', 
    passport.authenticate('google',{scope : ['email','profile']}),
    (req, res) => {
    });

router.get(
    '/google-callback', 
    passport.authenticate('google',{failureRedirect : '/auth/login'}),
    (req,res)=>{
        (async()=>{
            const result = await authController.upsertUser(req.user);
            return result;
        })()
        .then(data => {
            const url = config.FRONT_END.url + config.FRONT_END.login_route + "/" + data;
            res.redirect(url);
        })
        .catch(err=>{
            res.redirect(config.FRONT_END.url + config.FRONT_END.error_handler + "?err=" + JSON.stringify(err));
        })
    })


module.exports = router;
