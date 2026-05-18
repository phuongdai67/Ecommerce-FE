import "./ProductCard.css";
import ProductRankBadge from "./ProductRankBadge";

const products = [
  {
    id: 1,
    name: "Nồi chiên không dầu",
    price: "1.290.000đ",
    discount: "30%",
    discountPrice: "903.000đ",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRMPOdjdWJWyaHdmS2uREdHeIy0ZbLKPc72fxQM9rnSun6MEbZYvvx8ksaNJG2989CqJ-eM8Z8eI6GHVtvj-0ZJB6qCOb1MveDVBhyaBwLnwZjwooJ2KE36CEUnlTQRnxvs9fa4cBc&usqp=CAc",
  },
  {
    id: 2,
    name: "Máy pha cà phê",
    price: "2.490.000đ",
    discount: "20%",
    discountPrice: "1.992.000đ",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSN1OCXwSup5UPnA6YsPjR7RktgmE3nlm9-SoZupkHTlab0mRNq2ydNBjAM_-rEz16tD7oVCOdT_MMjrowMSeYpYcBG63PvefwTMCmVV1Zs5mfsyvMbC3A5pxxiWd42eD4XTib7_jk&usqp=CAc",
  },
  {
    id: 3,
    name: "Lò vi sóng",
    price: "890.000đ",
    discount: "15%",
    discountPrice: "756.500đ",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRlWJrDxRhPoJ2Y2ULcBa4oludDFi_ij1hHDwiknYELGD3uZd9Vn1QqlKmdAAHKu-4GfVD_085DnLCBx3QFn-xOd9qde7s9cPBQFYZZ-tqdkkdOYtm59NXcPBEWQd-SX3vD_E3gtS8&usqp=CAc",
  },
  {
    id: 4,
    name: "Máy xay sinh tố",
    price: "590.000đ",
    discount: "25%",
    discountPrice: "442.500đ",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRb8i8toeURHSr712PMAalxyorvqXXoSG5KXEmWB5GlFOF6uhq4ipIysUNeb3yJcQ4_60Hq29G62MnYBJrs-VGlJ0AkJANwUN7LZHlEMygzrECxt9Qv5YodjIyVvGJHUztviqI7xw&usqp=CAc",
  },
  {
    id: 5,
    name: "Bếp từ",
    price: "1.990.000đ",
    discount: "10%",
    discountPrice: "1.791.000đ",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRGEh5e70xo3JOSftqWBFaaQQZymkv3YVdaxryCMcbujEhAjZUZ0rMYWyyNTHgkzou99EEfdX84oe0r183jTldAvkii4gpK4RWXwHZ2iVDzurp2Ql47Cyu_YOBrjRbWZl6gBY1MPpMkdlw&usqp=CAc",
  },
  {
    id: 6,
    name: "Máy rửa bát",
    price: "3.290.000đ",
    discount: "12%",
    discountPrice: "2.895.200đ",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRMPOdjdWJWyaHdmS2uREdHeIy0ZbLKPc72fxQM9rnSun6MEbZYvvx8ksaNJG2989CqJ-eM8Z8eI6GHVtvj-0ZJB6qCOb1MveDVBhyaBwLnwZjwooJ2KE36CEUnlTQRnxvs9fa4cBc&usqp=CAc",
  },
  {
    id: 7,
    name: "Máy lọc nước",
    price: "2.190.000đ",
    discount: "18%",
    discountPrice: "1.795.800đ",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSN1OCXwSup5UPnA6YsPjR7RktgmE3nlm9-SoZupkHTlab0mRNq2ydNBjAM_-rEz16tD7oVCOdT_MMjrowMSeYpYcBG63PvefwTMCmVV1Zs5mfsyvMbC3A5pxxiWd42eD4XTib7_jk&usqp=CAc",
  },
  {
    id: 8,
    name: "Máy hút bụi",
    price: "1.490.000đ",
    discount: "22%",
    discountPrice: "1.162.200đ",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRlWJrDxRhPoJ2Y2ULcBa4oludDFi_ij1hHDwiknYELGD3uZd9Vn1QqlKmdAAHKu-4GfVD_085DnLCBx3QFn-xOd9qde7s9cPBQFYZZ-tqdkkdOYtm59NXcPBEWQd-SX3vD_E3gtS8&usqp=CAc",
  },
  {
    id: 9,
    name: "Máy ép trái cây",
    price: "790.000đ",
    discount: "5%",
    discountPrice: "750.500đ",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRb8i8toeURHSr712PMAalxyorvqXXoSG5KXEmWB5GlFOF6uhq4ipIysUNeb3yJcQ4_60Hq29G62MnYBJrs-VGlJ0AkJANwUN7LZHlEMygzrECxt9Qv5YodjIyVvGJHUztviqI7xw&usqp=CAc",
  },
  {
    id: 10,
    name: "Nồi cơm điện",
    price: "690.000đ",
    discount: "8%",
    discountPrice: "634.800đ",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRGEh5e70xo3JOSftqWBFaaQQZymkv3YVdaxryCMcbujEhAjZUZ0rMYWyyNTHgkzou99EEfdX84oe0r183jTldAvkii4gpK4RWXwHZ2iVDzurp2Ql47Cyu_YOBrjRbWZl6gBY1MPpMkdlw&usqp=CAc",
  },
];

const ProductCard = () => {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={product.id} className="product-card">
          <div className="product-card-img-wrapper">
            {/* Badge số thứ tự */}
            <ProductRankBadge rank={index + 1} />

            <img
              src={product.image}
              alt={product.name}
              className="product-card-img"
            />
          </div>
          <div className="product-card-info">
            <p className="product-card-name">{product.name}</p>
            <span className="product-card-discount">-{product.discount}</span>
            <p className="product-card-discount-price">
              {product.discountPrice}
            </p>
            <p className="product-card-original-price">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
