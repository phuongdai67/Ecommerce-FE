import "./BestProductByCategories.css";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const BestProductByCategories = () => {
  return (
    <div className="best-product-wrapper">
      <h2 className="best-product-title">Sản phẩm hàng đầu</h2>
      <ProductCard />
      <div className="best-product-more">
        <Link to="/products" className="best-product-btn">
          Xem thêm
        </Link>
      </div>
    </div>
  );
};

export default BestProductByCategories;
