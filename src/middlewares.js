const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const routes = require('./routes');
const logger = require('./logger');
const { User } = require('../src/db/models');

module.exports = (app) => {
  // parse body
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  // static
  app.use(express.static(path.join(__dirname, '..', 'public')));
  // logging
  if (process.env.NODE_ENV !== 'test') app.use(morgan('combined', { stream: logger.stream }));
  // compress all responses
  app.use(compression());
  // passport
  app.use(passport.initialize());
  passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret',
  }, async (userProps, done) => {
    const user = await User.findByPk(userProps.id);
    if (!user) return done(null, false);

    return done(null, user);
  }));
  // routes
  app.use('/', routes);
  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    const status = err.status || 500;
    let body = { status };

    if (req.app.get('env') === 'development') {
      body = {
        ...body,
        message: err && err.message ? err.message : err,
        stacktrace: err.stack,
      };
    }

    logger.error(body);
    res.status(status).send(body);
  });
};

