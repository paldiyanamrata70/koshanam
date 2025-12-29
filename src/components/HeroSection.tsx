import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/pictures/home.jpg',
    '/pictures/blouse.jpg',
    '/pictures/kurties.jpg',
    '/pictures/saree.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-section">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: index === 0
                ? `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${slide}')`
                : `url('${slide}')`,
              backgroundPosition: index === 1 ? 'center 50%' : 'center center',
            }}
          />
        ))}
      </div>
      <div className="hero-center">
        <a href="#collection" className="hero-btn">
          Our Collection →
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
