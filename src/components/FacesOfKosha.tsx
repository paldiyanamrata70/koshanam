import { useState, useEffect, useRef } from 'react';

const FacesOfKosha = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { rootMargin: window.innerWidth <= 768 ? '0px 0px 0px 0px' : '0px 0px 0px 0px', threshold: window.innerWidth <= 768 ? 0.1 : 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="faces-of-kosha" className="faces" ref={sectionRef}>
      <h2 className="faces-title">face of kosha</h2>
      <div className={`faces-text ${isVisible ? 'reveal active' : 'reveal'}`}>
        Kosha is led by Krishna Mahadik, driven by a belief in slow, intentional fashion.
The brand brings together skilled artisans and contemporary design to create handcrafted sarees
and dresses with clarity and purpose. Kosha also designs thoughtfully crafted western wear
that carries the same philosophy of elegance and restraint. Each piece is made with respect for craft, attention to detail, and a quiet sense of timelessness rooted in India’s tradition.
      </div>
    </section>
  );
};

export default FacesOfKosha;
