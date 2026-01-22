import { useRef, useEffect } from 'react';

const videoSrc = '/images/video.mp4';

const JourneySection = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target.querySelector('video');
          if (video) {
            if (entry.isIntersecting) {
              video.play().catch(() => {}); // Play when visible
            } else {
              video.pause(); // Pause when not visible
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% visible
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
    <>
      <h2 id="journey" className="journey-title mb-[40px] md:mb-[35px]" style={{ marginTop: '3px' }}>Journey</h2>
      <div className="journey-video-box mt-20 md:mt-0 mb-[35px] md:mb-[75px]" ref={componentRef}>
        <video muted loop playsInline controlsList="nodownload">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default JourneySection;
