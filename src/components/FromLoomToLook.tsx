import { useEffect, useState } from "react";

const FromLoomToLook = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="loom-section">
      <h2 className="loom-title">From Loom to Look</h2>

      <div className="loom-slider-wrapper">
        {/* Slide 1 */}
        <div className={`loom-slide ${current === 0 ? "is-active" : ""}`}>
          <div className="loom-grid">
            <div className="loom-side">
              <img src="/pictures/one.png" className="loom-small" />
              <img src="/pictures/two.jpg" />
            </div>

            <div className="loom-center">
              <img src="/pictures/centerimage.jpeg" />
            </div>

            <div className="loom-side">
              <img src="/pictures/Rone.jpg" className="loom-small" />
              <img src="/pictures/Rtwo.png" />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className={`loom-slide ${current === 1 ? "is-active" : ""}`}>
          <img src="/pictures/threeslide.png" className="loom-single" />
        </div>

        {/* Slide 3 */}
        <div className={`loom-slide ${current === 2 ? "is-active" : ""}`}>
          <img src="/pictures/twoslide.png" className="loom-single" />
        </div>
      </div>
    </section>
  );
};

export default FromLoomToLook;
