import React, { useState, useEffect } from 'react';
import drink from '../src/image/drinks.jpg';
import drink1 from '../src/image/drinks1.jpg';
import drink2 from '../src/image/drinks2.jpg';
import drink3 from '../src/image/drinks3.jpg';

const Drinks = () => {
  const images = [drink, drink1, drink2, drink3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const displayDuration = 2000; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, displayDuration);

    return () => clearInterval(intervalId);
  }, [images.length, displayDuration]);

  return (
    <div>
      <img src={images[currentImageIndex]} alt="dr" width="100%" />
    </div>
  );
};

export default Drinks;
