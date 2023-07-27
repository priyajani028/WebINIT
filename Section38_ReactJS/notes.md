# NOTES

### **React** : JS library for building user interfaces.

Complex app into component tree.

It makes components such that each component has its own piece of HTML, CSS, JS. There could be many components in an app. Each components updates itself without affecting the rest of the page.

React compares the old version of component tree and checks for updation. Once found any difference, it rerenders the part of the tree that is different.

**JSX** lets HTML to be inserted in JS and one step further, it can also let JS to be inserted in that HTML code. 

Practice at: https://codesandbox.io/s/react-new

You can go through the folders or just follow the links:

(Note: Folders starting from 13 might have some issues in running.)

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

### 15. Props Practice 

https://codesandbox.io/s/react-props-practice-forked-jggt6x?file=/src/components/App.jsx


### 16. Chrome Dev tools

https://codesandbox.io/s/react-devtools-forked-8xw8tk?file=/src/components/Card.jsx

Get the React Developer Tools from Chrome extensions to help you understand the react DOM tree better.

### 17. Mapping

https://codesandbox.io/s/mapping-components-forked-wdq2cj?file=/src/components/Card.jsx


### 18. Mapping Practice (EmojiPedia)

https://codesandbox.io/s/mapping-components-practice-forked-g88nsm?file=/src/components/Entry.jsx

### 19. JS ES6 Map/Filter/Reduce

https://codesandbox.io/s/map-filter-reduce-forked-5pvdq3?file=/src/index.js

Map- create a new array 

forEach method has to use a new use array and then it performs the functions. 

Thus, map is more useful as it gives the output as a new array instead of creating new array from us.

```
var numbers = [3, 56, 2, 48, 5];

//map
const newNumbers1 = numbers.map(function (x) {
  return x * 2;
});

//forEach
var newNumbers2 = [];

numbers.forEach(function (x) {
  newNumbers2.push(x * 2);
});

```

Filter - Create a new array by keeping the items that return true.

```
const newNumbers = numbers.filter(function(num){
  return num > 10
})
```

Reduce : Accumulate a value by doing something to each item in an array.

```
var numbers = [3, 56, 2, 48, 5];
//aam zindagi 

// var newNumbers=0;

// numbers.forEach(function(currentNumber){
//   newNumbers+=currentNumber;
// })

//mentos zindagi
var newNumbers = numbers.reduce(function(accumulator, currentNumber){
  return accumulator + currentNumber;
})

//accumulator is first 3 and currentNumber is 56
//then accumulator becomes 59 and currentNumber is 2 and so on...

```

Find - find the first item that matches from an array.

```
const newNumber= numbers.find(function(num){
  return num>10
})
```

FindIndex - find the index of the first item that matches.

```
const newNumberIndex = numbers.findIndex(function (num) {
  return num > 10;
});
```

### 20. ES6 Arrow Functions

https://codesandbox.io/s/es6-arrow-functions-forked-pgr53q?file=/src/index.js

learn more from: https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/

```
var numbers = [3, 56, 2, 48, 5];

const newNumbers = numbers.map((x) => {
  return x * x;
});
```

### 21. Keeper 2

https://codesandbox.io/s/keeper-app-part-2-starting-forked-zkh959?file=/src/components/App.js

### 22. React Conditional Rendering with Ternary Operator and AND  Operator

https://codesandbox.io/s/conditional-rendering-forked-fvjglm?file=/src/components/App.jsx

Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.

For passing the function inline, where there is if else it will show error , as it wants expression and not a statement.

thus, using ternary or AND operators comes in handy.

```
<div className="container">
      {
        // isLoggedIn ? <h1>Hello</h1> : <Login />
        // currTime > 12 ? <h1>Working!!</h1> : null
        currTime > 12 && <h1>Working!!</h1>
      }
    </div>
```

### 23. Ternary and AND Operators Practice

https://codesandbox.io/s/conditional-rendering-practice-forked-x3gsnh?file=/src/components/Form.jsx

### 24. State in react ( Declarative and imperative programming )

https://codesandbox.io/s/introduction-to-state-completed-forked-628c3y?file=/src/components/App.jsx

UI = F(State) 

User interface of your website is a function of state of you web app.

Example : 
- React component is same for H2O whether its ice or water.
- state variable as false for TODO list and when clicked it becomes true and gets striked.


Declarative Programming :
- what to do
- Expressions
- Evaluate Results

```
let arr=[1,2,3,4,5];
arr2= arr.map(function(v,i){
  return v*2;
})
console.log(arr2);
```

Imperative Programming :
- How to do things
- Statements
- Defining variables and changing their values.

```
let arr=[1,2,3,4,5];
let arr2=[];
for(var i=0;i<arr.length;i++){
  arr2[i]=arr[i]*2;
}
console.log(arr2);
```
**Hooks** : These the functions that lets you hook into that state.

Why important ? as in the below example the strike won't work as the app is rendered once. And that's why, we need hooks to hook onto some state and make some functionalities working.


