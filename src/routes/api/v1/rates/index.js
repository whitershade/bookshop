const { Router } = require('express');
const controllers = require('./controllers');

const router = Router();

router
  .post('/', controllers.createItem)
  .patch('/:id', controllers.updateItem)

module.exports = router;
