import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header = ({ onToggleSidebar }: HeaderProps) => {
  const [isHidden, setIsHidden] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHidden(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-[1000] transition-all duration-400 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${isHovered ? 'bg-background shadow-[0_2px_15px_rgba(0,0,0,0.1)]' : 'bg-transparent'}`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[1400px] mx-auto py-[25px] px-10 flex justify-between items-center">
        <div className="header-logo">
          <h1 className={`font-bold transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-white'}`}>
            K·O·S·H·A
          </h1>
          <span className={`transition-colors duration-300 ${isHovered ? 'text-secondary' : 'text-white'}`}>
            FABRIC ARTISTRY AT ITS FINEST
          </span>
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={onToggleSidebar}
        >
          <div className="hamburger">
            <span className={`transition-colors duration-300 ${isHovered ? 'bg-primary' : 'bg-white'}`}></span>
            <span className={`transition-colors duration-300 ${isHovered ? 'bg-primary' : 'bg-white'}`}></span>
            <span className={`transition-colors duration-300 ${isHovered ? 'bg-primary' : 'bg-white'}`}></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
