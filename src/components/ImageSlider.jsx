import { useState, useEffect } from "react";
import "./ImageSlider.css";

import banner1 from "../assets/images/banner_img1.avif";
import banner2 from "../assets/images/banner_img2.jpg";
import banner3 from "../assets/images/banner_img3.webp";

const banners = [banner1, banner2, banner3];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prev = () => {
    goTo(current === 0 ? banners.length - 1 : current - 1);
  };

  const next = () => {
    goTo(current === banners.length - 1 ? 0 : current + 1);
  };

  // Tự động chuyển ảnh sau 4 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      {/* Ảnh */}
      <div className="slider-track">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`Banner ${index + 1}`}
            className={`slider-img ${index === current ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Nút prev / next */}
      <button className="slider-btn prev" onClick={prev}>
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
      <button className="slider-btn next" onClick={next}>
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

      {/* Dot indicator */}
      <div className="slider-dots">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
