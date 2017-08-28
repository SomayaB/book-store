const db = require('./db')

const addBook = (title, author, genre) => {
  db.query(`
    INSERT INTO book
      (title, author, genre)
    VALUES
      ($1, $2, $3) RETURNING id
      `, [title, author, genre])
    .catch(error => console.log(error))
}

const getAllBooks = () => {
  db.query(`SELECT * FROM book`)
  .catch(error => console.log(error))
}

const getBook = (bookInfo) => {
  db.query(`
    SELECT * FROM book
    WHERE title=$1 OR author=$1 OR genre=$1
    `,
     bookInfo)
  .catch(error => console.log(error))
}

const editBook = (id, title, author, genre) => {
  db.query(`
    UPDATE
      book
    SET
      title=$2, author=$3, genre=$4
    WHERE id=$1
    `,
    [id, title, author, genre])
  .catch(error => console.log(error))
}

const deleteBook = (id) => {
  db.query(`DELETE FROM book WHERE id=$1`, id)
  .catch(error => console.log(error))
}
