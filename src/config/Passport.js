import 'dotenv/config';
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import User from '../models/User.js';


passport.serializeUser((user, done) => {
    done(null, user)
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
       done(null, user)  
    });
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET_KEY,
    callbackURL: process.env.URL_CALLBACK,

}, (accessToken, refreshToken, profile, done) => {
    User.findOne({googleId: profile.id}).then((currentUser) => {
        if(currentUser) {
            done(null, currentUser)
        } else {}
    });
    
    new User({
        username: profile.displayName,
        googleId: profile.id
    }).save().then((newUser) => {
        console.log('create user' + newUser)
        done(null, newUser)
    });
}
));
