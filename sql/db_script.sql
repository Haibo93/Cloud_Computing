DROP TABLE Order_;
DROP TABLE User_;
DROP TABLE Product;

CREATE TABLE User_(
  id SERIAL primary key,
  last_name VARCHAR(255) not null,
  first_name VARCHAR(255) not null,
  email VARCHAR(255) not null,
  password_hash VARCHAR(255) not null,
  phone_number VARCHAR(255) not null,
  company_name VARCHAR(255) not null,
  is_admin boolean not null,
  created_at timestamp with time zone not null,
  updated_at timestamp with time zone not null
);
CREATE TABLE Product(
    id SERIAL primary key,
    prod_name VARCHAR(255) not null,
    prod_cost INTEGER not null,
    prod_description VARCHAR(255) not null
);
CREATE TABLE Order_(
    id SERIAL primary key,
    user_id INTEGER not null,
    product_id INTEGER not null,
    order_date timestamp with time zone not null,
    FOREIGN KEY (user_id) REFERENCES User_(id),
    FOREIGN KEY (product_id) REFERENCES Product(id)
);

INSERT INTO User_ (last_name, first_name, email, password_hash, phone_number, company_name, is_admin, created_at, updated_at) VALUES ('law', 'kent', 'kent@kent.com', '$2a$10$SF5YwdnplD5X6f4zCWal4eZpAHvxi07Tq3tbk3shdvM/7dP/bcHFO', '07283746573', 'Kents Co.', FALSE, TIMESTAMP '2022-03-18 10:23:54+02', TIMESTAMP '2022-03-18 10:23:55+02');
INSERT INTO User_ (last_name, first_name, email, password_hash, phone_number, company_name, is_admin, created_at, updated_at) VALUES ('uk', 'admin', 'admin@admin.com', '$2a$10$ZXs8GaqgxpCeXBxU1zm38uJj6hF25lZpdh62EQ6DhBMIsIhElgTxS', '07735989926', 'Cloud Solution Ltd.', TRUE, TIMESTAMP '2022-03-17 10:23:54+02', TIMESTAMP '2022-03-17 10:23:55+02');
INSERT INTO Product (prod_name, prod_cost, prod_description) VALUES ('Bronze', 100, 'Already have a website? Let us help you to host your website on the latest popular cloud platform! Included AWS, Azure and Google Cloud Platform.');
INSERT INTO Product (prod_name, prod_cost, prod_description) VALUES ('Silver', 200, 'Show us your web design and we will create it for you! The website will have a limited page of 10 and then be hosted on the cloud platforms.');
INSERT INTO Product (prod_name, prod_cost, prod_description) VALUES ('Gold', 500, 'Just tell us your idea. We will do the rest! It includes UX UI design, database implementation, the web and the host.');
INSERT INTO Product (prod_name, prod_cost, prod_description) VALUES ('Platinum', 1200, 'If you are ambitious about your online platform, this is the one! The best of Gold Package with more features, such as machine learning and artificial intellegience. It also comes with lifetime 24hr maintainence!');