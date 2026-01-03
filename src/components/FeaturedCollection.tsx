import { useEffect, useState, useRef } from 'react';

const FeaturedCollection = () => {
  const [isVisible, setIsVisible] = useState(false);
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
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="collection" className="extended-collection" ref={sectionRef}>
      <h2 className="decorative-title mb-5 -mt-[45px]">Featured Collection</h2>
      <div className="extended-grid">
        {collections.map((item, index) => (
          <div key={index} className="extended-item">
            <div className="image-placeholder">
              <img
                src={item.image}
                alt={item.title}
                className={`collection-img ${isVisible ? 'zoom-in' : ''}`}
                loading="lazy"
              />
              <p className="image-text">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollection;
