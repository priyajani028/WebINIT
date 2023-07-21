# NOTES

React: JS library for building user interfaces.

Complex app into component tree.

It makes components such that each component has its own piece of HTML, CSS, JS. There could be many components in an app. Each components updates itself without affecting the rest of the page.

React compares the old version of component tree and checks for updation. Once found any difference, it rerenders the part of the tree that is different.

JSX lets HTML to be inserted in JS and one step further, it can also let JS to be inserted in that HTML code. 

Practice at: https://codesandbox.io/s/react-new

You can go through the folders or just follow the links:
- Introduction to JSX: https://codesandbox.io/s/introduction-to-jsx-forked-346dps?file=/src/index.js

- JSX-Code-challenge: https://codesandbox.io/s/jsx-code-challenge-forked-g9fp9h?file=/src/index.js

- Javascript Expressions in JSX & ES6 Template Literals : https://codesandbox.io/s/javascript-expressions-in-jsx-forked-629nr3?file=/src/index.js

What is expressions and statements: 

Expressions: that becomes/results a value, for eg: var x= 5 or var x= 2+3 or var x= y();

Eg of multiple sub-expressions: 12+ square(7+5) + square(square(2));

all sub-expressions gets resolved and makes the whole expression valid and gives value.

Statements: action or instructions (all if else or for loops and while loops are statements)

You can't put statements where expressions are expected.

for eg: console.log(const x);  //error

let b = if(x>10){return 100;}  //error

- Javascript Expressions in JSX Practice : https://codesandbox.io/s/javascript-expressions-in-jsx-practice-forked-l5fq6f?file=/src/index.js
