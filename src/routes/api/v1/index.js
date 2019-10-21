const fs = require('fs');
const path = require('path');
const appRoot = require('app-root-path');
const { Router } = require('express');
const markdown = require('markdown-js');
const swaggerUi = require('swagger-ui-express');
const books = require('./books');
const swaggerDocument = require('./swagger.json');

const router = Router();
const filePath = path.join(appRoot.toString(), 'readme.md');

router
  .use('/swagger', swaggerUi.serve)
  .use('/books', books)
  .get('/swagger', swaggerUi.setup(swaggerDocument))
  .get('/readme', (req, res) => {
    const str = fs.readFileSync(filePath, 'utf8');

    res.send(markdown.makeHtml(str));
  });

module.exports = router;
