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
      <h2>Faces of kosha</h2>
      <p className={isVisible ? 'reveal active' : 'reveal'}>
        Kosha was founded by Krishna and Shoumik Mahadik, visionary creators committed to preserving
        the essence of handcrafted fashion. In collaboration with local artisans, they bring to life
        authentic, handmade sarees and dresses that seamlessly blend traditional craftsmanship with
        contemporary, minimalist design. Each Kosha piece is meticulously crafted with a focus on
        care, sustainability, and cultural heritage. Together, they strive to produce clothing that
        is meaningful, timeless, and deeply rooted in India's rich artistic traditions.
      </p>
    </section>
  );
};

export default FacesOfKosha;
