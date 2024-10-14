import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ImageView = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`API_URL/${id}`)
      .then(response => {
        setImage(response.data);
      })
      .catch(err => {
        setError('Error loading image.');
      });
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!image) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={image.url} alt={image.title} />
      <h2>{image.title}</h2>
      <p>{image.description}</p>
    </div>
  );
};

export default ImageView;
