import { useState, useEffect } from 'react';
import homeImg from '../assets/images/home.jpg';
import blouseImg from '../assets/images/blouse.jpg';
import kurtiesImg from '../assets/images/kurties.jpg';
import sareeImg from '../assets/images/saree.jpg';
import homeMobileImg from '../assets/images/home-mobileview.JPG';
import blouseMobileImg from '../assets/images/blouse -mobileview.jpg';
import kurtiesMobileImg from '../assets/images/kurties -mobileview.jpg';
import sareeMobileImg from '../assets/images/saree-mobileview.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    homeImg,
    blouseImg,
    kurtiesImg,
    sareeImg,
  ];

  const mobileSlides = [
    homeMobileImg,
    blouseMobileImg,
    kurtiesMobileImg,
    sareeMobileImg,
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-section">
      <div className="slides">
        {(isMobile ? mobileSlides : slides).map((slide, index) => (
           <div
             key={index}
             className={`slide ${index === 0 ? 'home-slide' : ''} ${index === 1 ? 'blouse-slide' : ''} ${index === 2 ? 'kurties-slide' : ''} ${index === 3 ? 'saree-slide' : ''} ${index === currentSlide ? 'active' : ''}`}
             style={{
               backgroundImage: index === 0
                 ? `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${slide}')`
                 : `url('${slide}')`,
               backgroundPosition: index === 0 ? 'center center' : index === 1 ? '25% 75%' : index === 3 ? '40% 90%' : 'center center',
               backgroundSize: index === 1 ? '120%' : (index === 2 || index === 3) ? '100%' : 'cover',
             }}
           />
         ))}
      </div>
      <div className="hero-overlay">
        <h2 className="hero-title">Celebrating Kosha</h2>
      </div>

      <div className="hero-center">
  <button
    className="hero-btn"
    onClick={() => {
      document
        .getElementById("collection")
        ?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Our Collection →
  </button>
</div>

    </section>
  );
};

export default HeroSection;
