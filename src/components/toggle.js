import React, { Component } from "react";
import Surprise from "./surprise";
import Button from 'react-bootstrap/Button';
import { getSettings, saveSettings } from '../constants';

class Toggle extends Component {
  constructor(props) {
    super(props);

    const settings = getSettings();

    this.state = {
      showSurprise: settings.showSurprise,
    };

    this.revealSurprise = this.revealSurprise.bind(this);
  }

  revealSurprise = () => {
    this.setState({ showSurprise: !this.state.showSurprise }, () => saveSettings(this.state));
  };

  render() {
    const { showSurprise } = this.state;

    return (
      <div style={{ margin: "20px" }}>
        <h2>Challenge 3: Toggle</h2>
        <Button variant="outline-success" onClick={this.revealSurprise}>{!showSurprise ? "Show" : "Remove" } the cute sloth</Button>
        {showSurprise ? <Surprise /> : ""}
      </div>
    );
  }
}

export default Toggle;