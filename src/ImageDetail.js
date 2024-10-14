import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './App.css';  // Import CSS

function ImageDetail({ images }) {
  const { id } = useParams();
  const image = images.find(img => img.id === parseInt(id));

  if (!image) {
    return <div>Image not found</div>;
  }

  return (
    <div className="single-image-page">
      <h2>{image.title}</h2>
      <img src={image.url} alt={image.title} />
      <p>{image.description}</p>
      <Link to="/" className="back-link">Back to Gallery</Link>
    </div>
  );
}

export default ImageDetail;
