import React, { useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import PetSoundsCover from '../PetSoundsCover.jpg';
import RevolverCover from '../RevolverCover.jpg';

const Albums = () => {
  const [albumInfo, setAlbumInfo] = useState({
    image: RevolverCover,
    releaseYear: 1966,
    name: "The Beatles",
    album: "Revolver",
    used: false
  });

  const switchAlbum = () => setAlbumInfo({
    image: PetSoundsCover,
    releaseYear: 1966,
    name: "The Beach Boys",
    album: "Pet Sounds",
    used: true
  });

  return (
    <Container>
      <Row>
        <Col>
          <h2>Challenge 1: Switch Albums</h2>
          <Card className="Album" style={{ width: '18rem', display: 'inline-flex', margin: '50px' }}>
            <Card.Img variant="top" src={albumInfo.image} />
            <Card.Body>
              <Card.Text>{albumInfo.album}</Card.Text>
              <Card.Text>{albumInfo.name}</Card.Text>
              <Card.Text>{albumInfo.releaseYear}</Card.Text>
              <Card.Text>{albumInfo.used ? "Used Album" : "New Album"}</Card.Text>
              <Button variant="outline-success" onClick={switchAlbum}>Switch Album</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Albums;