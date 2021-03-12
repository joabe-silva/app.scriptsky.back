const express = require('express');
const cors = require('cors')
require('dotenv').config();

const session = require('express-session');
const passport = require('passport');

const app = express();
app.use(express.json());
app.use(cors());

app.use(session({
    secret: '123',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1 * 60 * 1000 }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3001);