import React from "react";
import ReactDOM from "react-dom";
// import * as operation from "./calculator";
import { add, subtract, multiply, divide } from "./calculator";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

// ReactDOM.render(
//   <ul>
//     <li>{operation.add(1, 2)}</li>
//     <li>{operation.multiply(2, 3)}</li>
//     <li>{operation.subtract(7, 2)}</li>
//     <li>{operation.divide(5, 2)}</li>
//   </ul>,
//   document.getElementById("root")
// );
ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
