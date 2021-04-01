const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('../../config');

function extractProfile(profile, token){
    let imgUrl = '';
    if (profile.photos && profile.photos.length) {
        imgUrl = profile.photos[0].value;
    }
    return {
        auth_provider_id: profile.id,
        auth_provider : 'GOOGLE',
        firstname: profile._json.given_name,
        lastname: profile._json.family_name,
        email : profile._json.email,
        email_verified : profile._json.email_verified,
        image: imgUrl,
        token: token
    };
}

passport.use(
    new GoogleStrategy({
        clientID: config.GOOGLE_OAUTH.client_id,
        clientSecret: config.GOOGLE_OAUTH.client_secret,
        callbackURL: config.GOOGLE_OAUTH.callback,
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