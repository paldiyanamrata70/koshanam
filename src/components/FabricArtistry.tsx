import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import fabric1 from '/pictures/fabric1.JPG';
import fabric2 from '/pictures/fabric2.JPG';
import fabric3 from '/pictures/fabric3.JPG';
import fabric4 from '/pictures/fabric4.JPG';
import fabric5 from '/pictures/fabric5.JPG';
import fabric6 from '/pictures/fabric6.JPG';
import fabric7 from '/pictures/fabric7.JPG';
import fabric8 from '/pictures/fabric8.JPG';
import fabric9 from '/pictures/fabric9.JPG';
import fabric10 from '/pictures/fabric10.JPG';
import fabric11 from '/pictures/fabric11.JPG';
import fabric12 from '/pictures/fabric12.JPG';

const FabricArtistry = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [parallaxY, setParallaxY] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);

  const fabrics = [
    fabric1, fabric2, fabric3,
    fabric5, fabric8, fabric6,
    fabric7, fabric9, fabric11,
    fabric10, fabric4, fabric12,
  ];

  const buttonTexts = [
    'Chiffon',
    'Maheshwari Chanderi',
    'Kanjivaram ',
    'Banarasi',
    'Kota silk',
    'Kora',
    'Katan Banarasi',
     'Maheshwari',
    'Banarasi',
    'Banarasi',
    'Tissue Katan Banarasi',
    'Banarasi',
  ];

  const animations = ['fabric-sway', 'fabric-3d', 'fabric-bounce'];

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].clientX;
    const walk = (x - startX) * 2; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => setShowImages(true), 1000);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowLogo(true);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (thirdRef.current) observer.observe(thirdRef.current);
    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const curvedImgs = document.querySelectorAll('.curved-img');

    const handleMouseEnter = (e: Event) => {
      const img = e.target as HTMLElement;
      const container = img.parentElement;
      const button = container?.querySelector('.simple-btn') as HTMLElement;
      if (button) {
        button.classList.add('purple');
      }
    };

    const handleMouseLeave = (e: Event) => {
      const img = e.target as HTMLElement;
      const container = img.parentElement;
      const button = container?.querySelector('.simple-btn') as HTMLElement;
      if (button) {
        button.classList.remove('purple');
      }
    };

    curvedImgs.forEach((img) => {
      img.addEventListener('mouseenter', handleMouseEnter);
      img.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      curvedImgs.forEach((img) => {
        img.removeEventListener('mouseenter', handleMouseEnter);
        img.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const scroll = (direction: number) => {
    if (scrollRef.current) {
      const scrollAmount = 350; // approximate item width
      scrollRef.current.scrollLeft += direction * scrollAmount;
    }
  };

  return (
    <div
      id="fabric"
      ref={sectionRef}
      className="fabric-section"
      style={{
        paddingTop: 'clamp(120px, 15vw, 100px)',
        overflowX: 'auto',
        overflowY: 'hidden',
        backgroundColor: 'rgb(252, 238, 232)',
        height: '750px',
        position: 'relative',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .fabric-container {
          flex: 0 0 auto;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.4s ease, opacity 0.6s ease;
          opacity: 0;
          transform: translateY(50px);
        }
        .fabric-container.show {
          opacity: 1;
          transform: translateY(0);
        }
        .curved-img {
          width: clamp(250px, 25vw, 350px);
          height: clamp(350px, 35vw, 450px);
          object-fit: cover;
          border-radius: 40px;
          will-change: transform;
          backface-visibility: hidden;
        }
        @media (max-width: 768px) {
          .curved-img {
            width: clamp(300px, 50vw, 450px);
            height: clamp(400px, 55vw, 500px);
          }
          .fabric-section {
            position: sticky;
            top: 0;
            z-index: 15;
            padding-top: 100px;
          }
          .simple-btn {
            padding: 8px 25px !important;
            font-size: 0.7rem !important;
          }
        }
        .fabric-3d {
          animation: fabricFloat 6s ease-in-out infinite;
        }
        .fabric-sway {
          animation: fabricSway 6s ease-in-out infinite;
        }
        .fabric-bounce {
          animation: fabricBounce 4s ease-in-out infinite;
        }
        @keyframes fabricFloat {
          0%, 100% {
            transform: translateY(0) rotateY(0deg);
          }
          50% {
            transform: translateY(-5px) rotateY(5deg);
          }
        }
        @keyframes fabricSway {
          0% {
            transform: rotateY(0deg) rotateX(0deg) skew(0deg, 0deg);
          }
          25% {
            transform: rotateY(10deg) rotateX(0deg) skew(0deg, 0.5deg);
          }
          50% {
            transform: rotateY(-10deg) rotateX(0deg) skew(0deg, -0.5deg);
          }
          75% {
            transform: rotateY(0deg) rotateX(5deg) skew(0.5deg, 0deg);
          }
          100% {
            transform: rotateY(0deg) rotateX(0deg) skew(0deg, 0deg);
          }
        }
        @keyframes fabricBounce {
          0%, 100% {
            transform: rotateX(0deg);
          }
          50% {
            transform: rotateX(-10deg);
          }
        }
        .simple-btn {
          margin-top: 15px;
          border: 1px solid #733B5B;
          padding: 10px 35px;
          border-radius: 20px;
          font-family: 'DM Sans', sans-serif;
          text-transform: uppercase;
          font-size: 0.9rem;
          font-weight: 500;
          color: #733B5B;
          cursor: pointer;
        }
        .simple-btn:hover,
        .simple-btn.purple {
          background: rgb(115, 59, 91);
          color: white;
        }
        .fabric-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 30px;
          opacity: 0;
          transform: translateY(20px);
          transition: transform 1s ease, opacity 1s ease;
        }
        .fabric-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 30px;
          opacity: 0;
          transform: translateY(20px);
          transition: transform 1s ease, opacity 1s ease;
           overflowY: 'hidden',
        }


        .fabric-title.animate {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .fabric-title {
            font-size: 1.5rem !important;
            position: sticky;
            top: -50px;
            left: 0;
            right: 0;
            z-index: 10;
          }
        }
        .fabric-row::-webkit-scrollbar {
          width: 8px;
        }
        .fabric-row::-webkit-scrollbar-track {
          background: rgb(252,238,232);
        }
        .fabric-row::-webkit-scrollbar-thumb {
          background: rgb(115, 59, 91);
          border-radius: 4px;
        }
        .logo-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .logo-appear {
          width: 200px;
          height: 200px;
          object-fit: contain;
          animation: logoAppear 1s ease-out;
        }
        @keyframes logoAppear {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .fabric-scroll-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(115, 59, 91, 0.5);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          color: #fff;
          font-size: 24px;
          cursor: pointer;
          z-index: 10;
          transition: background 0.3s;
        }
        .fabric-scroll-btn:hover {
          background: rgba(115, 59, 91, 0.7);
        }
        .fabric-scroll-btn.left {
          left: 16px;
        }
        .fabric-scroll-btn.right {
          right: 16px;
        }
        @media (max-width: 768px) {
          .fabric-scroll-btn {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }
        }
      `}} />
      {isMobile && <h2 className={`fabric-title ${isVisible ? 'animate' : ''}`}>explore fabric artisty</h2>}
      {/* 2. Scrollable Area: Moves independently of the title */}
      <div
        className="fabric-row"
        ref={scrollRef}
        style={{
          display: 'flex',
          flexDirection: 'row',
          overflowX: 'auto',
          gap: '50px',
          padding: isMobile ? '148px 15px 20px 20px' : '50px 50px 20px',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {fabrics.map((fabric, index) => (
          <div
            key={index}
            ref={index === 2 ? thirdRef : undefined}
            className={`fabric-container ${showImages ? 'show' : ''}`}
          >
            <img
              src={fabric}
              alt={`Fabric ${index + 1}`}
              className="curved-img fabric-sway"
            />
            <button className="simple-btn">{buttonTexts[index]}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FabricArtistry;

