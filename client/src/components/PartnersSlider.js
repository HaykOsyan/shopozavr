import React, { useState } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import '../CSS/SCSS/PartnersSlider.scss';

const PartnersSlider = ({ elements }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? elements.length - 5 : prevIndex - 1
      );
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === elements.length - 5 ? 0 : prevIndex + 1
      );
    };
  
    return (
      <div className="partners-slider">
        <h3>Our Partners</h3>
        <div className="partners-slide-container d-flex my-2">
          {elements.slice(currentIndex, currentIndex + 5).map((element, index) => (
            <div key={index} className="partners-slide">
              {element}
            </div>
          ))}
        </div>
        <div className="partners-slider-arrows">
          <button className="btn-arrow top-right" onClick={prevSlide}>
            <FaArrowCircleLeft />
          </button>
          <button className="btn-arrow top-right" onClick={nextSlide}>
            <FaArrowCircleRight />
          </button>
        </div>
      </div>
    );
  };
  
export default PartnersSlider;