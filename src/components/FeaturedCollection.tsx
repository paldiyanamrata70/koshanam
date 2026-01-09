import { useEffect, useState, useRef } from 'react';

const FeaturedCollection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [titleAnimated, setTitleAnimated] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="collection" className="extended-collection" ref={sectionRef} style={{ transform: `translateY(${parallaxY}px)`, marginBottom: '130px' }}>
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
        .fabric-title.animate {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .fabric-title {
            font-size: 1.4rem;
          }
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
    </section>
  );
};

export default FeaturedCollection;
