DROP TABLE Service_Template IF EXISTS;

CREATE TABLE Service_Template (
  id        BIGINT IDENTITY PRIMARY KEY,
  name		VARCHAR(30)
);