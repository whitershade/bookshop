const { Router } = require('express');
const controllers = require('./controllers');

const router = Router();

router
  .get('/', controllers.getItems)
  .get('/:id', controllers.getItem)
  .post('/', controllers.createItem)
  .patch('/:id', controllers.updateItem)
  .delete('/:id', controllers.deleteItem);

module.exports = router;
