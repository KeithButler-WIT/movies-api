import dotenv from 'dotenv';
import express from 'express';

import session from 'express-session';
// replace existing authenticate import with passport strategy
import passport from './authenticate';
import moviesRouter from './api/movies';
import personsRouter from './api/persons';
import tvsRouter from './api/tvs';
import genresRouter from './api/genres';
import usersRouter from './api/users';

import './db';
import './seedData';

dotenv.config();

const app = express();

const port = process.env.PORT;

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};

app.use(express.json());

app.use(passport.initialize());

//update /api/Movie route to use authenticate
app.use(express.static('public'));
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/persons', passport.authenticate('jwt', {session: false}), personsRouter);
app.use('/api/tvs', passport.authenticate('jwt', {session: false}), tvsRouter);
app.use('/api/genres', genresRouter);
app.use('/api/users', usersRouter);
app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
