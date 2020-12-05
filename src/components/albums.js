import React, { useState, useEffect } from "react";
import { Button, Card, Spinner } from 'react-bootstrap';
import axios from "axios";
import Challenge from './challenge';

import PetSoundsCover from '../assets/PetSoundsCover.jpg';
import RevolverCover from '../assets/RevolverCover.jpg';
import UndertowCover from '../assets/UndertowCover.jpg';
import AlbumCoverNotAvailable from '../assets/AlbumCoverNotAvailable.png'

const Albums = props => {
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [currentAlbum, setCurrentAlbum] = useState({});

  const {
    album,
    image,
    name,
    releaseYear,
    used
  } = currentAlbum;

  const coverImage = {
    PetSoundsCover,
    RevolverCover,
    UndertowCover
  };

  const switchAlbum = () => {
    const currentAlbumIndex = albums.indexOf(currentAlbum);
    const nextAlbumIndex = currentAlbumIndex === -1 || currentAlbumIndex === albums.length - 1
      ? 0
      : currentAlbumIndex + 1;

    setCurrentAlbum(albums[nextAlbumIndex] ?? {});
  };

  useEffect(() => {
    (async() => {
      try {
        const {data: {albums}} = await axios.get(
          "http://my-json-server.typicode.com/robertmirro/ihs-markit-albums/mockdata"
        );

        setAlbums(albums);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoadingData(false);
      }
    })();
  }, []);

  useEffect(() => {
    switchAlbum();
  }, [isLoadingData]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Challenge {...props} title='Switch Albums'>
      <div className="album d-inline-flex justify-content-center">
        {isLoadingData &&
          <Spinner animation="border" />
        }

        {!isLoadingData &&
          <Card>
            <Card.Img variant="top" src={coverImage[image] ?? AlbumCoverNotAvailable} />
              <Card.Body>
                <Card.Text>{album}</Card.Text>
                <Card.Text>{name}</Card.Text>
                <Card.Text>{releaseYear}</Card.Text>
                <Card.Text>{used ? "Used" : "New"} Album</Card.Text>
                <Button variant="outline-success" onClick={switchAlbum}>Switch Album</Button>
              </Card.Body>
          </Card>
        }
      </div>
    </Challenge>
  );
};

export default Albums;
