require('./config');
const express = require('express');

const middlewares = require('./middlewares');
const logger = require('./logger');

const app = express();

middlewares(app);

app.listen(process.env.PORT, () => {
  logger.info(`Server started with env: ${process.env.NODE_ENV} on port ${process.env.PORT}`);
});

module.exports = app;
