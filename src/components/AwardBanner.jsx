import "./AwardBanner.css";
import awardBanner from "../assets/images/award-all-banner.jpg";

const AwardBanner = () => {
  return (
    <div className="award-banner-wrapper">
      <img src={awardBanner} alt="Award Banner" className="award-banner-img" />
    </div>
  );
};

export default AwardBanner;
