import { useRef, useEffect } from 'react';

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
      <h2 id="journey" className="journey-title">Journey</h2>
      <div className="journey-video-box" ref={componentRef}>
        <video muted loop playsInline poster="/pictures/home.jpg">
          <source src="/pictures/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default JourneySection;
