import { useState, useEffect, useRef } from 'react';

const StorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState([
    { value: 0, target: 2, suffix: '+', label: 'Years of Craft' },
    { value: 0, target: 100, suffix: '+', label: 'Artisans' },
    { value: 0, target: 100, suffix: '%', label: 'Handmade' },
  ]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (!hasAnimated.current) {
              hasAnimated.current = true;
              animateStats();
            }
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

  const animateStats = () => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }
        setStats((prev) => {
          const newStats = [...prev];
          newStats[index] = { ...newStats[index], value: Math.floor(current) };
          return newStats;
        });
      }, 20);
    });
  };

  return (
    <section id="about" className="story-section" ref={sectionRef}>
      <h2 className="decorative-title mb-[30px] -mt-5">Celebrating Kosha</h2>
      <div className={`story-text ${isVisible ? 'reveal active' : 'reveal'}`}>
        <p>Kosha, The colours and patterns tell the stories weaving, flaunting a unique</p>
        <p>timelessness, is a modern clothing brand rooted in fine craftsmanship and thoughtful design.</p>
        <p>Every piece is created with a deep respect for fabric artistry, blending traditional techniques with contemporary style to offer women clothing that feels elegant, expressive, and timeless.</p>
        <p>Kosha celebrates individuality through refined fashion made with passion and purpose.</p>
      </div>
      <div className={`story-stats ${isVisible ? 'reveal active' : 'reveal'}`}>
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}{stat.suffix}</strong> {stat.label}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StorySection;
