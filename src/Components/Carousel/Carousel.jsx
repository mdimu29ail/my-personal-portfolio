import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover transition-all duration-700"
      />
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-3 py-1 text-sm rounded">
        {index + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageCarousel;
