import React, { useState } from 'react';
import { FaArrowCircleRight,  FaArrowCircleLeft } from 'react-icons/fa';
import '../CSS/SCSS/Slider.scss';

const Slider = ({ elements }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? elements.length - 4 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === elements.length - 4 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider">
      <button className='btn-arrow' onClick={prevSlide}><FaArrowCircleLeft/></button>
      <div className="slide-container d-flex my-2">
        {elements.slice(currentIndex, currentIndex + 4).map((element, index) => (
          <div key={index} className="slide">
            {element}
          </div>
        ))}
      </div>
      <button className='btn-arrow' onClick={nextSlide}><FaArrowCircleRight/></button>
    </div>
  );
};

export default Slider;
