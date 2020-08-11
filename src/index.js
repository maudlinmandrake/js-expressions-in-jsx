import React from "react";
import ReactDOM from "react-dom";

const fName = "Jenny";
const lName = "Mikac";
const luckyNumber = 9;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>My lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);

//You can put any JS expression into the curly braces and the code will be compiled within your HTML
//This will not work with JS statements (ie if/else)
