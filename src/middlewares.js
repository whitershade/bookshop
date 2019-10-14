const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');

const routes = require('./routes');
const logger = require('./logger');

module.exports = (app) => {
  // parse body
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  // logging
  app.use(morgan('combined', { stream: logger.stream }));
  // compress all responses
  app.use(compression());
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
