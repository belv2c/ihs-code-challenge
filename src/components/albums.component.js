import React, { useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import PetSoundsCover from '../PetSoundsCover.jpg';
import RevolverCover from '../RevolverCover.jpg';

const Albums = () => {

  const initialState = {
    image: RevolverCover,
    releaseYear: 1966,
    artistName: 'The Beatles',
    albumName: 'Revolver',
    used: false
  }

  const[album, setAlbum] = useState(initialState);

  const switchAlbum =()=> {
    const newAlbum = {
      image: PetSoundsCover,
      releaseYear: 1966,
      artistName: "The Beach Boys",
      albumName: "Pet Sounds",
      used: true
    }
    setAlbum(newAlbum);
  };

  return(
    <Container>
        <Row>
          <Col>
          <h2>Challenge 1: Switch Albums</h2>
          <Card className="Album" style={{ width: '18rem', display: 'inline-flex', margin: '50px' }}>
            <Card.Img variant="top" src={album.image} />
              <Card.Body>
                  <Card.Text>{album.albumName}</Card.Text>
                  <Card.Text>{album.artistName}</Card.Text>
                  <Card.Text>{album.releaseYear}</Card.Text>
                  <Card.Text>{album.used ? "Used Album" : "New Album"}</Card.Text>
                  <Button variant="outline-success" onClick={switchAlbum}>Switch Album</Button>
              </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
  )
}

export default Albums;
