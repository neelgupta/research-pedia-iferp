import "./FeedFooter.scss";

const FeedFooter = () => {
  return (
    <div className="feed-footer-container">
      <div className="left-box">
        <p className="items-na pointer">Terms of Services</p>
        <p className="items-na pointer">Privacy Policy</p>
        <p className="items-na pointer">Contact Us</p>
      </div>
      <div className="right-box">
        <p className="items-na">2024 Research Pedia. All rights reserved. </p>
      </div>
    </div>
  );
};

export default FeedFooter;
