import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: ""
  });

  function handleChange(e) {
    const { value, name } = e.target;

    setFullName((prevValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prevValue.lname
        };
      } else if (name === "lname") {
        return {
          fname: prevValue.fname,
          lname: value
        };
      }
    });
  }

  //Version2

  // function handleChange(e) {
  //   const newValue = e.target.value;
  //   const inputName = e.target.name;

  //   setFullName((prevValue) => {
  //     if (inputName === "fname") {
  //       return {
  //         fname: newValue,
  //         lname: prevValue.lname
  //       };
  //     } else if (inputName === "lname") {
  //       return {
  //         fname: prevValue.fname,
  //         lname: newValue
  //       };
  //     }
  //   });
  // }

  //Version 1

  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");

  // function handleFNameChange(e) {
  //   setFname(e.target.value);
  // }

  // function handleLNameChange(e) {
  //   setLname(e.target.value);
  // }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lname}
      </h1>
      <form>
        <input
          onChange={handleChange}
          value={fullName.fname}
          name="fname"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={fullName.lname}
          name="lname"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
