import { useState, useEffect, useRef } from "react";
import "./Carousel.css";

const images = [
  "/images/img_.jpg",
  "/images/asset-6.webp",
  "/images/GENESIS_COVER.webp",
  "/images/JOUR_COVER.webp",
];
const delay = 4000;

function Carousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%,0,0)` }}
      >
        {images.map((image, index) => (
          <img className="slide" key={index} src={image}></img>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
