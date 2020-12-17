import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "../App.css";
import PetSoundsCover from "../PetSoundsCover.jpg";
import RevolverCover from "../RevolverCover.jpg";

const beatlesAlbum = {
    image: RevolverCover,
    releaseYear: 1966,
    artist: "The Beatles",
    name: "Revolver",
    used: false,
};

const beachBoysAlbum = {
    image: PetSoundsCover,
    releaseYear: 1966,
    artist: "The Beach Boys",
    name: "Pet Sounds",
    used: true,
};

const Albums = () => {
    const [album, setAlbum] = useState(beatlesAlbum);
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Challenge 1: Switch Albums</h2>
                    <Card className="Album" style={{ width: "18rem", display: "inline-flex", margin: "50px" }}>
                        <Card.Img variant="top" src={album.image} />
                        <Card.Body>
                            <Card.Text>{album.name}</Card.Text>
                            <Card.Text>{album.artist}</Card.Text>
                            <Card.Text>{album.releaseYear}</Card.Text>
                            <Card.Text>{album.used ? "Used Album" : "New Album"}</Card.Text>
                            <Button variant="outline-success" onClick={() => setAlbum(beachBoysAlbum)}>
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
