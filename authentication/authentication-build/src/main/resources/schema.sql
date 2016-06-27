DROP TABLE Service_Template IF EXISTS;

CREATE TABLE Authentication (
  id        BIGINT IDENTITY PRIMARY KEY,
  name		VARCHAR(30)
);