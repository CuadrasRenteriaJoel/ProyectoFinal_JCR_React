import React from 'react';
import './section.css';

const Section = ({ title, content, images }) => (
  <section className="section">
    <h2>{title}</h2>
    <p>{content}</p>
    
    <div className="image-grid">
      {images && images.map((image, index) => (
        <div key={index} className="image-box">
          <img src={image} alt={`Imagen ${index + 1}`} />
        </div>
      ))}
    </div>
  </section>
);

export default Section;
