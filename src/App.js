import React from "react";
import Logo from "./logo.svg";
import "./App.css";
import Calculator from "./answers/calculator";
import NavBar from "./answers/navbar";
import twoSum from "./answers/twoSum";

function App() {
  console.log(twoSum([2, 7, 11, 15], 9));
  console.log(twoSum([2, 3, 4], 6));
  return (
    <NavBar />
    // <Calculator/>
  );
}

export default App;
