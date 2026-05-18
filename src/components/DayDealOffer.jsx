import { useState, useEffect } from "react";
import "./DayDealOffer.css";
import DayDealSwiperSlot from "./DayDealSwiperSlot";

const getSecondsUntilTomorrow10AM = () => {
  const now = new Date();
  const target = new Date();
  target.setHours(10, 0, 0, 0);
  if (now >= target) {
    target.setDate(target.getDate() + 1);
  }
  return Math.floor((target - now) / 1000);
};

const formatTime = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return {
    h: String(h).padStart(2, "0"),
    m: String(m).padStart(2, "0"),
    s: String(s).padStart(2, "0"),
  };
};

const DayDealOffer = () => {
  const [timeLeft, setTimeLeft] = useState(getSecondsUntilTomorrow10AM());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return getSecondsUntilTomorrow10AM();
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { h, m, s } = formatTime(timeLeft);

  return (
    <div className="day-deal-section">
      <div className="day-deal-wrapper">
        <div className="day-deal-card">
          <div className="day-deal-content">
            <p className="deal-subtitle">Ưu đãi đặc biệt trong vòng</p>
            <h1 className="deal-title">1 ngày</h1>
            <p className="deal-desc">Ưu đãi mới vào lúc 10 giờ sáng mỗi ngày</p>
            <div className="deal-timer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17l10 5 10-5"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12l10 5 10-5"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="timer-text">
                {h} : {m} : {s}
              </span>
              <span className="deal-cta">MUA NGAY</span>
            </div>
          </div>
        </div>
        <DayDealSwiperSlot />
      </div>
    </div>
  );
};

export default DayDealOffer;
