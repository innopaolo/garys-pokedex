import React from 'react';

function SeeMoreButton({ onClick }) {
  return (
    <div className="see-more-button">
      <button onClick={onClick}>See More</button>
    </div>
  );
}

export default SeeMoreButton;