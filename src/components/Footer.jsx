import { Link } from "react-router-dom";
import "./Footer.css";
import logoVerify from "../assets/images/logo_verify.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* Bên trái */}
        <div className="footer-left">
          <h2 className="footer-brand">KitchenHub</h2>
          <div className="footer-info">
            <p>KitchenHub HCM</p>
            <p>Người đại diện: Nguyễn Phương Đại</p>
            <p>SDT: 0123456789</p>
          </div>
          <img src={logoVerify} alt="Logo Verify" className="footer-verify" />
        </div>

        {/* Bên phải */}
        <div className="footer-right">
          <p className="footer-hotline">Hotline: 1900 1234</p>
          <p className="footer-hours">Từ 09:00 - 18:00 (Thứ 2 - Chủ nhật)</p>
          <div className="footer-links">
            <p to="/terms" className="footer-link">
              Điều khoản sử dụng
            </p>
            <div className="footer-links-row">
              <Link to="/privacy" className="footer-link">
                Chính sách bảo mật
              </Link>
              <span>/</span>
              <Link to="/shipping" className="footer-link">
                Chính sách giao hàng, đổi hàng, hoàn tiền
              </Link>
            </div>
            <div className="footer-links-row">
              <Link to="/conditions" className="footer-link">
                Các điều khoản và điều kiện
              </Link>
              <span>/</span>
              <Link to="/warranty" className="footer-link">
                Chính sách bảo hành sản phẩm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
