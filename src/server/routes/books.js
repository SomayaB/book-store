const router = require('express').Router();
const books = require('../../models/books');

router.get('/', (request, response) => {
  books.getAllBooks()
  .then(books => {
    response.render('books/index', {books});
  })
  .catch(error => {
    console.log(error);
  });
});

router.get('/new', (request, response) => {
  response.render('books/new');
});

router.post('/new', (request, response) => {
  const bookInfo = request.body;
  books.addBook(bookInfo)
  .then(newBook => {
    if(newBook) {
      response.redirect(`/books/${newBook.id}`)
    }
  })
  .catch(error => {
    console.log(error)
  })
})

router.get('/search', (request, response) => {
  const searchTerms = request.query.searchTerms
  console.log(typeof searchTerms);
  books.searchForBook(searchTerms)
  .then(matchingBooks => {
    console.log('matchingBooks::', matchingBooks) //figure out logic later.
    response.send(`Matching books: ${matchingBooks}`)
  })
  .catch(error => {
    console.log(error)
  })
})

//TODO Limit Number of Routes
router.get('/:bookId', (request, response) => {
  const id = request.params.bookId
  books.getBook(id)
  .then(book => {
    response.render(`books/show`, {book})
  })
  .catch(error => {
    console.log(error)
  })
})

router.put('/:bookId', (request, response) => {
  const id = request.params.bookId
  const newBookInfo = request.body
  console.log("This is the new book info", newBookInfo)
  books.editBook(id, newBookInfo)
  .then(updatedBook => {
    response.redirect(`/books/${id}`)
  })
  .catch(error => {
    console.log(error)
  })
})

router.delete('/:bookId', (request, response) => {
  const id = request.params.bookId
  books.deleteBook(id)
  .then(() => {
    response.redirect('/books')
  })
  .catch(error => {
    console.log(error)
  })
})

module.exports = router
