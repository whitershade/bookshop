const { Router } = require('express');
const passport = require('passport');
const controllers = require('./controllers');

const router = Router();

router
  .get('/',
    passport.authenticate('jwt', { session: false }),
    controllers.getItems)
  .get('/search',
    passport.authenticate('jwt', { session: false }),
    controllers.searchItems)
  .get('/:id',
    passport.authenticate('jwt', { session: false }),
    controllers.getItem)
  .post('/',
    passport.authenticate('jwt', { session: false }),
    controllers.createItem)
  .patch('/:id',
    passport.authenticate('jwt', { session: false }),
    controllers.updateItem)
  .delete('/:id',
    passport.authenticate('jwt', { session: false }),
    controllers.deleteItem);

module.exports = router;
