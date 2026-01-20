import React from 'react';
import logoImg from '../assets/images/home.jpg';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <img
        src={logoImg}
        alt="Kosha Logo"
        className="logo-animation w-70 h-auto"
      />
    </div>
  );
};

export default Preloader;