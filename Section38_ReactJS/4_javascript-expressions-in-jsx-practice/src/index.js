//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const name = "Priya Jani";
// const year = 2023;
const currentDate = new Date();
console.log(currentDate);
const year = currentDate.getFullYear();

ReactDOM.render(
  <>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </>,
  document.getElementById("root")
);
