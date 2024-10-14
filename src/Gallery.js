import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = ({ images }) => {
  return (
    <div>
      {images.map(image => (
        <div key={image.id}>
          <Link to={`/image/${image.id}`}>
            <img src={image.thumbnailUrl} alt={image.title} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
