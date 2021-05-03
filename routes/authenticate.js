import express from 'express';
const router = express();

import passport from 'passport';
import {User} from '../models/user.js';
import {FRONT_END} from '../config.js';
import authController from '../controllers/auth/AuthController.js';

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
            const url = FRONT_END.url + FRONT_END.login_route + "/" + data;
            res.redirect(url);
        })
        .catch(err=>{
            console.log(err);
            res.redirect(FRONT_END.url + FRONT_END.error_handler + "?err=" + JSON.stringify(err));
        })
    })


export default router;
