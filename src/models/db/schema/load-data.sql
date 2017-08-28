\c bookstore_development;

\COPY book (title, author, genre) FROM '/Users/Somaya/Desktop/LGProjects/phase-3/book-store/src/models/db/schema/books-data.csv' DELIMITER ',' CSV HEADER;
