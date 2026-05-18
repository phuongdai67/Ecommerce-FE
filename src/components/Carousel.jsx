import { useState } from "react";
import "./Carousel.css";

const Carousel = ({ items, renderItem }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);
  const [animating, setAnimating] = useState(false);

  const navigate = (newIndex, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);

    setTimeout(() => {
      setCurrent(newIndex);
      setAnimating(false);
      setDirection(null);
    }, 400);
  };

  const prev = () => {
    const newIndex = current === 0 ? items.length - 1 : current - 1;
    navigate(newIndex, "left");
  };

  const next = () => {
    const newIndex = current === items.length - 1 ? 0 : current + 1;
    navigate(newIndex, "right");
  };

  const getIndex = (offset) => {
    return (current + offset + items.length) % items.length;
  };

  const visibleItems = [
    { data: items[getIndex(-1)], position: "left" },
    { data: items[getIndex(0)], position: "center" },
    { data: items[getIndex(1)], position: "right" },
  ];

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${item.position} ${
              animating && item.position === "left" && direction === "left"
                ? "entering-center"
                : animating &&
                    item.position === "right" &&
                    direction === "right"
                  ? "entering-center"
                  : animating && item.position === "center"
                    ? `exiting-${direction}`
                    : ""
            }`}
          >
            {item.position === "center" ? (
              <div className="carousel-center-group">
                <button className="carousel-btn" onClick={prev}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 18l-6-6 6-6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {renderItem(item.data, item.position)}
                <button className="carousel-btn" onClick={next}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18l6-6-6-6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              renderItem(item.data, item.position)
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
