import React, { Component } from "react";
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import PetSoundsCover from '../PetSoundsCover.jpg';
import RevolverCover from '../RevolverCover.jpg';
import { getSettings, saveSettings } from '../constants'

class Albums extends Component {
  constructor(props) {
    super(props);

    const settings = getSettings();

    this.state = {
      image: settings.image,
      releaseYear: settings.releaseYear,
      name: settings.name,
      album: settings.album,
      used: settings.used,
      count: settings.count
    };

    this.handleSwitchAlbum = this.handleSwitchAlbum.bind(this);
  }

  handleSwitchAlbum() {
    if (this.state.album !== 'Revolver') {
      this.setState({
        image: RevolverCover,
        releaseYear: 1966,
        name: "The Beatles",
        album: "Revolver",
        used: false,
      },() => saveSettings(this.state));
    } else {
      this.setState({
        image: PetSoundsCover,
        releaseYear: 1966,
        name: "The Beach Boys",
        album: "Pet Sounds",
        used: false,
      },() => saveSettings(this.state));
    }
  }

  render() {
    const { album, image, releaseYear, name, used } = this.state;

    return (
      <Container>
        <Row>
          <Col>
          <h2>Challenge 1: Switch Albums</h2>
          <Card className="Album" style={{ width: '18rem', display: 'inline-flex', margin: '50px' }}>
            <Card.Img variant="top" src={image} />
              <Card.Body>
                  <Card.Text>{album}</Card.Text>
                  <Card.Text>{name}</Card.Text>
                  <Card.Text>{releaseYear}</Card.Text>
                  <Card.Text>{used ? "Used Album" : "New Album"}</Card.Text>
                  <Button variant="outline-success" onClick={this.handleSwitchAlbum}>Switch Album</Button>
              </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
       
    );
  }
}

export default Albums;
