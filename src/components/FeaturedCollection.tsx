import { useEffect, useState, useRef } from 'react';
import dressMaterialImg from '../assets/images/dress-material.jpg';
import sarresImg from '../assets/images/sarres.JPG';
import customizeOutfitsImg from '../assets/images/customize-outfits.jpg';
import customizeBlousesImg from '../assets/images/customize-blouses.jpg';
import accessoriesImg from '../assets/images/accessories.jpg';
import handEmbroideryImg from '../assets/images/hand-embroidery.JPG';
import fabric1Img from '../assets/pictures/fabric1.jpg';
import fabric2Img from '../assets/pictures/fabric2.jpg';
import fabric3Img from '../assets/pictures/fabric3.jpg';
import fabric4Img from '../assets/pictures/fabric4.jpg';
import fabric5Img from '../assets/pictures/fabric5.jpg';
import fabric6Img from '../assets/pictures/fabric6.jpg';
import fabric7Img from '../assets/pictures/fabric7.jpg';
import fabric8Img from '../assets/pictures/fabric8.jpg';
import fabric9Img from '../assets/pictures/fabric9.jpg';
import fabric10Img from '../assets/pictures/fabric10.jpg';
import fabric11Img from '../assets/pictures/fabric11.jpg';
import fabric12Img from '../assets/pictures/fabric12.jpg';

// '/pictures/fabric1.JPG', '/pictures/fabric2.jpg','/pictures/fabric3.jpg',
//      '/pictures/fabric5.jpg','/pictures/fabric8.JPG' , '/pictures/fabric6.jpg',
//     '/pictures/fabric7.jpg', '/pictures/fabric9.JPG','/pictures/fabric11.JPG',
//      '/pictures/fabric10.jpg', '/pictures/fabric4.JPG','/pictures/fabric12.JPG',
     
const FeaturedCollection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [titleAnimated, setTitleAnimated] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);

  const [startX, setStartX] = useState(0);

  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);

  const collections = [
    {
      image: dressMaterialImg,
      title: 'Dress Materials',
    },
    {
      image: sarresImg,
      title: 'Sarres',
    },
    {
      image: customizeOutfitsImg,
      title: 'Customize Outfits',
    },
    {
      image: customizeBlousesImg,
      title: 'Customize Blouses',
    },
    {
      image: accessoriesImg,
      title: 'Accessories',
    },
    {
      image: handEmbroideryImg,
      title: 'Hand Embroider',
    },
  ];

  const fabrics = [
    fabric1Img, fabric2Img, fabric3Img,
    fabric5Img, fabric8Img, fabric6Img,
    fabric7Img, fabric9Img, fabric11Img,
    fabric10Img, fabric4Img, fabric12Img,
  ];

  const buttonTexts = [
    'Chiffon',
    'Maheshwari Chanderi',
    'Kanjivaram ',
    'Banarasi',
    'Kota silk',
    'Kora',
    'Katan Banarasi',
     'Maheshwari',
    'Banarasi',
    'Banarasi',
    'Tissue Katan Banarasi',
    'Banarasi',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => setTitleAnimated(true), 500);
          }
        });
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setParallaxY(-scrollY * 0.2);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <section id="collection" className={`extended-collection ${isVisible ? 'animate-up' : ''}`} ref={sectionRef} style={{ transform: `translate3d(0, ${parallaxY}px, 0)`, marginBottom: '130px', willChange: 'transform' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .fabric-title {
          text-align: center;
          font-size: clamp(1.5rem, 4vw, 2.625rem);
          margin-bottom: clamp(40px, 8vw, 60px);
          margin-top: 100px;
          opacity: 0;
          transform: scale(0);
          transition: transform 1s ease, opacity 1s ease;
        }
        @media (max-width: 768px) {
          .fabric-title {
            font-size: 1.5rem !important;
            margin-top: 60px !important;
            margin-bottom: 40px !important;
          }
        }
        .fabric-title.animate {
          opacity: 1;
          transform: translateY(10);
        }
        .curved-img-mobile {
          width: 200px;
          height: 280px;
          object-fit: cover;
          border-radius: 40px;
        }
        .simple-btn-mobile {
          margin-top: 15px;
          border: 1px solid #733B5B;
          padding: 8px 25px;
          border-radius: 20px;
          font-family: 'DM Sans', sans-serif;
          text-transform: uppercase;
          font-size: 0.7rem;
          font-weight: 500;
          color: #733B5B;
          cursor: pointer;
          background: transparent;
        }
        .simple-btn-mobile:hover {
          background: rgb(115, 59, 91);
          color: white;
        }
      `}} />
      <h2 className="decorative-title mb-[35px] md:mb-[45px] mt-0">Featured Collection</h2>
      <div className="extended-grid">
        {collections.map((item, index) => (
          <div key={index} className="extended-item">
            <div className="image-placeholder">
              <img
                src={item.image}
                alt={item.title}
                className={`collection-img ${titleAnimated ? 'zoom-in' : ''} blur-sm`}
                loading="lazy"
                onLoad={(e) => e.currentTarget.classList.remove('blur-sm')}
              />
              <p className="image-text">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className={`fabric-title hidden md:block ${isVisible ? 'animate' : ''}`}>Explore Fabric Artistry</h2>
      <div className="md:hidden flex flex-col items-center mt-4">
     </div>
    </section>
  );
};

export default FeaturedCollection;
