CREATE DATABASE duluth_collaboration_working_db_testing;

\c duluth_collaboration_working_db_testing;

CREATE TABLE users (
  username VARCHAR(255) PRIMARY KEY,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  privilegelevel VARCHAR(255) NOT NULL
);