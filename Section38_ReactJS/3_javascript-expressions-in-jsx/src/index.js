import React from "react";
import ReactDOM from "react-dom";

const name = "Priya";
const num = 28;

const fName = "Priya";
const lName = "Jani";

ReactDOM.render(
  <>
    <h1>Hello {name}</h1>
    <h1>Hello {fName + " " + lName}</h1>
    <h1>
      Hello {fName} {lName}
    </h1>
    <h1>Hello {`${fName} ${lName}`}</h1>
    <p>My lucky number is {num}.</p>
    <p>My Random number is {Math.floor(Math.random() * 10)}.</p>
  </>,
  document.getElementById("root")
);

//What is ES6 template literals?
//eg: <h1>Hello {`${fName} ${lName}`}</h1> , here this ${fName} ${lName} is inserted as string by ES6 template literals and then it is inserted in JS using {} which is inserted in HTML code which is present in JS code/file.

//'if else' will give error if used in {}. Why? as they are statements.
//in {}, you can only type expressions not statements.
