import { useState, useEffect } from 'react';

// Component for the animated card carousel showcasing artisanal excellence
const ArtisanalExcellence = () => {
  // Data for the 4 artisan cards, each with image and title
  const artisans = [
    {
      image: '/pictures/Hand embroidery (2).jpg',
      title: 'Hand Embroidery'
    },
    {
      image: '/pictures/Stitching.avif',
      title: 'Stitching'
    },
    {
      image: '/pictures/Ari embroidery...jpg',
      title: 'Ari Embroidery'
    },
    {
      image: '/pictures/Hand embroidery (3).jpg',
      title: 'Advanced Embroidery'
    },
  ];

  // State to track the current center card index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to set up the rotation interval (2.5-3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 2750); // 2.75 seconds for smooth timing

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="artisanal-section">
      <h2>Artisanal Excellence</h2>
      <div className="carousel-wrapper">
        {artisans.map((item, index) => {
          // Calculate the position relative to currentIndex for 4 positions: center, right, hidden, left
          const position = (index - currentIndex + 4) % 4;
          let cardClass = '';

          // Assign class based on position
          if (position === 0) cardClass = 'center';
          else if (position === 1) cardClass = 'right';
          else if (position === 2) cardClass = 'hidden';
          else cardClass = 'left';

          return (
            <div key={index} className={`card-container ${cardClass}`}>
              <div className="card">
                <img src={item.image} alt={item.title} />
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <div className="stats">
                    <span>{item.stat1}</span>
                    <span>{item.stat2}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ArtisanalExcellence;
