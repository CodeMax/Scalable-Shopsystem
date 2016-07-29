CREATE SEQUENCE IF NOT EXISTS SEQ_Article START WITH 1 INCREMENT BY 1;

CREATE TABLE Article (
	ID BIGINT PRIMARY KEY,
	ARTICLETITLE VARCHAR(200),
	ARTICLEDESCRIPTION VARCHAR(200),
	ARTICLEEAN VARCHAR(200),
	ARTICLEPRICE NUMBER,
	ARTICLESTOCK BIGINT,
	SUPPLIERID VARCHAR(200)
)