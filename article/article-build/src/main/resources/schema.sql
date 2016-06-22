DROP TABLE Article IF EXISTS;

CREATE TABLE Article (
  id                  BIGINT IDENTITY PRIMARY KEY,
  articlenumber       VARCHAR(30),
  articletitle        VARCHAR(255),
  articledescription  VARCHAR(255),
  articleean          VARCHAR(255),
  articleprice        DECIMAL,
  articlestock        INT,
  supplierid          VARCHAR(30)
);