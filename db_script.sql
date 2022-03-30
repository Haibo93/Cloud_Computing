CREATE TABLE User(
    id ID_no primary key,
    last_name VARCHAR(255) not null,
    first_name VARCHAR(255) not null,
    email VARCHAR(255) not null,
    password_hash VARCHAR(255) not null,
    phone_number INTEGER,
    is_admin boolean not null,
    company_id VARCHAR(255) not null,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
CREATE TABLE Orders(
    id order_no primary key,
    ID_no INTEGER,
    FOREIGN KEY (ID_no) REFERENCES User(ID_no),
    order_date timestamp with time zone,
    product_id INTEGER,
    FOREIGN KEY (product_id) REFERENCES Product(product_id),

);
CREATE TABLE Product(
    id product_id primary key,
    name VARCHAR(255) not null,
    cost INTEGER not null,
    timeframe INTEGER not null,
);

CREATE SEQUENCE seq_userid 
START WITH 1 
INCREMENT BY 1;

CREATE SEQUENCE seq_order_no 
START WITH 1 
INCREMENT BY 1;

CREATE OR REPLACE TRIGGER user_id_nextval
BEFORE INSERT ON User
FOR EACH ROW 
  WHEN (new.ID_no IS NULL) 
BEGIN 
  :new.ID_no := seq_userid.nextval; 
END; 
/

CREATE OR REPLACE TRIGGER order_no_nextval
BEFORE INSERT ON User
FOR EACH ROW 
  WHEN (new.order_no IS NULL) 
BEGIN 
  :new.order_no := seq_order_no.nextval; 
END; 
/


INSERT INTO User VALUES
    (NULL, 'Thornton', 'James', 'ec21910@qmul.ac.uk', NULL, 07735989926, False, 'Lol good one', CURRENT_TIMESTAMP, NULL);

INSERT INTO Orders VALUES
    (NULL, 1, CURRENT_TIMESTAMP, 2)

INSERT INTO Orders VALUES
    (NULL, 1, CURRENT_TIMESTAMP, 3)