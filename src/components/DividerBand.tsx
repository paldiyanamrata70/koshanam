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
      <p className={isVisible ? 'reveal active' : 'reveal'}>
        <span className="mobile-hidden">CONSCIENTIOUS LUXURY • HANDCRAFTED TEXTILES • HEIRLOOM PIECES</span>
        <span className="mobile-only">
          • CONSCIENTIOUS LUXURY •<br />
          • HANDCRAFTED TEXTILES •<br />
          • HEIRLOOM PIECES •
        </span>
      </p>
    </div>
  );
};

export default DividerBand;
