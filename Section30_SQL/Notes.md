# NOTES

For each databases, important basics steps are:

CRUD

C : Create

R : Read

U : Update

D : Destroy

You can work on : https://sqliteonline.com/

## **Create: Create a Table and Insert into a Table**

```
CREATE TABLE products (
	id INT NOT NULL,
  	name STRING ,
  	price MONEY,
  	PRIMARY KEY (id)
)
```

```
INSERT INTO products (id,name,price) VALUES (
  '1',
  'Pen',
  '1.2'
); SELECT * FROM products;
```


If you don't fill in the data for not null values,it will assign NULL to it.

INSERT INTO products (id,name) VALUES (
  3,
  'Eraser',
);


## **Read : READ, SELECT, WHERE**

To view table:

```
SELECT * FROM products ;
```

![image](https://github.com/priyajani028/WebINIT/assets/87660206/e60bb4f9-112f-4d24-99ee-141a603bb0e2)

Selecting and Viewing on basis of certain criteria:

```
SELECT * FROM products WHERE id=1;
```

![image](https://github.com/priyajani028/WebINIT/assets/87660206/99ff1aed-e230-4f2b-8f9c-6e641c619509)


## **Update : Updating Single Values and Adding columns**

Updating price value of eraser:

```
UPDATE products SET price=0.8 WHERE id=3;
SELECT * FROM products ;
```

![image](https://github.com/priyajani028/WebINIT/assets/87660206/acc5d012-7a40-44fe-befb-ffb4503cbecb)

To add, delete, modify columns in an existing table:

```
ALTER TABLE products ADD stock INT;
```

![image](https://github.com/priyajani028/WebINIT/assets/87660206/5a192c9d-db9a-405b-9bb9-a47832a9297d)


## **Destroy : DELETE**

```
DELETE FROM products WHERE id=3;
```

![image](https://github.com/priyajani028/WebINIT/assets/87660206/7308795a-98d8-448f-b82e-9f0a8f0c505d)


## **Relationships**

```
CREATE TABLE customers (
 id INT NOT NULL,
 first_name STRING, 
 last_name STRING, 
 address STRING,
 PRIMARY KEY(id)
);

INSERT INTO customers VALUES(1,"Priya", "Jani", "xyz, abc");
```

```
CREATE TABLE orders(
 id INT NOT NULL,
 order_number INT,
 customer_id INT,
 product_id INT,
 PRIMARY KEY(id),
 FOREIGN KEY(customer_id) REFERENCES customers(id),
 FOREIGN KEY(product_id) REFERENCES products(id),
)

INSERT INTO orders VALUES(1,4362,2,1);
```

You can join different tables using JOIN:

```
SELECT orders.order_number, customers.first_name, customers.last_name, customers.address
FROM orders
INNER JOIN customers ON orders.customer_id= customer_id;
```

![image](https://github.com/priyajani028/WebINIT/assets/87660206/f8f74d25-8d4a-4aa1-8f5d-6f213606b8f6)


```
SELECT orders.order_number, products.name, products.price
FROM orders
INNER JOIN products ON orders.product_id= products.id ;
```

![image](https://github.com/priyajani028/WebINIT/assets/87660206/46c94c18-02a7-4aa8-bbf4-24b6835484a9)
