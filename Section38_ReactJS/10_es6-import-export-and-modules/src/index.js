import React from "react";
import ReactDOM from "react-dom";
import * as pi from "./math";
//import pi, { doublePi, triplePi } from "./math";

// you can change pi to PI or pie or anything. But not with doublePi, triplePi as they aren't default

// ReactDOM.render(
//   <ul>
//     <li>{pi}</li>
//     <li>{doublePi()}</li>
//     <li>{triplePi()}</li>
//   </ul>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
