import express from 'express';
import passport from 'passport';

const router = express.Router();


const authCheck = (req, res, next) => {
    if(!req.user) {
        res.redirect('/login');
    } else {
        next();
    }
};

router.get('/login', (req, res) => {
    res.send('<a href="/auth/google">Autheticate with Google</a>')
});

router.get('/auth/google', 
    passport.authenticate('google', {scope: ['profile']}
));

router.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/welcome')
});

router.get('/welcome', authCheck, (req, res) => {
    res.send('You are logged in, this is your profile -' + req.user.username)
});


export default router;  