import { useState } from 'react';

const WhatsAppButton = ({ isSidebarOpen }) => {
  const [popupOpen, setPopupOpen] = useState(true);

  if (isSidebarOpen) return null;

  return (
    <div className="whatsapp-wrapper">
      {popupOpen && (
        <div className="whatsapp-box">
          <span className="whatsapp-text">Chat On Whatsapp</span>
        </div>
      )}
      <a
        href="https://wa.me/917776061122"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
