const db = require('./db/books');

const add = (title, author, genre) => {
  return db.add(title, author, genre);
};

const getAll = () => {
  return db.getAll();
};

const getById = (bookInfo) => {
  return db.getById(bookInfo);
};

const update = (id, title, author, genre) => {
  return db.update(id, title, author, genre);
};

const deleteById = (id) => {
  return db.deleteById(id);
};

const search = (bookInfo) => {
  return db.searchByColumn(bookInfo);
};

module.exports = {
  add,
  getAll,
  getById,
  update,
  deleteById,
  search
};
