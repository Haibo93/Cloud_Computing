CREATE TABLE Users(
  id SERIAL primary key,
  last_name VARCHAR(255) not null,
  first_name VARCHAR(255) not null,
  email VARCHAR(255) not null,
  password_hash VARCHAR(255) not null,
  phone_number VARCHAR(255) not null,
  is_admin boolean not null,
  company_id VARCHAR(255) not null,
  created_at timestamp with time zone,
  updated_at timestamp with time zone
);
CREATE TABLE Product(
    id SERIAL primary key,
    prod_name VARCHAR(255) not null,
    prod_cost INTEGER not null,
    prod_description VARCHAR(255) not null
);
CREATE TABLE Order_(
    id SERIAL primary key,
    user_id INTEGER,
    order_date timestamp with time zone,
    product_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (product_id) REFERENCES Product(id)
);
-- (last_name, first_name, email, password_hash, phone_number, is_admin, company_id, created_at, updated_at)

INSERT INTO Users (last_name, first_name, email, password_hash, phone_number, is_admin, company_id) VALUES ('Amrita', 'Jyoti', 'AJ12024857@gmail.com', 'PLACEHOLDER1', '07283746573', FALSE, '391380');
INSERT INTO Users (last_name, first_name, email, password_hash, phone_number, is_admin, company_id) VALUES ('Thornton', 'James', 'ec21910@qmul.ac.uk', 'PLACEHOLDER2', '07735989926', False, 'Lol good one');
INSERT INTO Users (last_name, first_name, email, password_hash, phone_number, is_admin, company_id) VALUES ('Chris', 'Abuelmatti', 'chris.abuelmatti@outlook.com', 'PLACEHOLDER3', '07542055777', FALSE, '568216');
INSERT INTO Users (last_name, first_name, email, password_hash, phone_number, is_admin, company_id) VALUES ('Kane', 'Harry', 'OVERRATED@thfc.com', 'PLACEHOLDER4', '02071234567', FALSE, '0001');

INSERT INTO Product (prod_name, prod_cost, prod_description) VALUES ('Bronze', 100, 'Bronze is bronze');
INSERT INTO Product (prod_name, prod_cost, prod_description) VALUES ('Silver', 200, 'Silver is better');
INSERT INTO Product (prod_name, prod_cost, prod_description) VALUES ('Gold', 300, 'Gold is great');
INSERT INTO Product (prod_name, prod_cost, prod_description) VALUES ('Platinum', 1000, 'Platinum is the best');

INSERT INTO Order_ (user_id, order_date, product_id) VALUES (1, TIMESTAMP '2022-03-19 10:23:54+02', 4);
INSERT INTO Order_ (user_id, order_date, product_id) VALUES (1, TIMESTAMP '2022-03-20 07:54:42+02', 3);
INSERT INTO Order_ (user_id, order_date, product_id) VALUES (2, CURRENT_TIMESTAMP, 2);
INSERT INTO Order_ (user_id, order_date, product_id) VALUES (2, CURRENT_TIMESTAMP, 3);
INSERT INTO Order_ (user_id, order_date, product_id) VALUES (3, TIMESTAMP '2022-03-24 11:26:04+02', 1);
INSERT INTO Order_ (user_id, order_date, product_id) VALUES (3, TIMESTAMP '2022-03-25 08:54:33+02', 2);
INSERT INTO Order_ (user_id, order_date, product_id) VALUES (1, TIMESTAMP '2022-02-12 18:17:04+02', 4);
INSERT INTO Order_ (user_id, order_date, product_id) VALUES (1, TIMESTAMP '2022-02-17 17:26:04+02', 4);
