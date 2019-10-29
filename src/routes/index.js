const { Router } = require('express');

const router = Router();

router
  .use('/api', require('./api'))
  .get('/', (req, res) => {
    res.send('Hello to our bookshop, stranger!');
  });

module.exports = router;
