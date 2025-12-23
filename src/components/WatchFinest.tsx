import { useRef } from 'react';

const WatchFinest = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const items = [
    { type: 'image', src: '/pictures/home.jpg' },
    { type: 'video', src: '/pictures/video1.mp4' },
    { type: 'video', src: '/pictures/video3.mp4' },
  ];

  const scroll = (direction: number) => {
    if (scrollRef.current) {
      const box = scrollRef.current.querySelector('.image-box');
      if (box) {
        const scrollAmount = box.clientWidth + 50; // width + gap
        scrollRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div id="finest-film" className="watch-finest">
      <h2 className="watch-title">Watch Finest</h2>
      <div className="scroll-wrapper">
        <button className="finest-scroll-btn left" onClick={() => scroll(-1)}>
          ‹
        </button>
        <div className="images-row watch-images-row" ref={scrollRef}>
          {items.map((item, index) => (
            <div key={index} className="image-box">
              {item.type === 'image' ? (
                <img src={item.src} alt={`Finest ${index + 1}`} />
              ) : (
                <video
                  src={item.src}
                  muted
                  loop
                  playsInline
                  onClick={(e) => {
                    const video = e.currentTarget;
                    video.paused ? video.play() : video.pause();
                  }}
                />
              )}
              <p>Kanjivaram</p>
            </div>
          ))}
        </div>
        <button className="finest-scroll-btn right" onClick={() => scroll(1)}>
          ›
        </button>
      </div>
    </div>
  );
};

export default WatchFinest;
