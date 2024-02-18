// import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import drink from '../src/image/drinks.jpg';
// import drink1 from '../src/image/drinks1.jpg';
// import drink2 from '../src/image/drinks2.jpg';
// import drink3 from '../src/image/drinks3.jpg';
// import food2 from './image/food2.png';
// import food3 from './image/food3.png';
// import food4 from './image/food4.png';
// import food5 from './image/food5.png';
// import food6 from './image/food6.png';
// import food7 from './image/food7.png';
// import food8 from './image/food8.png';
// import food9 from './image/food9.png';
// import food10 from './image/food10.png';
// import food11 from './image/food11.png';
// import drink4 from './image/drinks4.png';
// import drink5 from './image/drinks5.png';
// import drink6 from './image/drinks6.png';

// const Drinks = () => {
//   const initialImages = [drink,drink2,drink3,   drink1,];
//   const [images, setImages] = useState(initialImages);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [minHeight, setMinHeight] = useState('auto');

//   const displayDuration = 2000;

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const newIndex = (currentImageIndex + 1) % initialImages.length;
//       setCurrentImageIndex(newIndex);
//     }, displayDuration);

//     return () => clearInterval(intervalId);
//   }, [displayDuration, currentImageIndex, initialImages.length]);

//   useEffect(() => {
//     const imageElements = document.querySelectorAll('.carousel .carousel-item img');
//     let minH = Number.POSITIVE_INFINITY;
//     imageElements.forEach((img) => {
//       if (img.clientHeight < minH) {
//         minH = img.clientHeight;
//       }
//     });
//     setMinHeight(minH + 'px');
//   }, [images]);

//   return (
//     <div style={{ maxWidth: '800px', margin: 'auto' }}>
//       <Carousel showThumbs={false} selectedItem={currentImageIndex}>
//         {images.map((image, index) => (
//           <div key={index}>
//             <img src={image} alt={`food-${index}`} style={{ maxWidth: '100%', minHeight: minHeight }} />
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Drinks;

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
    <div >
      <img  style={{height:"700px"}} src={images[currentImageIndex]} alt="dr" width="100%" />
    </div>
  );
};

export default Drinks;
