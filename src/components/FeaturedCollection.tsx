const FeaturedCollection = () => {
  const collections = [
    {
      image: '/pictures/dress material .PNG',
      title: 'Dress Materials',
    },
    {
      image: '/pictures/sarres.JPG',
      title: 'Sarres',
    },
    {
      image: '/pictures/customize outfits.jpg',
      title: 'Customize Outfits',
    },
    {
      image: '/pictures/customize blouses.PNG',
      title: 'Customize Blouses',
    },
    {
      image: '/pictures/accessories.PNG',
      title: 'Accessories',
    },
    {
      image: '/pictures/hand embroidery.JPG',
      title: 'Hand Embroider',
    },
  ];

  return (
    <section id="collection" className="extended-collection">
      <h2 className="decorative-title mb-5 -mt-[45px]">Featured Collection</h2>
      <div className="extended-grid">
        {collections.map((item, index) => (
          <div key={index} className="extended-item">
            <div className="image-placeholder">
              <img
                src={item.image}
                alt={item.title}
                className="collection-img"
              />
              <p className="image-text">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollection;
