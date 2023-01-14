CREATE DATABASE movielist;

USE movielist;

CREATE TABLE movies (
  title VARCHAR(50) NOT NULL,
  watched INT DEFAULT 0 NOT NULL,
  PRIMARY KEY (title)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
