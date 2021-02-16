create table Item (
	id INT PRIMARY KEY,
	title VARCHAR(2000),
	description CLOB,
	url VARCHAR(2000)
);

CREATE TABLE KEYWORD(
	ID INT PRIMARY KEY,
	KEYWORD VARCHAR(2000)
);

create table ITEM_KEYWORDS (
	items_id INT,
	keywords_id INT,
	FOREIGN KEY (items_id) REFERENCES Item(id),
	FOREIGN KEY (keywords_id) REFERENCES KEYWORD(ID)
);