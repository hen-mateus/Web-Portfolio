// VetClinicManagerDescription.js

import React, { useState } from 'react';

function VetClinicManagerDescription() {
  const [showImages, setShowImages] = useState(true);

  return (
    <div className="container">
      <h1>VetClinic Manager</h1>
      <div className="btn-group" role="group" aria-label="Toggle content">
        <button
          type="button"
          className={`btn ${showImages ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setShowImages(true)}
        >
          Images
        </button>
        <button
          type="button"
          className={`btn ${!showImages ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setShowImages(false)}
        >
          Text
        </button>
      </div>
      {showImages ? (
        // Renderiza as imagens
        <div>
          <p>Imagens</p>
        </div>
      ) : (
        // Renderiza o texto
        <div>
          <p>Texto</p>
        </div>
      )}
    </div>
  );
}

export default VetClinicManagerDescription;
