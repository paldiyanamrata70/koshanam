import { useRef, useEffect, useState } from 'react';

const WatchFinest = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const videos = entry.target.querySelectorAll('video');
            videos.forEach((video) => {
              video.play().catch(() => {}); // Ignore play promise rejection
            });
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div id="finest-film" className="watch-finest" ref={componentRef}>
      <h2 className="watch-title">Watch Finest</h2>
      <div className="scroll-wrapper">
        <button className="finest-scroll-btn left" onClick={() => scroll(-1)}>
          ‹
        </button>
        <div className="images-row watch-images-row" ref={scrollRef}>
          {items.map((item, index) => (
            <div key={index} className="image-box">
              {item.type === 'image' ? (
                <img src={item.src} alt={`Finest ${index + 1}`} loading="lazy" />
              ) : (
                <video
                  src={item.src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="none"
                  onClick={() => {
                    setSelectedVideo(item.src);
                    setModalOpen(true);
                  }}
                  style={{ cursor: 'pointer' }}
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
      {modalOpen && (
        <div className="video-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="video-close-btn" onClick={() => setModalOpen(false)}>×</button>
            <video src={selectedVideo} controls autoPlay />
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchFinest;
