const MapSection = () => {
  return (
    <section className="map-section mt-10 md:mt-0 mb-10 md:mb-0">
      <iframe
        src="https://www.google.com/maps?q=16.708118,74.247598&z=16&output=embed"
        allowFullScreen
        loading="lazy"
        title="Kosha Store Location"
      />
      <p className="locate-text">Step Into Our Store</p>
    </section>
  );
};

export default MapSection;
