//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <>
    <h1>Animals</h1>
    <ul>
      <li>Panda</li>
      <li>Dog</li>
      <li>Elephants</li>
    </ul>
  </>,
  document.getElementById("root")
);
