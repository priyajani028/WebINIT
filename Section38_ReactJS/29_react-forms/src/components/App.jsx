import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  //const [submit, setSubmit] = useState(false);
  const [heading, setHeading] = useState("");

  function handleChange(event) {
    //console.log("Changed");
    //console.log(event.target.value);
    //console.log(event.target.placeholder);
    setName(event.target.value);
  }
  function handleClick(event) {
    setHeading(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      {/* controlled components */}
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          value={name}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
