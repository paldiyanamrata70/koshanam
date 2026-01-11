import React, { useState, useEffect } from 'react';

const Splash = () => {
  const [phase, setPhase] = useState('circle');

  useEffect(() => {
    const timer = setTimeout(() => setPhase('logo'), 1250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      {phase === 'circle' && (
        <div className="circle-bounce" style={{ backgroundColor: 'rgb(111, 32, 67)' }}></div>
      )}
      {phase === 'logo' && (
        <img src="/pictures/koshalogo.png" alt="Kosha Logo" className="logo-scale max-w-xs h-auto" />
      )}
    </div>
  );
};

export default Splash;