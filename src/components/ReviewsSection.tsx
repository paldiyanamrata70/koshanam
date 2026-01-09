import { useState, useEffect } from 'react';

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { letter: 'N', name: 'Nisha, Mumbai', text: 'Absolutely love the fabric quality.' },
    { letter: 'N', name: 'Nisha, Mumbai', text: 'The design is so elegant yet comfortable. I keep coming back for more.' },
    { letter: 'K', name: 'Kavya, Bengaluru', text: 'Every outfit feels classy without being heavy.' },
    { letter: 'R', name: 'Rhea, Delhi', text: 'The finishing and detailing are really impressive.' },
    { letter: 'I', name: 'Isha, Ahmedabad', text: 'Beautiful colors, perfect fit, and amazing finishing.' },
    { letter: 'A', name: 'Aditi, Pune', text: "Kosha's clothes make me feel confident and effortless." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const current = testimonials[currentIndex];

  return (
    <section id="reviews" className="reviews-section">
      <div className="testimonial-container">
        <div className="testimonial fade" key={currentIndex}>
          <div className="avatar">{current.letter}</div>
          <div className="name">{current.name}</div>
          <span className="comment">"{current.text}"</span>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
