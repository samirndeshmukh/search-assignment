create table Item (
	id INT,
	title VARCHAR(2000),
	description TEXT,
	url VARCHAR(2000)
);

CREATE TABLE KEYWORD(
	ID INT PRIMARY KEY,
	KEYWORD VARCHAR(2000)
);

create table ITEM_KEYWORDS (
	items_id INT ,
	keywords_id INT
);