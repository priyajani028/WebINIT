--- 17-06-2023 11:48:12
--- SQLite
/***** ERROR ******
near "NOTNULL": syntax error
 ----- 
CREATE TABLE products (
	id INT NOTNULL,
  	name STRING ,
  	price MONEY,
  	PRIMARY KEY (id)
);
*****/

--- 17-06-2023 11:48:18
--- SQLite
CREATE TABLE products (
	id INT NOT NULL,
  	name STRING ,
  	price MONEY,
  	PRIMARY KEY (id)
);

--- 17-06-2023 11:48:47
--- SQLite
/***** ERROR ******
near "1": syntax error
 ----- 
INSERT INTO products(1, "Pen", 1.20);
*****/

--- 17-06-2023 11:49:17
--- SQLite
INSERT INTO products (id,name,price) VALUES (
  '1',
  'Pen',
  '1.2'
); SELECT * FROM products;

--- 17-06-2023 11:49:45
--- SQLite
/***** ERROR ******
UNIQUE constraint failed: products.id
 ----- 
INSERT INTO products VALUES (
  1,
  "Pen",
  1.2
);
*****/

--- 17-06-2023 11:50:00
--- SQLite
INSERT INTO products VALUES (
  2,
  "Pencil",
  2.1
);

--- 17-06-2023 11:50:05
--- SQLite
/***** ERROR ******
UNIQUE constraint failed: products.id
 ----- 
INSERT INTO products VALUES (
  2,
  "Pencil",
  2.1
);
*****/

--- 17-06-2023 11:50:11
--- SQLite
SELECT * FROM products;

--- 17-06-2023 11:51:01
--- SQLite
/***** ERROR ******
near ")": syntax error
 ----- 
INSERT INTO products (id,name) VALUES (
  3,
  'Eraser',
);
*****/

--- 17-06-2023 11:51:16
--- SQLite
INSERT INTO products (id,name) VALUES (
  3,
  "Eraser"
);

--- 17-06-2023 11:51:24
--- SQLite
SELECT * FROM products;

--- 17-06-2023 11:57:40
--- SQLite
SELECT * FROM products;

--- 17-06-2023 12:00:50
--- SQLite
SELECT * FROM products WHERE id=1;

--- 17-06-2023 12:03:51
--- SQLite
UPDATE products SET price=0.8 WHERE id=3;

--- 17-06-2023 12:04:00
--- SQLite
SELECT * FROM products;

--- 17-06-2023 12:06:31
--- SQLite
ALTER TABLE products ADD stock INT;

--- 17-06-2023 12:06:33
--- SQLite
SELECT * FROM products;

--- 17-06-2023 12:07:49
--- SQLite
UPDATE products SET stock=32 WHERE id=3;

--- 17-06-2023 12:07:55
--- SQLite
UPDATE products SET stock=22 WHERE id=2;

--- 17-06-2023 12:08:01
--- SQLite
UPDATE products SET stock=12 WHERE id=1;

--- 17-06-2023 12:08:07
--- SQLite
SELECT * FROM products;

--- 17-06-2023 12:08:51
--- SQLite
DELETE FROM products WHERE id=3;

--- 17-06-2023 12:08:53
--- SQLite
SELECT * FROM products;

--- 17-06-2023 12:10:07
--- SQLite
/***** ERROR ******
no such column: Eraser
 ----- 
INSERT INTO products VALUES (3,Eraser, 0.8, 32);
*****/

--- 17-06-2023 12:10:15
--- SQLite
INSERT INTO products VALUES (3,"Eraser", 0.8, 32);

--- 17-06-2023 12:10:21
--- SQLite
SELECT * FROM products;

--- 17-06-2023 12:22:35
--- SQLite
/***** ERROR ******
near ")": syntax error
 ----- 
CREATE TABLE orders(
 id INT NOT NULL,
 order_number INT,
 customer_id INT,
 product_id INT,
 PRIMARY KEY(id),
 FOREIGN KEY(customer_id) REFERENCES customers(id),
 FOREIGN KEY(product_id) REFERENCES products(id),
);
*****/

--- 17-06-2023 12:23:05
--- SQLite
CREATE TABLE orders(
 id INT NOT NULL,
 order_number INT,
 customer_id INT,
 product_id INT,
 PRIMARY KEY(id),
 FOREIGN KEY(customer_id) REFERENCES customers(id),
 FOREIGN KEY(product_id) REFERENCES products(id)
);

--- 17-06-2023 12:24:12
--- SQLite
INSERT INTO orders VALUES(1,4362,2,1);

--- 17-06-2023 12:24:44
--- SQLite
/***** ERROR ******
no such column: orders.ord
 ----- 
SELECT orders.ord;
*****/

--- 17-06-2023 12:26:00
--- SQLite
/***** ERROR ******
no such table: customers
 ----- 
SELECT orders.order_number, customers.first_name, customers.last_name, customer.address
FROM orders
INNER JOIN customers ON orders.customer_id= customer_id;
*****/

--- 17-06-2023 12:27:21
--- SQLite
/***** ERROR ******
near "(": syntax error
 ----- 
CREATE TABLE customers(
 id INT NOT NULL,
 first_name STRING, 
 last_name STRING, 
 address STRING
 PRIMARY KEY(id),
);
*****/

--- 17-06-2023 12:27:26
--- SQLite
/***** ERROR ******
near "(": syntax error
 ----- 
CREATE TABLE customers(
 id INT NOT NULL,
 first_name STRING, 
 last_name STRING, 
 address STRING
 PRIMARY KEY(id)
);
*****/

--- 17-06-2023 12:27:42
--- SQLite
/***** ERROR ******
near "(": syntax error
 ----- 
CREATE TABLE customers (
 id INT NOT NULL,
 first_name STRING, 
 last_name STRING, 
 address STRING
 PRIMARY KEY(id)
);
*****/

--- 17-06-2023 12:28:00
--- SQLite
CREATE TABLE customers (
 id INT NOT NULL,
 first_name STRING, 
 last_name STRING, 
 address STRING,
 PRIMARY KEY(id)
);

--- 17-06-2023 12:28:49
--- SQLite
INSERT INTO customers VALUES(1,"Priya", "Jani", "xyz, abc");

--- 17-06-2023 12:29:52
--- SQLite
/***** ERROR ******
no such column: customer.address
 ----- 
SELECT orders.order_number, customers.first_name, customers.last_name, customer.address
FROM orders
INNER JOIN customers ON orders.customer_id= customer_id;
*****/

--- 17-06-2023 12:30:08
--- SQLite
SELECT orders.order_number, customers.first_name, customers.last_name, customers.address
FROM orders
INNER JOIN customers ON orders.customer_id= customer_id;

--- 17-06-2023 12:32:23
--- SQLite
SELECT orders.order_number, products.name, products.price
FROM orders
INNER JOIN products ON orders.product_id= products.id ;

--- 17-06-2023 12:36:10
--- SQLite
DELETE FROM demo;

--- 17-06-2023 12:36:19
--- SQLite
DROP TABLE demo;

