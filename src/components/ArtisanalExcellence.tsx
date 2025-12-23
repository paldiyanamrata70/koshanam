const ArtisanalExcellence = () => {
  const artisans = [
    { image: '/pictures/hand embroidery.JPG', label: 'hand embroidery' },
    { image: '/pictures/fabric1.JPG', label: 'stitching' },
    { image: '/pictures/fabric2.JPG', label: 'ari embroidery' },
    { image: '/pictures/hand embroidery.JPG', label: 'hand embroidery' },
  ];

  return (
    <section id="artisanal-excellence" className="artisan">
      <h2>Artisanal Excellence</h2>
      <div className="artisan-grid">
        {artisans.map((item, index) => (
          <div key={index} className={`artisan-item ${index % 2 === 0 ? 'up' : 'down'} ${index === 1 || index === 3 ? 'mt-20' : ''}`}>
            {index === 1 || index === 3 ? (
              <>
                <p>{item.label}</p>
                <img src={item.image} alt={item.label} className="mt-2 w-40 md:w-56 h-[260px]" />
              </>
            ) : (
              <>
                <img src={item.image} alt={item.label} className="w-40 md:w-56 h-[260px]" />
                <p>{item.label}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtisanalExcellence;
