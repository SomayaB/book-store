const router = require('express').Router();
const books = require('./books');
const { errorHandler, logErrors, notFoundHandler, setDefaultResponseLocals } = require('../middleware')

router.use('/books', books);
router.use(logErrors);
router.use(errorHandler);
router.use(notFoundHandler);

router.get('/', (request, response) => {
  response.redirect('/books');
});

module.exports = router;
