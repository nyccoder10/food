import React from 'react';
import dish1 from './assets/dish.png';
import dish2 from './assets/dish2.png';
import dish3 from './assets/dish3.png';
import dish4 from './assets/dish4.png';
import dish5 from './assets/dish5.png';
import dish6 from './assets/dish6.png';
// Import more images as needed

const images = [
  dish1,
  dish2,
  dish3,
  dish4,
  dish5,
  dish6
  // Add more imported images as needed
];

const FoodCarousel = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap max-w-[80vw] mx-auto pt-4">
      <div>
        <h1 className='text-2xl font-semibold '>What's On your mind ?</h1>
        </div>

      <div className="animate-scroll flex space-x-4">
        
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Dish ${index + 1}`}
            className="md:w-40 md:h-40 w-28 h-28 object-cover"
          />
        ))}
        {images.map((image, index) => (
          <img
            key={index + images.length}
            src={image}
            alt={`Dish ${index + 1}`}
            className="md:w-40 md:h-40 w-28 h-28 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default FoodCarousel;
