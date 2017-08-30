const db = require('./db/books');

const addBook = (title, author, genre) => {
  return db.addBook(title, author, genre);
};

const getAllBooks = () => {
  return db.getAllBooks();
};

const getBook = (bookInfo) => {
  return db.getBook(bookInfo);
};

const editBook = (id, title, author, genre) => {
  return db.editBook(id, title, author, genre);
};

const deleteBook = (id) => {
  return db.deleteBook(id);
};

const searchForBook = (bookInfo) => {
  return db.searchForBook(bookInfo);
};

module.exports = {
  addBook,
  getAllBooks,
  getBook,
  editBook,
  deleteBook,
  searchForBook
};
