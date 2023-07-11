# **NOTES**

REST : REpresentational State Transfer

Client makes a request, Server tries to fulfill it. If the server can't fulfill then it send 404 error.

Client's request can be of the different types,its like speaking different languages. If you speak correct one according to your needs, you get the correct request fulfilled. 

A language that server can understand.

- HTTP : Hyper text transfer protocol
- FTP : File Transfer protocol
- HTTPS : HTTP with security. It encrypts the details of the request so that other clients don't get to know it.

![image](https://github.com/priyajani028/WebINIT/assets/87660206/73b863f7-20d0-48cc-a8a7-c5098272d833)

Result (res):

![image](https://github.com/priyajani028/WebINIT/assets/87660206/8f226a4c-cb50-4401-8eed-b98bfcc9967b)

Server may need help of database on the basis on request.

API acts as menu services so that can help client(customer) to communicate.

![image](https://github.com/priyajani028/WebINIT/assets/87660206/510f0306-5ea9-4373-bc0e-3d029f8dc10d)

To make API RESTful: it is an structure to design web APIs.

Rules to make API restful:
- Use HTTP request Verbs (GET, POST, PUT, PATCH, DELETE)
- Use specific pattern of routes/endpoint URLs

## HTTP request Verbs

similar like CRUD operations

- GET (READ)
- POST (CREATE)
- PUT PATCH(UPDATE)  : PUT updates by replacing whole piece with a new block while patch changes a particular part in the block where the changes have been done.
- DELETE(DELETE)
  

## Specific pattern of routes/endpoint URLs

Routes: /Home, /Login

