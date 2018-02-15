const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        (accessToken, refreshToken, profile, done) => {
            //User.findOne({ googleId: profile.id }).then(existingUser);
            //if (existingUser) {
            //    done(null, existingUser);
            //} else {
//
            //}
            done(null,{
                ok:'ok'
            });
        }
    )
);