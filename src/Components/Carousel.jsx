import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  return (
    <div className="relative w-full h-64 overflow-hidden  shadow-md">
      <div className="absolute inset-0 flex transition-transform duration-500" >
          <img
            src={images[currentImageIndex]}
            alt={`Slide `}
            className="w-full h-full object-center "
          />
        
      </div>
    </div>
  );
};

export default Carousel;
