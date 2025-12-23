const JourneySection = () => {
  return (
    <>
      <h2 id="journey" className="journey-title">Journey</h2>
      <div className="journey-video-box">
        <video controls poster="/pictures/home.jpg">
          <source src="/pictures/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default JourneySection;
