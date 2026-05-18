import Carousel from "./Carousel";
import "./DayDealSwiperSlot.css";
import RedDotRing from "./RedDotRing";

const deals = [
  {
    id: 1,
    name: "Nồi chiên không dầu",
    price: "1.290.000đ",
    discount: "-30%",
    discountPrice: "903.000đ",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRMPOdjdWJWyaHdmS2uREdHeIy0ZbLKPc72fxQM9rnSun6MEbZYvvx8ksaNJG2989CqJ-eM8Z8eI6GHVtvj-0ZJB6qCOb1MveDVBhyaBwLnwZjwooJ2KE36CEUnlTQRnxvs9fa4cBc&usqp=CAc",
  },
  {
    id: 2,
    name: "Máy pha cà phê",
    price: "2.490.000đ",
    discount: "-20%",
    discountPrice: "1.992.000đ",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSN1OCXwSup5UPnA6YsPjR7RktgmE3nlm9-SoZupkHTlab0mRNq2ydNBjAM_-rEz16tD7oVCOdT_MMjrowMSeYpYcBG63PvefwTMCmVV1Zs5mfsyvMbC3A5pxxiWd42eD4XTib7_jk&usqp=CAc",
  },
  {
    id: 3,
    name: "Lò vi sóng",
    price: "890.000đ",
    discount: "-15%",
    discountPrice: "756.500đ",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRlWJrDxRhPoJ2Y2ULcBa4oludDFi_ij1hHDwiknYELGD3uZd9Vn1QqlKmdAAHKu-4GfVD_085DnLCBx3QFn-xOd9qde7s9cPBQFYZZ-tqdkkdOYtm59NXcPBEWQd-SX3vD_E3gtS8&usqp=CAc",
  },
  {
    id: 4,
    name: "Máy xay sinh tố",
    price: "590.000đ",
    discount: "-25%",
    discountPrice: "442.500đ",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRb8i8toeURHSr712PMAalxyorvqXXoSG5KXEmWB5GlFOF6uhq4ipIysUNeb3yJcQ4_60Hq29G62MnYBJrs-VGlJ0AkJANwUN7LZHlEMygzrECxt9Qv5YodjIyVvGJHUztviqI7xw&usqp=CAc",
  },
  {
    id: 5,
    name: "Bếp từ",
    price: "1.990.000đ",
    discount: "-10%",
    discountPrice: "1.791.000đ",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRGEh5e70xo3JOSftqWBFaaQQZymkv3YVdaxryCMcbujEhAjZUZ0rMYWyyNTHgkzou99EEfdX84oe0r183jTldAvkii4gpK4RWXwHZ2iVDzurp2Ql47Cyu_YOBrjRbWZl6gBY1MPpMkdlw&usqp=CAc",
  },
];

const DayDealSwiperSlot = () => {
  return (
    <div className="deal-swiper-wrapper">
      <Carousel
        items={deals}
        renderItem={(deal, position) => (
          <div className="deal-slot">
            <div className={`deal-slot-circle ${position}`}>
              {position === "center" && <RedDotRing size={218} />}
              <img src={deal.image} alt={deal.name} className="deal-slot-img" />
            </div>
            <p className="deal-slot-name">{deal.name}</p>
            <div className="deal-slot-price-group">
              <span className="deal-slot-original-price">{deal.price}</span>
              <span className="deal-slot-discount">{deal.discount}</span>
            </div>
            <p className="deal-slot-discount-price">{deal.discountPrice}</p>
          </div>
        )}
      />
    </div>
  );
};

export default DayDealSwiperSlot;
