import CategorySlot from "../components/CategorySlot";
import DayDealOffer from "../components/DayDealOffer";
import ImageSlider from "../components/ImageSlider";
import PromoBanner from "../components/PromoBanner";
import PromoteVideo from "../components/PromoteVideo";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <CategorySlot />
      <PromoBanner />
      <PromoteVideo />
      <DayDealOffer />
    </div>
  );
};

export default Home;
