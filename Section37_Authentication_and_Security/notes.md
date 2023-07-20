## NOTES

Why you need authentication?

-> As different users come, we should be able to find them uniquely to do certain required tasks/ requests.

-> We create am account for each user, so that each time that user can login and can do whatever he/she wants to.

-> Another use, To restrict access , once user pays, he/she can access some other services.

Project name: Whisper App

![image](https://github.com/priyajani028/WebINIT/assets/87660206/379326c3-3808-471f-a672-53990986ead6)

Level of Security:

1. Username and password. Making register and login pages. If the user is registered then only he/she can access it.

2. Encryption: making the message scrambled to make it difficult one to guess. (Caesar Cipher: ABDCEFG -> CDEFGH shift by 3) (check cryptii.com)

npm package: mongoose-encryption  (uses HMAC-SHA-512)

Password + key -> encrypted password

(key in caesar is the number of shifting)

3. Hashing Password: Password ->HashFunction-> Hashed Password (Hash function is a mathematical equation that makes it almot impossible to go back and access eg. 377/3 =113.3333 , 377/29 =13,  similarly to get 13 and 29 from 377 will take years..  )

```
npm i md5
```

4. Hashing and Salting: password + random unique salt(random numbers) -> hash function -> hashed password

Salt rounds : how many rounds you are going to do the salting.

Round1: qwerty + 28891 ----Hashed Function--->  Hash

Round2: hash + 28891 ----Hashed Function--->  Different Hash

and so on..

npm package: bcrypt

5. Cookies and Sessions

Cookies store your data in local storage for your browser and use it.

Browser ---Get--> Server

Browser <---Response-- Server


Browser(added something to cart)  ---POST--> Server

Browser (Server created cookie)  <--Response-- Server

Browser stores the cookie

Next time when browser makes a get request, it sends cookie to the server, and server knows what was added to the cart if it finds past sessions.

A session is period of time when browser interacts with server. That's when the session starts.

Passport.js : authentication middleware for nodejs

```
npm i passport passport-local passport-local-mongoose express-session
```

6. OAuth2.0 (Third party Auth)

OAuth: Open Authorisation : it will look into all of your contacts and help you with connections

- Granular Access Levels (what kind of data they need for request)

- Read/Read+write Access

- Revoke Access


## **Hacking 101**

(Check your password strength: http://password-checker.online-domain-tools.com/)

common passwords taken: 

- Dictionary words
- Digits upto 6 patterns
- telephone directory names

Long password -> the complexities to guess grows exponentionally
