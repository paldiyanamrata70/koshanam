import { useRef, useEffect, useState } from 'react';
import video1 from '../assets/images/video1.mp4';
import video2 from '../assets/images/video2.mp4';
import video3 from '../assets/images/video3.mp4';

const WatchFinest = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  const items = [
    { type: 'video', src: video1 },
    { type: 'video', src: video2 },
    { type: 'video', src: video3 },
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
    <div id="finest-film" className="watch-finest mb-[38px]" ref={componentRef} style={{ marginTop: window.innerWidth <= 768 ? '-30px' : '-10px' }}>
      <h2 className="watch-title mb-[0.5px] md:mb-[35px]">Watch Finest</h2>
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
                  preload="metadata"
                  controlsList="nodownload"
                  onLoad={() => console.log(`Video loaded: ${item.src}`)}
                  onError={(e) => console.error(`Video failed to load: ${item.src}`, e)}
                  onClick={() => {
                    setSelectedVideo(item.src);
                    setModalOpen(true);
                  }}
                  style={{ cursor: 'pointer' }}
                />
              )}
              <button style={{ background: 'rgba(0,0,0,0.5)', color: 'white', textAlign: 'center', padding: '10px 0', border: 'none', cursor: 'pointer', width: '100%' }}>Kanjivaram</button>
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
