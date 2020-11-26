import React, { useState } from "react";
import ReactDOM from "react-dom";
import './App.css';
import { Jumbotron, Container } from 'react-bootstrap';
import Albums from "./components/albums";
import Counter from "./components/counter";
import Toggle from "./components/toggle";

function App() {
  return (
    <div className="App">
      <Jumbotron fluid>
        <Container>
          <h2>Welcome to the IHS Markit Code Challenge!</h2>
        </Container>
      </Jumbotron>
      <div className="container">
        <Albums />
        <Counter />
        <Toggle />
      </div>
    </div>
  );
}

export default App;
