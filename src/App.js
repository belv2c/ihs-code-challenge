import React, { Fragment } from "react";
import { Jumbotron, Container } from 'react-bootstrap';
import ChallengeList from './components/challenge-list';
import Albums from './components/albums';
import Counter from './components/counter';
import Toggle from './components/toggle';
import './App.css';

function App() {
  return (
    <Fragment>
        <Jumbotron fluid className="text-center">
          <Container>
            <h2>Welcome to the IHS Markit Code Challenge!</h2>
          </Container>
        </Jumbotron>

        <ChallengeList>
          <Albums />
          <Counter />
          <Toggle />
        </ChallengeList>
    </Fragment>
  );
}

export default App;
