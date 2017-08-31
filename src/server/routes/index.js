const router = require('express').Router();
const books = require('./books');

router.use('/books', books);

router.get('/', (request, response) => {
  response.redirect('/books');
});

module.exports = router;
