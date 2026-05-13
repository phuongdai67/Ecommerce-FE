import "./PromoBanner.css";
import voucherImg from "../assets/images/voucher_img.webp";
import freeshipImg from "../assets/images/freeship_img.jpg";

const PromoBanner = () => {
  return (
    <div className="promo-banner-wrapper">
      <img src={voucherImg} alt="Voucher" className="promo-banner-img" />
      <img src={freeshipImg} alt="Freeship" className="promo-banner-img" />
    </div>
  );
};

export default PromoBanner;
