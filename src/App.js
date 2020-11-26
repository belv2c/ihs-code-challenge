import React, { useState } from "react";
import ReactDOM from "react-dom";
import './App.css';
import Albums from "./components/albums";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the IHS Markit Code Challenge!</h1>
      <div className="container">
        <Albums />
      </div>
    </div>
  );
}

export default App;