### 25. React Hooks - useState

https://codesandbox.io/s/usestate-hook-forked-9s6rxr?file=/src/components/App.jsx

A simple increase count do require state change ..if you want to  display it on your UI. Although you can see the changes that the value has changed by console logging it. But, it will not appear on the app as it requires re-rendering of the site. (doing it manually is indeed inefficient way.)

This is where Hooks comes into picture. But it has a condition :  it should be used in a functional component. (i.e a function that renders a component)

Output of a state is an array.
This is where **destructuring array** concept is used.

```
const colors= [9,132,227];
console.log(colors[0]);
```
Deconstructing the array:
```
const [red,green ,blue] = [9,132,277];
console.log(blue);
```

The first value red is mapped with first value 9 and so on.

Similarly,
```
const [count,setCount] =useState(0);
```
setCount is a function that returns a value and updates the value of count state.


### 26. useState Hook Practice

https://codesandbox.io/s/usestate-hook-practice-completed-forked-l4j9zy?file=/src/components/App.jsx


### 27. JS ES6 and Array Destructuring + Practice

https://codesandbox.io/s/es6-destructuring-forked-r8rcsg?file=/src/index.js


### 28. Event Handling

https://codesandbox.io/s/event-handling-in-react-forked-dlyjxy?file=/src/components/App.jsx


### 29. React Forms

https://codesandbox.io/s/react-forms-forked-wftd4w?file=/src/components/App.jsx

### 30. Class Component vs Functional Component

https://codesandbox.io/s/class-components-vs-hooks-forked-kwsgn8

Class Component: 

Syntax: 
```
class Car extends React.Component {
      render() {
        return <h2>Hi, I am a Car!</h2>;
      }
}
```

Example: 
```
import React, { Component } from "react";
  
class ClassComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.increase = this.increase.bind(this);
    }
  
    increase() {
        this.setState({ count: this.state.count + 1 });
    }
  
    render() {
        return (
            <div style={{ margin: '50px' }}>
                <h1>Welcome</h1>
                <h3>Counter App using Class Component : </h3>
                <h2> {this.state.count}</h2>
                <button onClick={this.increase}> Add</button>
  
            </div>
        )
    }
}
  
export default ClassComponent;
```

Functional Component:

Syntax:
```
const Car=()=> {
      return <h2>Hi, I am also a Car!</h2>;
}
```

Example:
```
import React, { useState } from "react";
  
const FunctionalComponent = () => {
    const [count, setCount] = useState(0);
  
    const increase = () => {
        setCount(count + 1);
    }
  
    return (
        <div style={{ margin: '50px' }}>
            <h1>Welcome</h1>
            <h3>Counter App using Functional Component : </h3>
            <h2>{count}</h2>
            <button onClick={increase}>Add</button>
        </div>
    )
}
  
export default FunctionalComponent;
```

What's the main difference ?
- FC : Stateless components , they accept the data and display them in some form..mainly rendering the UI.

CC: Stateful components as they implement logic and state.
- Hooks can be used easily in FC to make them stateful. In CC, it requires diffrent syntax to implement them.

example: 
```
constructor(props) {
   super(props);
   this.state = {name: ‘ ‘}
}
```
- Constructors are used in CC and not in FC.
- No render method in FC, but CC do require render for returning JSX.

What's the purpose?
- Functional Components shows greater performance, as it render the interface whenever the props are changed.
- CC: when the state is changed then the component is re-rendered.
- CC can use the React lifecycle whereas FC can't.


{props are the data that is passed on, state is used to manage the data within the component}

links: 
- https://legacy.reactjs.org/docs/state-and-lifecycle.html
- https://legacy.reactjs.org/docs/hooks-intro.html
- https://legacy.reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both
- https://react.dev/


### 31. Complex State

https://codesandbox.io/s/changing-complex-state-forked-f7lcn7?file=/src/components/App.jsx

Note: never try to use event.target inside set state. It will throw synthetic event error. As the events so created that are passed in the passed are the temporary ones , synthetic events. So, it might create problems here and there when used to change or set the state.

### 32. Changing the Complex state Practice

https://codesandbox.io/s/changing-complex-state-practice-forked-zjc4lq?file=/src/components/App.jsx


### 33. JS ES6 Spread Operator

https://codesandbox.io/s/es6-spread-operator-forked-8dr4td?file=/src/components/App.jsx

It's just three dots and magic happens!

```
const citrus =["lime", "lemon" ,"Orange"];
const fruits =["Apple", ...citrus, "Lichi", "Coconut"];
console.log(fruits);
```

Output: 

```
(6) ["Apple", "lime", "lemon", "Orange", "Lichi", "Coconut"]
0: "Apple"
1: "lime"
2: "lemon"
3: "Orange"
4: "Lichi"
5: "Coconut"
```

### 34. JS ES6 Spread Operator Practice (TODO List)

https://codesandbox.io/s/es6-spread-operator-practice-forked-xds8k8?file=/src/components/App.jsx
