import { useEffect, useState } from "react";
import oneImg from '../assets/images/one.png';
import twoImg from '../assets/images/two.jpg';
import centerImg from '../assets/images/centerimage.jpeg';
import RoneImg from '../assets/images/Rone.jpg';
import RtwoImg from '../assets/images/Rtwo.png';
import threeSlideImg from '../assets/images/threeslide.png';
import twoSlideImg from '../assets/images/twoslide.png';

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
              <img src={oneImg} className="loom-small" />
              <img src={twoImg} className="small-height" />
            </div>

            <div className="loom-center">
              <img src={centerImg} />
            </div>

            <div className="loom-side">
              <img src={RoneImg} className="loom-small" />
              <img src={RtwoImg} className="small-height" />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className={`loom-slide ${current === 1 ? "is-active" : ""}`}>
          <img src={threeSlideImg} className="loom-single" />
        </div>

        {/* Slide 3 */}
        <div className={`loom-slide ${current === 2 ? "is-active" : ""}`}>
          <img src={twoSlideImg} className="loom-single" />
        </div>
      </div>
    </section>
  );
};

export default FromLoomToLook;
