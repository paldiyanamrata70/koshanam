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
              backgroundPosition: index === 0 ? 'center center' : index === 1 ? '100% 65%' : index === 3 ? '40% 80%' : 'center center',
              backgroundSize: index === 1 ? '110%' : index === 3 ? '120%' : 'cover',
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
