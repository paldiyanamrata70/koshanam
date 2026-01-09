import { useState, useEffect, useRef } from 'react';

const FabricArtistry = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [parallaxY, setParallaxY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const fabrics = [
    '/pictures/fabric1.JPG', '/pictures/fabric2.JPG', '/pictures/fabric3.JPG',
    '/pictures/fabric4.JPG', '/pictures/fabric5.JPG', '/pictures/fabric6.jpg',
    '/pictures/fabric7.JPG', '/pictures/fabric8.JPG', '/pictures/fabric9.JPG',
    '/pictures/fabric10.JPG', '/pictures/fabric11.JPG', '/pictures/fabric12.JPG',
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

  return (
    <div
      id="fabric"
      ref={sectionRef}
      style={{
        marginTop: '-610px',
        paddingTop: '80px',
        overflowX: 'visible',
        overflowY: 'hidden',
        backgroundColor: 'rgb(252,238,232)',
        height: '700px',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .fabric-container {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.4s ease, opacity 0.6s ease;
          opacity: 0;
          transform: translateY(50px);
          padding-top: 50px;
        }
        .fabric-container.show {
          opacity: 1;
          transform: translateY(0);
        }
        .curved-img {
          width: 350px;
          height: 450px;
          object-fit: cover;
          border-radius: 40px;
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
            transform: rotateY(15deg) rotateX(0deg) skew(0deg, 1deg);
          }
          50% {
            transform: rotateY(-15deg) rotateX(0deg) skew(0deg, -1deg);
          }
          75% {
            transform: rotateY(0deg) rotateX(10deg) skew(1deg, 0deg);
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
          padding: 8px 30px;
          border-radius: 20px;
          font-family: serif;
          text-transform: uppercase;
          font-size: 0.8rem;
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
        .fabric-row::-webkit-scrollbar {
          width: 8px;
        }
        .fabric-row::-webkit-scrollbar-track {
          background: rgb(252,238,232);
        }
        .fabric-row::-webkit-scrollbar-thumb {
          background: rgb(252,238,232);
          border-radius: 4px;
        }
      `}} />

      {/* 2. Scrollable Area: Moves independently of the title */}
      <div
        className="fabric-row"
        ref={scrollRef}
        style={{
          display: 'flex',
          flexDirection: 'row',
          overflowX: 'auto',
          gap: '50px',
          padding: '40px 50px 20px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {fabrics.map((fabric, index) => (
          <div
            key={index}
            className={`fabric-container ${showImages ? 'show' : ''}`}
          >
            <img
              src={fabric}
              alt={`Fabric ${index + 1}`}
              className="curved-img fabric-sway"
            />
            <button className="simple-btn">kanjivaram</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FabricArtistry;
