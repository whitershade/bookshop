const { Router } = require('express');
const controllers = require('./controllers');
const upload = require('../../../../utils/multer');

const router = Router();

router
  .post('/', upload.fields([{ name: 'avatar', maxCount: 1 }]), controllers.createItem)
  .patch('/:id', upload.fields([{ name: 'avatar', maxCount: 1 }]), controllers.updateItem)
  .post('/login', controllers.login);

module.exports = router;
