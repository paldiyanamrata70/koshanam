const FabricArtistry = () => {
  const fabrics = [
    '/pictures/fabric1.JPG',
    '/pictures/fabric2.JPG',
    '/pictures/fabric3.JPG',
    '/pictures/fabric4.JPG',
    '/pictures/fabric5.JPG',
    '/pictures/fabric6.jpg',
    '/pictures/fabric7.JPG',
    '/pictures/fabric8.JPG',
    '/pictures/fabric9.JPG',
    '/pictures/fabric10.JPG',
    '/pictures/fabric11.JPG',
    '/pictures/fabric12.JPG',
  ];

  return (
    <div id="fabric" className="fabric-artistry">
      <h2 className="fabric-title">Explore Fabric Artistry</h2>
      <div className="scroll-wrapper">
        <div className="fabric-row">
        {fabrics.map((fabric, index) => (
          <div key={index} className="fabric-card">
            <img
              src={fabric}
              alt={`Fabric ${index + 1}`}
              loading="lazy"
              style={{ transform: index === 11 ? 'rotate(180deg)' : 'none' }}
            />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default FabricArtistry;
