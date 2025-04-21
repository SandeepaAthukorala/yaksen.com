import React, { useState, useEffect } from 'react';
import { slides, Slide } from '../resources/data'; 

const HeroSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(Math.floor(Math.random() * slides.length)); // Start from a random slide

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-black/70 z-10" />
      {slides.map((slide: Slide, index: number) => ( 
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default HeroSlideshow;
