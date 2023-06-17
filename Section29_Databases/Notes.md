# Notes

## **SQL vs NoSQL**

SQL:  Structured Query Language (MySQL, Postgres SQL), Relational Databases

NO SQL: Not Only Structured Query Language (mongoDB, redis), Non Relational Databases

## **Working with SQL**

when there is extra info or less info, it creates irregular table.

![image](https://github.com/priyajani028/WebINIT/assets/87660206/84518feb-582e-46e7-a6c8-9c87722d0070)

SQL solves it by creating needed rows or columns and fills the empty cells with NULL.

![image](https://github.com/priyajani028/WebINIT/assets/87660206/9c96fb1a-013b-46d3-94fc-87fcf7613845)

Null could be dangerous, if you are not expecting it to be empty.

## **Working with NoSQL**

It creates or maintains data in JSON format and if there's extra info (2nd record in the pic), then it can be just added.

![image](https://github.com/priyajani028/WebINIT/assets/87660206/a55e761f-316d-471a-9f68-ebd213523b0a)

But NoSQL is not good at relationships (and so are you!).

## **Relational vs Non Relational**

For SQL: can create relationships among tables easily

![image](https://github.com/priyajani028/WebINIT/assets/87660206/2898bb27-d36b-4086-8ebd-7939b343cf20)

For NoSQL: create different JSON pieces but still clumsy

![image](https://github.com/priyajani028/WebINIT/assets/87660206/d4d5495c-728a-4be0-8b02-effae201ebd0)

So does NoSQL useful? OfCourse!! when you have one to many type of data

![image](https://github.com/priyajani028/WebINIT/assets/87660206/50ad1204-6217-4395-94e8-0b15b4e0f90d)

## **Scalability**

Though NoSQL is weak in relationships, but its far more better in terms of scalability.

As mentioned, SQL stores NULL values in order to maintain its structured format, which may result in memory issues.

Addind data to SQL is like adding floors to skyscraper. It may end up to collapse and maintaing vertically is difficult for a large data.

![image](https://github.com/priyajani028/WebINIT/assets/87660206/87bd2081-574a-4d34-90ca-cd5bce2eaab7)

In NoSQL, each record is maintained as JSON object and thus can be distributed and managed easily. Individual rowws of data can be represented as a document.

![image](https://github.com/priyajani028/WebINIT/assets/87660206/9b316227-a54f-4606-933b-32dc0f35bdd4)

![image](https://github.com/priyajani028/WebINIT/assets/87660206/21c0bcde-9880-4d06-b5e3-4ee7ae4d7a6b)

Its like building diffrent buildings in order to scale and maintain.

![image](https://github.com/priyajani028/WebINIT/assets/87660206/f98b66ea-d2a5-4862-b392-dad16e85943f)

## **Final Battle**

![image](https://github.com/priyajani028/WebINIT/assets/87660206/feb724aa-996f-4cdb-bdf4-45671e3b1107)


