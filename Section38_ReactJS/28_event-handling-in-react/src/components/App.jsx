import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleClick() {
    //console.log("clicked");
    setHeadingText("Submitted");
  }

  function handleMouseOut() {
    setIsMouseOver(false);
  }

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
