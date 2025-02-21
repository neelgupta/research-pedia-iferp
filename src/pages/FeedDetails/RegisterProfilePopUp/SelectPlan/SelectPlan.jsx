import { icons } from "@/utils/constants";
import "./SelectPlan.scss";
import { current } from "@reduxjs/toolkit";
import { useState } from "react";
import CheckBox from "@/components/inputs/CheckBox";
import Button from "@/components/inputs/Button";
import { useNavigate } from "react-router-dom";

const SelectPlan = ({ setValCount }) => {
  const [isSelect, setIsSelect] = useState();
  const navigate = useNavigate();
  const planDetails = [
    {
      id: 1,
      planName: "Annually",
      currentPrice: "$8",
      price: " $5",
      description: "$54 billed annually, save 38%",
      isPopular: true,
    },
    {
      id: 2,
      planName: "Quarterly",
      currentPrice: "$8",
      price: " $5",
      description: "$18 billed quarterly, save 19%",
      isPopular: false,
    },
    {
      id: 3,
      planName: "Monthly",
      price: " $5",
      description: "Lorem Ipsum standard dummy",
      isPopular: false,
    },
  ];

  return (
    <div className="select-plan-container">
      <h2 className="select-plan-text">Select your plan</h2>
      <p className="select-pra">
        Get access to exclusive Prime features! Cancel anytime.
      </p>
      <div className="join-box">
        <img src={icons?.upIcons} className="h-28 w-28" />
        <p className="researchers-text">Join 50,000+ researchers</p>
      </div>
      <div className="plan-box ">
        {planDetails?.map((ele, index) => {
          return (
            <div
              key={index}
              className="main-card border"
              style={{ borderRadius: "12px" }}
            >
              <div
                className={` ${isSelect === ele?.id ? "popular" : "plan-card"} ${ele.isPopular ? "justify-content-start" : ""}`}
              >
                {ele.isPopular && (
                  <div className="popular-box mb-32">
                    <div className="popular-box-inner">
                      <img
                        src={icons?.likeIcons}
                        alt="star-icon"
                        className="fit-image h-14 w-14"
                      />
                      <p className="popular-text">Most Popular</p>
                    </div>
                  </div>
                )}
                <h3
                  className={`plan-name ${isSelect === ele?.id ? "n-a" : "n-i-a"}`}
                >
                  {ele.planName}
                </h3>

                <p
                  className={`description ${isSelect === ele?.id ? "n-a" : "n-i-a"}`}
                >
                  {ele.description}
                </p>
                <p
                  className={`current-price ${isSelect === ele?.id ? "n-a" : "n-i-a"}`}
                >
                  {" "}
                  <p
                    className={`price-inner me-5 ${isSelect === ele?.id ? "n-a-in" : "n-i-a-in"}`}
                  >
                    {" "}
                    {ele.currentPrice}
                  </p>{" "}
                  <p className="price-t">{ele.price}</p>{" "}
                  <span
                    className={`m-text ${isSelect === ele?.id ? "n-a" : "n-i-a"}`}
                  >
                    /month
                  </span>
                </p>
                <div className="f-center mt-18">
                  <CheckBox
                    checked={isSelect === ele?.id}
                    className="b-s-w"
                    onChange={() => {
                      setIsSelect(ele?.id);
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-end flex-wrap mt-32 gap-3">
        <Button
          btnText="Previous"
          btnStyle="Lb"
          className="h-49 w-114"
          onClick={() => {
            setValCount(1);
          }}
        />
        <Button
          btnText="Skip"
          btnStyle="LBA"
          className="h-49 w-114"
          onClick={() => {
            onHide()
          }}
        />
        <Button
          btnText="Continue to Payment"
          className="h-49 w-213"
          onClick={() => {
            onHide()
          }}
        />
      </div>
    </div>
  );
};

export default SelectPlan;
