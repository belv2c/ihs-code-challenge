import React, { useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import PetSoundsCover from '../PetSoundsCover.jpg';
import RevolverCover from '../RevolverCover.jpg';

const Albums = () => {
  const [localState, setLocalState] = useState({
    image: RevolverCover,
    releaseYear: 1966,
    name: 'The Beatles',
    album: 'Revolver',
    used: false,
  });

  const { image, releaseYear, name, album, used } = localState;

  const switchAlbum = () => {
    setLocalState({
      image: PetSoundsCover,
      releaseYear: 1966,
      name: 'The Beach Boys',
      album: 'Pet Sounds',
      used: true,
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Challenge 1: Switch Albums</h2>
          <Card
            className="Album"
            style={{ width: '18rem', display: 'inline-flex', margin: '50px' }}
          >
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Text>{album}</Card.Text>
              <Card.Text>{name}</Card.Text>
              <Card.Text>{releaseYear}</Card.Text>
              <Card.Text>{used ? 'Used Album' : 'New Album'}</Card.Text>
              <Button variant="outline-success" onClick={switchAlbum}>
                Switch Album
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Albums;
