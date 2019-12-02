const { Router } = require('express');
const controllers = require('./controllers');
const { isLoggedIn, isAdmin } = require('../middlewares');
const upload = require('../../../../utils/multer');

const router = Router();

router
  .post('/', upload.fields([{ name: 'avatar', maxCount: 1 }]), controllers.createItem)
  .patch('/:id', upload.fields([{ name: 'avatar', maxCount: 1 }]), controllers.updateItem)
  .delete('/:id', isLoggedIn, isAdmin, controllers.deleteItem)
  .post('/login', controllers.login)
  .get('/logout', controllers.logout);

module.exports = router;
