const db = require('./db');

const addBook = (bookInfo) => {
  return db.oneOrNone(`
    INSERT INTO book
      (title, author, genre)
    VALUES
      ($1, $2, $3) RETURNING id
      `, [bookInfo.title, bookInfo.author, bookInfo.genre])
    .catch(error => console.log(error));
};

const getAllBooks = () => {
  return db.query(`SELECT * FROM book ORDER BY id`)
  .catch(error => console.log(error));
};

const getBook = (id) => {
  return db.oneOrNone(`SELECT * FROM book WHERE id=$1`, id)
  .catch(error => console.log(error));
};

const editBook = (id, newBookInfo) => {
  return db.query(`
    UPDATE
      book
    SET
      title=$2, author=$3, genre=$4
    WHERE id=$1
    `,
    [id, newBookInfo.title, newBookInfo.author, newBookInfo.genre])
  .catch(error => console.log(error));
};

const deleteBook = (id) => {
  return db.query(`DELETE FROM book WHERE id=$1`, id)
  .catch(error => console.log(error));
};

const searchForBook = (bookInfo) => {
  return db.query(`
    SELECT * FROM
      book
    WHERE
      lower(title, author, genre)
    LIKE
      $1
    `,
  `%${bookInfo.toLowerCase.replace(/\s+/,'%')}%`)
  .catch(error => console.log(error));
};


module.exports = {
  addBook,
  getAllBooks,
  getBook,
  editBook,
  deleteBook,
  searchForBook
};
