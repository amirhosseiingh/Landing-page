import React from 'react';
import './offer.css';
import Button from '../../base/button/button';
import '../../base/button/button';
export default function Offer() {
  const handleClick = () => {
    alert('Done');
  };
  return (
    <div className="offer-container">
      <div className='offer-text-box'>
        <h1 className="offer-text">INTERESTED IN OPENING A ROW HOUSE?</h1>
        <p className="offer-title">
        We were inspired by the mission to serve all people of all shapes, sizes, and abilities, and attracted to the stability and expertise of the largest group of boutique fitness studios. It's a simple business model and we love impacting the lives of people that walk in our doors. Everyone has a purpose and has a place in our boat.”
        </p>
      </div>
      <Button onClick={handleClick} className="additional-class">
        REQUEST INFO
      </Button>
    </div>
  );
}
