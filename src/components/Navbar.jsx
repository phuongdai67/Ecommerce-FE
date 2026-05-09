import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import "./Navbar.css";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const { isLoggedIn, isAdmin, logoutUser, user } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <nav className="navbar">
      {/* Tầng 1 */}
      <div className="navbar-top">
        <Link to="/" className="navbar-brand">
          KitchenHub
        </Link>

        <div className="navbar-search">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            className="search-icon"
          >
            <circle
              cx="11"
              cy="11"
              r="8"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M21 21l-4.35-4.35"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <input type="text" placeholder="Tìm kiếm sản phẩm..." />
        </div>

        <div className="navbar-actions">
          {isLoggedIn() ? (
            <>
              {isAdmin() && (
                <Link to="/admin/products" className="navbar-link">
                  Quản trị
                </Link>
              )}
              <span className="navbar-username">{user?.email}</span>
              <span className="navbar-divider">|</span>
              <button className="navbar-link btn-logout" onClick={handleLogout}>
                Đăng xuất
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="navbar-link">
                Đăng nhập
              </Link>
              <span className="navbar-divider">|</span>
              <Link to="/register" className="navbar-link">
                Đăng ký
              </Link>
            </>
          )}

          <Link to="/cart" className="navbar-cart">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6h18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M16 10a4 4 0 01-8 0"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Giỏ hàng
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>

      {/* Tầng 2 */}
      <div className="navbar-bottom">
        <Dropdown />
        <Link to="/" className="navbar-tab">
          Bán chạy
        </Link>
        <Link to="/products/new" className="navbar-tab">
          Sản phẩm mới
        </Link>
        <Link to="/events" className="navbar-tab">
          Sự kiện
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
