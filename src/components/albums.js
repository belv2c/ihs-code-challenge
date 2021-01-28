import React, { Component } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import PetSoundsCover from '../PetSoundsCover.jpg';
import RevolverCover from '../RevolverCover.jpg';

class Albums extends Component {
  state = {
    image: RevolverCover,
    releaseYear: 1966,
    name: 'The Beatles',
    album: 'Revolver',
    used: false,
  };

  switchAlbum = () => {
    this.setState({
      image: PetSoundsCover,
      releaseYear: 1966,
      name: 'The Beach Boys',
      album: 'Pet Sounds',
      used: true,
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Challenge 1: Switch Albums</h2>
            <Card
              className="Album"
              style={{ width: '18rem', display: 'inline-flex', margin: '50px' }}
            >
              <Card.Img variant="top" src={this.state.image} />
              <Card.Body>
                <Card.Text>{this.state.album}</Card.Text>
                <Card.Text>{this.state.name}</Card.Text>
                <Card.Text>{this.state.releaseYear}</Card.Text>
                <Card.Text>
                  {this.state.used ? 'Used Album' : 'New Album'}
                </Card.Text>
                <Button variant="outline-success" onClick={this.switchAlbum}>
                  Switch Album
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Albums;
