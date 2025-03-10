import { icons } from "@/utils/constants";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-box">
        <div className="first-l">
          <img src={icons?.userBIcons} className="h-14 w-14" />
          <p className="mb-0">My Network</p>
        </div>
        <p className="search-text">
          Search over 200+ million research papers (Ctrl+Space)
        </p>
      </div>
      <div className="right-box">
        <div className="first-r">
          <img src={icons?.supportIcons} className="h-14 w-14" />
          <p className="mb-0">Support</p>
        </div>
        <div className="first-p">
          <img src={icons?.paintIcons} className="h-14 w-14" />
        </div>
        <div className="first-d">
          <img src={icons?.docsBIcons} className="h-14 w-14" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
