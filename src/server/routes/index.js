const router = require('express').Router()
const Books = require('../../models/books') //why capitalized???
const booksRoutes = require('./books')

router.use('/books', booksRoutes)

router.get('/', (request, response) => {
  response.redirect('books/')
})

module.exports = router
