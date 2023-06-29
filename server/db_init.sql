-- DROP DATABASE IF EXISTS duluthCollaborationWorkingDBTesting;
-- CREATE DATABASE duluthCollaborationWorkingDBTesting;

\c duluthCollaborationWorkingDBTesting;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  username VARCHAR(255) PRIMARY KEY,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);