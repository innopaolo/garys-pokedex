import React, { useState, useEffect } from 'react';

function PokemonCard({ id, name, image, type, onClick }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImage, setLoadedImage] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setLoadedImage(img.src);
      setIsLoading(false);
    };
  }, [image]);

  // Edit type parameter to have the right class name format
  const typeClass = type.split(', ')[0] + '-type';

  return (
    <div className={`pokemon-card ${typeClass}`} onClick={onClick}>
      <img className='card-icon' src="/pokeball-card.png" alt="" />
      <p>&nbsp;&nbsp;&nbsp;#{id}</p>

      {isLoading && <div className="loading-screen move-load"></div>}
      {loadedImage && !isLoading && (
        <img className='card-image' src={image} alt={name} />
      )}

      <h3>{name}</h3>
      <p>Type: {type}</p>
    </div>
  );
}

export default PokemonCard;
