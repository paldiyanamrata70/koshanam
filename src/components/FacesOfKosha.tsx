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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="faces-of-kosha" className="faces" ref={sectionRef}>
      <h2 className="faces-title">faces of kosha</h2>
      <div className={`faces-text ${isVisible ? 'reveal active' : 'reveal'}`}>
        Kosha is led by Krishna Mahadik, driven by a belief in<br />
        slow, intentional fashion. The brand brings together skilled<br />
        artisans and contemporary design to create handcrafted<br />
        sarees and dresses with clarity and purpose. Each piece is<br />
        made with respect for craft, attention to detail, and a<br />
        quiet sense of timelessness rooted in India's tradition.
      </div>
    </section>
  );
};

export default FacesOfKosha;
