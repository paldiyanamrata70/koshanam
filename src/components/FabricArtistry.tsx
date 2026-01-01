import { useRef } from 'react';

const FabricArtistry = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const fabrics = [
    '/pictures/fabric1.JPG',
    '/pictures/fabric2.JPG',
    '/pictures/fabric3.JPG',
    '/pictures/fabric4.JPG',
    '/pictures/fabric5.JPG',
    '/pictures/fabric6.jpg',
    '/pictures/fabric7.JPG',
    '/pictures/fabric8.JPG',
    '/pictures/fabric9.JPG',
    '/pictures/fabric10.JPG',
    '/pictures/fabric11.JPG',
    '/pictures/fabric12.JPG',
  ];

  const scroll = (direction: number) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('.fabric-card');
      if (card) {
        const scrollAmount = card.clientWidth + 80; // width + gap
        scrollRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div id="fabric" className="fabric-artistry">
      <h2 className="fabric-title">Explore Fabric Artistry</h2>
      <div className="fabric-scroll-wrapper">
        <button className="fabric-scroll-btn left" onClick={() => scroll(-1)}>
          ‹
        </button>
        <div className="fabric-row" ref={scrollRef}>
          {fabrics.map((fabric, index) => (
            <div key={index} className="fabric-card">
              <img
                src={fabric}
                alt={`Fabric ${index + 1}`}
                loading="lazy"
                style={{ transform: index === 11 ? 'rotate(180deg)' : 'none' }}
              />
              <p>Kanjivaram</p>
            </div>
          ))}
        </div>
        <button className="fabric-scroll-btn right" onClick={() => scroll(1)}>
          ›
        </button>
      </div>
    </div>
  );
};

export default FabricArtistry;
