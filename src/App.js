import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ImageDetail from './ImageDetail';
import './App.css';  // Make sure to import the CSS file

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20')
      .then(response => {
        setImages(response.data.photos);
      })
      .catch(err => {
        console.error("Error details: ", err);
        setError('Error loading images.');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <h1>Image Gallery</h1>
            <div className="gallery">
              {images.map((image) => (
                <div key={image.id} className="image-item">
                  <Link to={`/image/${image.id}`}>
                    <img src={image.url} alt={image.title} />
                  </Link>
                  <p>{image.title}</p>
                </div>
              ))}
            </div>
          </div>
        } />

        <Route path="/image/:id" element={<ImageDetail images={images} />} />
      </Routes>
    </Router>
  );
}

export default App;
//https://chatgpt.com/c/670c78e5-2bac-800a-980c-a5a1925cd7fe