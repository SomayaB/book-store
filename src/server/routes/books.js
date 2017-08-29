const router = require('express').Router()
const Books = require('../../models/books')


router.get('/new', (request, response) => {
  response.render('books/new')
})


router.get('/', (request, response) => {
  Books.getAllBooks()
  .then(books => {
    response.render('books/index')
  })
  .catch(error => {
    console.log(error)
  })
})

router.post('/new', (request, response) => {
  const bookInfo = request.body
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
    console.log('book::', book)
    response.render(`books/book`, {book})
  })
  .catch(error => {
    console.log(error)
  })
})

router.put('/:bookId', (request, response) => {
  const id = request.params.bookId
  const newBookInfo = request.body
  console.log('newBookInfo::', newBookInfo);
  Books.editBook(id, newBookInfo)
  .then(updatedBook => {
    response.render('books/book', {updatedBook})
  })
  .catch(error => {
    console.log(error)
  })
})

router.delete('/:bookId', (request, response) => {
  const id = request.params.bookId
  Book.deleteBook(id)
  .then(() => {
    response.redirect('/books')
  })
  .catch(error => {
    console.log(error)
  })
})

router.get('/search', (request, response) => {
  const searchTerms = request.query
  Book.searchForBook(searchTerms)
  .then(matchingBooks => {
    console.log('matchingBooks::', matchingBooks) //figure out logic later.
    response.send(`Matching books: ${matchingBooks}`)
  })
  .catch(error => {
    console.log(error)
  })
})




module.exports = router
