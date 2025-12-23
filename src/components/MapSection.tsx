const MapSection = () => {
  return (
    <section className="map-section">
      <iframe
        src="https://www.google.com/maps?q=16.7050,74.2433&z=12&output=embed"
        allowFullScreen
        loading="lazy"
        title="Kosha Store Location"
      />
      <p className="locate-text">Locate Our Store</p>
    </section>
  );
};

export default MapSection;
