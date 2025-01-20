import FeedFooter from "@/components/layouts/FeedFooter";
import UserNavbar from "../Layout/UserLayout/UserNavbar";
import "./CreateFeed.scss";
import { icons } from "@/utils/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components";

const CreateFeed = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [selectList, setSelectList] = useState([]);

  const FeedList = [
    {
      id: 1,
      title: "Business Economics",
    },
    {
      id: 2,
      title: "Decision Sciences",
    },
    {
      id: 3,
      title: "Development Economics",
    },
    {
      id: 4,
      title: "Economic History",
    },
    {
      id: 5,
      title: "Taxation",
    },
    {
      id: 6,
      title: "Economic Policy",
    },
    {
      id: 7,
      title: "Educational Administration",
    },
    {
      id: 8,
      title: "Entrepreneurship Innovation",
    },
    {
      id: 9,
      title: "Game Theory",
    },
    {
      id: 10,
      title: "Human Resource Organization",
    },
    {
      id: 11,
      title: "International Business",
    },
    {
      id: 12,
      title: "Marketing",
    },
    {
      id: 13,
      title: "Tourism Hospitality",
    },
    {
      id: 14,
      title: "Strategic Management",
    },
    {
      id: 15,
      title: "Business Economics",
    },
    {
      id: 16,
      title: "Decision Sciences",
    },
    {
      id: 17,
      title: "Development Economics",
    },
    {
      id: 18,
      title: "Economic History",
    },
    {
      id: 19,
      title: "Taxation",
    },
    {
      id: 20,
      title: "Decision Sciences",
    },
    {
      id: 21,
      title: "Decision Sciences",
    },
    {
      id: 22,
      title: "Tourism Hospitality",
    },
    {
      id: 23,
      title: "Strategic Management",
    },
    {
      id: 24,
      title: "Business Economics",
    },
    {
      id: 25,
      title: "Decision Sciences",
    },
    {
      id: 26,
      title: "Development Economics",
    },
    {
      id: 27,
      title: "Economic History",
    },
    {
      id: 28,
      title: "Taxation",
    },
    {
      id: 29,
      title: "Decision Sciences",
    },
  ];

  const handleClick = (val) => {
    setSelectList((prevList) => {
      if (prevList.some((item) => item.id === val.id)) {
        return prevList.filter((item) => item.id !== val.id);
      } else {
        return [...prevList, val];
      }
    });
  };
  return (
    <div className="created-feed-container">
      <UserNavbar />
      <div className="created-center-content">
        <div className="d-flex align-items-center gap-1">
          <img
            onClick={() => {
              navigate(-1);
            }}
            src={icons?.leftArrowIcons}
            alt="left-arrow"
            loading="lazy"
            className="h-18 w-18 object-fit-contain pointer"
          />
          <p className="title-feed mb-0">{state?.title}</p>
        </div>
        <h4 className=" pra-feed color-113D">
          Add topics to set your preferences
        </h4>

        <div className="feed-main">
          {FeedList?.map((ele, index) => {
            const isActive = selectList?.some((elem) => elem?.id === ele?.id);
            return (
              <div
                className={` pointer ${isActive ? "feed-active" : "feed-text-box"}`}
                key={index}
                onClick={() => {
                  handleClick(ele);
                }}
              >
                {ele?.title}
                <img src={isActive ? icons?.trueWIcons : icons?.pulseBIcons} />
              </div>
            );
          })}
        </div>
        {selectList?.length > 0 && (
          <div className="d-flex justify-content-end flex-wrap gap-lg-5 gap-md-3 gap-3 t-m">
            <div>
              <p className="select-text">Selected topic(s) or journal(s)</p>
              <h6 className="select-val">
                {selectList?.[0]?.title}{" "}
                {selectList?.length > 1 ? `+ ${selectList?.length - 1}` : ""}
              </h6>
            </div>
            <Button
              btnText="Create My Feed"
              className="h-49"
              onClick={() => {
                navigate("/feed-details");
              }}
            />
          </div>
        )}
      </div>
      <FeedFooter />
    </div>
  );
};

export default CreateFeed;
