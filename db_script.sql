CREATE TABLE User(
    id SERIAL primary key,
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
CREATE TABLE Product(
    id SERIAL primary key,
    name VARCHAR(255) not null,
    cost INTEGER not null,
    description VARCHAR(255) not null,
    timeframe INTEGER not null
);
CREATE TABLE Order_(
    id SERIAL primary key,
    user_id INTEGER,
    product_id INTEGER,
    order_date timestamp with time zone,
    FOREIGN KEY (user_id) REFERENCES User(id),
    FOREIGN KEY (product_id) REFERENCES Product(id)
);


INSERT INTO Product VALUES (1, "Bronze", 100, 10);
INSERT INTO Product VALUES (2, "Silver", 200, 15);
INSERT INTO Product VALUES (3, "Gold", 300, 20);
INSERT INTO Product VALUES (4, "Platinum", 1000, 1);

INSERT INTO User VALUES (1, "Amrita", "Jyoti", "AJ12024857@gmail.com", "PLACEHOLDER", "07283746573", FALSE, "391380");

INSERT INTO Order_ VALUES (1, 1, TIMESTAMP '2022-03-19 10:23:54+02', 4);
INSERT INTO Order_ VALUES (2, 1, TIMESTAMP '2022-03-20 07:54:42+02', 3);

