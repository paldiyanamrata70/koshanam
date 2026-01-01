import { useState, useEffect, useRef } from 'react';

const DividerBand = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="divider-band" ref={ref}>
      <p className={isVisible ? 'reveal active' : 'reveal'}>CONSCIENTIOUS LUXURY • HANDCRAFTED TEXTILES • HEIRLOOM PIECES</p>
    </div>
  );
};

export default DividerBand;
