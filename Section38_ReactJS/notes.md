# NOTES

### **React** : JS library for building user interfaces.

Complex app into component tree.

It makes components such that each component has its own piece of HTML, CSS, JS. There could be many components in an app. Each components updates itself without affecting the rest of the page.

React compares the old version of component tree and checks for updation. Once found any difference, it rerenders the part of the tree that is different.

**JSX** lets HTML to be inserted in JS and one step further, it can also let JS to be inserted in that HTML code. 

Practice at: https://codesandbox.io/s/react-new

You can go through the folders or just follow the links:

### 1. Introduction to JSX
https://codesandbox.io/s/introduction-to-jsx-forked-346dps?file=/src/index.js

### 2. JSX-Code-challenge
https://codesandbox.io/s/jsx-code-challenge-forked-g9fp9h?file=/src/index.js

### 3. Javascript Expressions in JSX & ES6 Template Literals 
https://codesandbox.io/s/javascript-expressions-in-jsx-forked-629nr3?file=/src/index.js

What is expressions and statements: 

Expressions: that becomes/results a value, for eg: var x= 5 or var x= 2+3 or var x= y();

Eg of multiple sub-expressions: 12+ square(7+5) + square(square(2));

all sub-expressions gets resolved and makes the whole expression valid and gives value.

Statements: action or instructions (all if else or for loops and while loops are statements)

You can't put statements where expressions are expected.

for eg: console.log(const x);  //error

let b = if(x>10){return 100;}  //error

### 4. Javascript Expressions in JSX Practice 
https://codesandbox.io/s/javascript-expressions-in-jsx-practice-forked-l5fq6f?file=/src/index.js

### 5. JSX Attributes & Styling React Elements
https://codesandbox.io/s/jsx-attributes-and-styling-forked-7vlxws?file=/src/index.js

you can add class like class="heading", it will give warning but it will work. In JS, you can access classes by className. Change it to className to remove the warning.

Also, there will be another warning that says it couldn't recognise "<" in index.html. To overcome this, as you can using the html code in JSX file rather than JS file, change the type in index.html to JSX to resolve the issue.

```
<script src="../src/index.js" type="text/JSX"></script>
```

Now, it knows that this is JSX file which has HTML code.

Also, whenever you write attributes in JSX, make sure to make it in camel case.

Do remember in JSX file, there should be closing tag. Else it will give error.

for example: in html , it is okay to write <img src="" alt=""> , but in JSX, you must close it : <img src="" alt="" />. With it, eslint makes sure you code in organized way. For example if you forgot alt attribute, it will show you yellow underlined code to highlight you, what's the warning/issue.

### 6. Inline Styling for React Elements
https://codesandbox.io/s/inline-styling-in-jsx-forked-ptmpyl?file=/src/index.js

inline styling in JSX won't work until unless it is in JS object for, that is:

```
{
    key: value;
}
```

### 7. React Styling Practice
https://codesandbox.io/s/react-styling-practice-forked-23l7cw?file=/src/index.js

### 8. React Components
https://codesandbox.io/s/react-components-forked-cy5sw9?file=/src/index.js

Components are reusable code that can be used many times.

Custom components can be differentiated with the help of using the first letter as capital.

```
function Heading(){
  return <h1>My Favourite Foods</h1>;
}
```

Can be used as <Heading></Heading> or if no data is there in between, better use self closing tag: <Heading/>

But components should be maintained by keeping seperate files of it and then use import / export of eslint for better usage.

for Heading component: create a file named "Heading.jsx" and paste the above code with export method and don't forget to import React . 

```
import React from "react";

function Heading() {
  return <h1>My Favourite Foods</h1>;
}

export default Heading;

```
Import the component in the index.js using import.

```
import Heading from "./Heading";
```

### 9 .React Components Practice
https://codesandbox.io/s/react-components-practice-forked-jqqlpj?file=/src/index.js

### 10. Javascript ES6 - Import, Export and Modules
https://codesandbox.io/s/es6-import-export-modules-forked-jpz2ds?file=/src/index.js

### 11. Javascript ES6 Import, Export and Modules Practice
https://codesandbox.io/s/es6-import-export-practice-forked-z9ztnd?file=/src/index.js

### 12. [Windows] Local Environment Setup for React Development

a. Download the recommended version of nodejs if not. 

b. install vs code if not

c. create react app

```
npx create-react-app my-app
```

d. run app


### 13. Keeper Project

https://codesandbox.io/s/keeper-app-part-1-starting-forked-w2fpq7

### 14. Props 

https://codesandbox.io/s/react-props-forked-2fwdqg?file=/src/index.js

Creating custom components should be done in a way that the first letter is capitalized. This is so to distinguish between the custom components and HTML tags.

Also, you can give style direct to the custom components as it is like a function that you are calling . So,

<Card className= "bg-blue-500"/> is "wrong".

As, mentioned, custom components work as a function that you are calling, thus, you can give the properties as well (aka props).  

You can define your props :

```
<Card
      name="Priya"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
```
and then use it in your component: 

```
function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}
```
