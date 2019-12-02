const { Router } = require('express');
const controllers = require('./controllers');
const { isLoggedIn } = require('./../middlewares');

const router = Router();

router
  .post('/', isLoggedIn, controllers.createItem)
  .patch('/:id', isLoggedIn, controllers.updateItem);

module.exports = router;
