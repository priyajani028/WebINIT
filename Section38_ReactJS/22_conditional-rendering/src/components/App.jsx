import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currTime = new Date().getHours();

console.log(currTime);

function App() {
  return (
    <div className="container">
      {
        // isLoggedIn ? <h1>Hello</h1> : <Login />
        // currTime > 12 ? <h1>Working!!</h1> : null
        currTime > 12 && <h1>Working!!</h1>
      }
    </div>
  );
}

export default App;
