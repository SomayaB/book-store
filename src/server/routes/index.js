const router = require('express').Router();
const books = require('../../models/books');
const booksRoutes = require('./books');

router.use('/books', booksRoutes);

router.get('/', (request, response) => {
  response.redirect('books/');
});

module.exports = router;
