DROP TABLE User IF EXISTS;
DROP TABLE Role IF EXISTS;

CREATE TABLE User (
  id            BIGINT IDENTITY PRIMARY KEY,
  username      VARCHAR(50),
  firstname     VARCHAR(50),
  lastname      VARCHAR(50),
  password      VARCHAR(50),
  address       VARCHAR(50),
  city          VARCHAR(50),
  postcode      VARCHAR(50),
  country       VARCHAR(50),
  failedlogins  INTEGER
);

CREATE TABLE Role (
  id            BIGINT IDENTITY PRIMARY KEY,
  role          VARCHAR(50)
);