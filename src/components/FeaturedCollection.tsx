import { useEffect, useState, useRef } from 'react';

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
      image: '/pictures/dress material .PNG',
      title: 'Dress Materials',
    },
    {
      image: '/pictures/sarres.JPG',
      title: 'Sarres',
    },
    {
      image: '/pictures/customize outfits.jpg',
      title: 'Customize Outfits',
    },
    {
      image: '/pictures/customize blouses.PNG',
      title: 'Customize Blouses',
    },
    {
      image: '/pictures/accessories.PNG',
      title: 'Accessories',
    },
    {
      image: '/pictures/hand embroidery.JPG',
      title: 'Hand Embroider',
    },
  ];

  const fabrics = [
    '/pictures/fabric1.JPG', '/pictures/fabric2.JPG','/pictures/fabric3.JPG',
     '/pictures/fabric5.JPG','/pictures/fabric8.JPG' , '/pictures/fabric6.jpg',
    '/pictures/fabric7.JPG', '/pictures/fabric9.JPG','/pictures/fabric11.JPG',
     '/pictures/fabric10.JPG', '/pictures/fabric4.JPG','/pictures/fabric12.JPG',
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
            setTimeout(() => setTitleAnimated(true), 1000);
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
          margin-bottom: 60px;
          margin-top: 100px;
          opacity: 0;
          transform: scale(0);
          transition: transform 1s ease, opacity 1s ease;
        }
        @media (max-width: 768px) {
          .fabric-title {
            font-size: 1.5rem !important;
            margin-top: 120px !important;
          }
        }
        .fabric-title.animate {
          opacity: 1;
          transform: translateY(0);
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
      <h2 className="decorative-title mb-[38px] mt-0">Featured Collection</h2>
      <div className="extended-grid">
        {collections.map((item, index) => (
          <div key={index} className="extended-item">
            <div className="image-placeholder">
              <img
                src={item.image}
                alt={item.title}
                className={`collection-img ${titleAnimated ? 'zoom-in' : ''}`}
                loading="lazy"
              />
              <p className="image-text">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className={`fabric-title ${isVisible ? 'animate' : ''}`}>Explore Fabric Artistry</h2>
      <div className="md:hidden flex flex-col items-center mt-4">
     </div>
    </section>
  );
};

export default FeaturedCollection;
