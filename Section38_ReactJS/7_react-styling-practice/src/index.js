//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "blue"
};

//const date = new Date(2023,1,1,10);
const date = new Date();
let msg;
if (date.getHours() < 12) {
  msg = "Good Morning";
  customStyle.color = "red";
} else if (date.getHours() < 18) {
  msg = "Good Afternoon";
  customStyle.color = "green";
} else {
  msg = "Good evening";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {msg}
  </h1>,
  document.getElementById("root")
);
