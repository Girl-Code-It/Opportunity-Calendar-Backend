import passport from 'passport';
import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
import {GOOGLE_OAUTH} from '../../config.js';


function generateFullName({given_name, family_name}){
    let name = "";
    if(given_name)name += given_name;
    if(family_name){
        if(name.length > 0)name += " ";
        name += family_name;
    }
    return name;
}

function passport_init(){
    function extractProfile(profile, token){
        let imgUrl = '';
        if (profile.photos && profile.photos.length) {
            imgUrl = profile.photos[0].value;
        }
        let fullName = generateFullName(profile._json);
        return {
            authProviderId: profile.id,
            authProvider : 'GOOGLE',
            fullName: fullName,
            email : profile._json.email,
            emailVerified : profile._json.email_verified,
            image: imgUrl,
            token: token
        };
    }

    passport.use(
        new GoogleStrategy({
            clientID: GOOGLE_OAUTH.client_id,
            clientSecret: GOOGLE_OAUTH.client_secret,
            callbackURL: GOOGLE_OAUTH.callback,
            accessType: `offline`,
            userProfileURL: `https://www.googleapis.com/oauth2/v3/userinfo`,
        },
        (accessToken, refreshToken, profile, cb) => {
               cb(null, extractProfile(profile, accessToken));
        }));

    passport.serializeUser((user, cb) => {
        cb(null, user);
    });

    passport.deserializeUser((obj, cb) => {
        cb(null, obj);
    });
}
export default passport_init;
