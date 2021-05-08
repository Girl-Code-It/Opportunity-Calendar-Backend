import express from 'express';
const router = express();

import passport from 'passport';
import {User} from '../models/user.js';
import {FRONT_END} from '../config.js';
import authController from '../controllers/auth/AuthController.js';

/**
 * @swagger
 * /authenticate/login:
 *   get:
 *     summary: Redirect to login with google page 
 *     description: Redirect to login with google page for Oauth2 with Google 
 *     responses:
 *       200:
 *       description: Redirect to google account for authentication
 *       404:
 *       description: Failure to authenticate with google account
 */

router.get('/login', (req, res) => {
    res.redirect('/auth/google-authenticate');
});

/**
 * @swagger
 * /authenticate/google-authenticate:
 *   get:
 *     summary: Redirect to login with google page 
 *     description: Redirect to login with google page for Oauth2 with Google 
 *     security:
 *       OAuth2: [email,profile]
 *     responses:
 *       200:
 *         description: Successfully authenticated with given scopes
 *       401:
 *         description: User is not authenticated
 *       403:
*        description: Access token does not have the required scope
*/

router.get(
    '/google-authenticate',
    passport.authenticate('google',{scope: ['email','profile']}),
    (req, res) => {
    });


/**
 * @swagger
 * /authenticate/google-callback:
 *   get:   
 *     summary: Either redirect to front-end page on successful response or login on failure 
 *     description: Either google calllback URL will be called on success or /login on failure.
 *     security:
 *       OAuth2: [email,profile]
 *     responses:
 *       200:
 *         description: Successfully redirect to front-end with access-token in url
 *        401:
 *         description: Failure redirect to login page
 *       400:
*         description: Error occur redirect to front-end error page with JSON 
*/

router.get(
    '/google-callback',
    passport.authenticate('google',{failureRedirect: '/auth/login' }),
    (req,res)=>{
        (async()=>{
            const result = await authController.upsertUser(req.user);
            return result;
        })()
        .then(data => {
             const url = FRONT_END.url + FRONT_END.login_route + "/" + data;
             res.redirect(url);
         })
         .catch(err => {
             console.log(err);
             res.redirect(FRONT_END.url + FRONT_END.error_handler + "?err=" + JSON.stringify(err));
         })
    })


export default router;
