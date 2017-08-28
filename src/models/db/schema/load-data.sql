\c bookstore_development

\COPY books (title, author, genre) FROM './books_data.csv' DELIMITER ',' CSV HEADER;
