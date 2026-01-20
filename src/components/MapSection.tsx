const MapSection = () => {
  return (
    <section className="map-section mt-10 md:mt-0 mb-10 md:mb-0 relative">
      <a
        href="https://www.google.com/maps/dir//16.708118,74.247598"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label="Get directions to Kosha Store"
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15271.809258793233!2d74.247598!3d16.708118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQyJzI5LjIiTiA3NMKwMTQnNTEuNCJF!5e0!3m2!1sen!2sin!4v1700000000000"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Kosha Store Location"
      />
      <p className="locate-text">Step Into Our Store</p>
    </section>
  );
};

export default MapSection;
