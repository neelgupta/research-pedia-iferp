import { icons } from "@/utils/constants";
import UserNavbar from "../Layout/UserLayout/UserNavbar";
import "./MyFeed.scss";
import { useState } from "react";
import FeedFooter from "@/components/layouts/FeedFooter";
import { useNavigate } from "react-router-dom";

const MyFeed = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(null);
  const feedList = [
    {
      id: 1,
      title: "Business Economics & Management",
      icon: icons?.rectangleIcons,
    },
    {
      id: 2,
      title: "Health & Medical Sciences",
      icon: icons?.rectangleIcons,
    },
    {
      id: 3,
      title: "Physics & Mathematics",
      icon: icons?.rectangleIcons,
    },
    {
      id: 4,
      title: "Social Sciences",
      icon: icons?.rectangleIcons,
    },
    {
      id: 5,
      title: "Humanities Literature & Arts",
      icon: icons?.rectangleIcons,
    },
    {
      id: 6,
      title: "Life Sciences & Earth Sciences",
      icon: icons?.rectangleIcons,
    },
    {
      id: 7,
      title: "Engineering & Computer Science",
      icon: icons?.rectangleIcons,
    },
    {
      id: 8,
      title: "Chemical & Material Sciences",
      icon: icons?.rectangleIcons,
    },
  ];
  return (
    <div className="my-feed-container">
      <UserNavbar />
      <div className="center-content rearchPedia-scroll">
        <h6 className="welcome-text">👋 Welcome Mary Jane!</h6>
        <h4 className="prom-text">Let’s begin your resource journey!</h4>
        <p className="feed-text">
          Select your research area to help us setup your feed
        </p>

        <div className="card-box">
          <div className="row gy-4">
            {feedList.map((ele, index) => {
              const iaActiveCard = isActive === ele?.id;
              return (
                <div
                  key={index}
                  className="col-lg-3 col-md-4 pointer"
                  onClick={() => {
                    setIsActive(ele?.id);
                    setTimeout(() => {
                      navigate(`/create-feed`, {
                        state: {
                          title: ele.title,
                        },
                      });
                    }, 1000);
                  }}
                >
                  <div
                    className={`${iaActiveCard ? "card-details" : "default-card"}`}
                  >
                    <div className="image-div">
                      <img src={ele.icon} alt="Image1" />
                    </div>
                    <h5
                      className={`feed-name-text ${iaActiveCard ? "b-text" : ""}`}
                    >
                      {ele.title}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="step-box">
            <p className="mb-0 text-14-500 color-113D">Skip this step</p>
            <img
              src={icons?.rightArrowIcons}
              alt="right-icons"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <FeedFooter />
    </div>
  );
};

export default MyFeed;
