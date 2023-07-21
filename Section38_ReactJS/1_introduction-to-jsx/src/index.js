//var React = require("react");
//var ReactDOM = require("react-dom");
import React from "react";
import ReactDOM from "react-dom"; //use import and export methods to make it more organized

ReactDOM.render(<h1>Hi</h1>, document.getElementById("root"));
//JSX : html in the body of JS file

// in react module, there is Babel which is JS compiler. -> which converts ECMAScript2015+  to older version so that it is compatible for all browsers.

//Below is the Pure JS for ReactDOM.render(<h1>Hi</h1>, document.getElementById("root"));

// var h1= document.createElement("h1");
// h1.innerHTML="Hi";
// document.getElementById("root").appendChild(h1);

//render can takes one single html element..so we need to wrap in single block.
