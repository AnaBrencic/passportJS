import 'dotenv/config';
import express from 'express';
import passport from 'passport';
import routes from './routes.js';
import cookieSession from 'cookie-session';
import './config/Passport.js';
import './config/Database.js';

const app = express();


app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

const port = process.env.PORT;
app.listen(port, () => {console.log('Servir is running!')});
