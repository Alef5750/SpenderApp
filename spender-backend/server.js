require('dotenv').config({ path: './.env' });
const express = require('express');
const initClient = require('./database')
const mongoose = require('mongoose');
const { user: UserModel } = require('./controllers/usersController')
const app = express();
const port = 5000;

// cookie parser
// const cookieParser = require('cookie-parser')
// app.use(cookieParser(process.env.SESSION_SECRET));


// set cors
const cors = require('cors')
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// express session
const session = require('express-session')
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true, // saved new sessions
  resave: false, // do not automatically write to the session store
  cookie: { httpOnly: true, maxAge: 2419200000 } // configure when sessions expires
}))

// passport auth
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());


const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/google/callback"
},
  async function (accessToken, refreshToken, profile, done) {
    try {
      const user = await UserModel.findOrAdd({ googleId: profile.id }, { googleId: profile.id, displayName: profile.name.givenName });
      if (user) return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }
));

passport.serializeUser(function (user, done) {
  const sessionUser = {
    _id: user._id,
    // displayName: user.displayName,
    // monthlyIncome: user.monthlyIncome,
    // monthlyGoal: user.monthlyGoal
  }
  done(null, sessionUser);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

// google auth
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('http://localhost:3000/home');
  });

// auth check
app.get('/auth', (req, res) => {
  console.log(req.user)
  console.log(req.session)
  if (req.user) res.status(200).json(req.user._id)
  else res.status(200).json(null)
})

// api route
const usersRouter = require('./routes/usersRouter')
app.use('/api/users', usersRouter);

// listen to port
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

// handle termination on ctrl+c to close mongo connection
process.on('SIGINT', () => {
  console.info('SIGTERM signal received.');
  mongoose.connection.close(false, () => {
    console.log('MongoDb connection closed.');
    process.exit(0);
  });
});