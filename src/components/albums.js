import React, { Component } from "react";

class Albums extends Component {
  state = {
    releaseYear: 1966,
    name: "The Beatles",
    album: "Revolver",
    used: false
  };
  switchAlbum = () => {
    this.setState({
      releaseYear: 1966,
      name: "The Beach Boys",
      album: "Pet Sounds",
      used: true
    });
  };

  render() {
    return (
      <div style={{ marginBottom: "50px" }}>
        <h2>Challenge 1: Switch albums</h2>
        <h3>Selected album is:</h3>
        <ul>
          <li>{this.state.name}</li>
          <li>{this.state.album}</li>
          <li>{this.state.releaseYear}</li>
          <li>{this.state.used ? "Used Album" : "New Album"}</li>
        </ul>
        <button onClick={this.switchAlbum}>Switch Album</button>
      </div>
    );
  }
}

export default Albums;
