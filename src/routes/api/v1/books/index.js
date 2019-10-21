const { Router } = require('express');
const controllers = require('./controllers');

const router = Router();

router
  .get('/', controllers.getItems)
  .get('/:id', controllers.getItem);

module.exports = router;
