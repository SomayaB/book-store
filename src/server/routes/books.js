const router = require('express').Router();
const Books = require('../../models/books');

router.get('/', (request, response) => {
  Books.getAllBooks()
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
  Books.addBook(bookInfo)
  .then(newBook => {
    if(newBook) {
      response.redirect(`/books/${newBook.id}`)
    }
  })
  .catch(error => {
    console.log(error)
  })
})

router.get('/:bookId', (request, response) => {
  const id = request.params.bookId
  Books.getBook(id)
  .then(book => {
    response.render(`books/book`, {book})
  })
  .catch(error => {
    console.log(error)
  })
})

router.put('/:bookId', (request, response) => {
  const id = request.params.bookId
  const newBookInfo = request.body
  console.log("This is the new book info", newBookInfo)
  Books.editBook(id, newBookInfo)
  .then(updatedBook => {
    response.redirect(`/books/${id}`)
  })
  .catch(error => {
    console.log(error)
  })
})

router.delete('/:bookId', (request, response) => {
  const id = request.params.bookId
  Books.deleteBook(id)
  .then(() => {
    response.redirect('/books')
  })
  .catch(error => {
    console.log(error)
  })
})

router.get('/search', (request, response) => {
  const searchTerms = request.query
  Books.searchForBook(searchTerms)
  .then(matchingBooks => {
    console.log('matchingBooks::', matchingBooks) //figure out logic later.
    response.send(`Matching books: ${matchingBooks}`)
  })
  .catch(error => {
    console.log(error)
  })
})




module.exports = router
