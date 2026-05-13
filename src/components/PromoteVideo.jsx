import "./PromoteVideo.css";

const PromoteVideo = () => {
  return (
    <div className="promote-video-wrapper">
      <iframe
        width="1248"
        height="480"
        src="https://www.youtube.com/embed/XYK8_Nw2kmE"
        title="KitchenHub Promo Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
};

export default PromoteVideo;
