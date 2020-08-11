import React from "react";
import ReactDOM from "react-dom";

const name = "Jenny";
const luckyNumber = 9;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>My lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
