

\c duluthCollaborationWorkingDBTesting;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS nodes;

CREATE TABLE users (
  username VARCHAR(255) UNIQUE PRIMARY KEY,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE Nodes (
    id SERIAL PRIMARY KEY,
    question TEXT NOT NULL,
    left_id INTEGER REFERENCES Nodes(id),
    right_id INTEGER REFERENCES Nodes(id),
    parent_id INTEGER REFERENCES Nodes(id)
);