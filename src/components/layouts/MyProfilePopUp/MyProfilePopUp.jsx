import React, { useEffect, useState } from "react";
import Modal from "../Modal";
import "./MyProfilePopUp.scss";
import { icons } from "@/utils/constants";
import PersonalDetailsPopUp from "./PersonalDetailsPopUp/PersonalDetailsPopUp";

const MyProfilePopUp = ({ onHide, title }) => {
  const [type, setType] = useState("");
  const [valCount, setValCount] = useState(1);

  const subTitle = {
    "personal-details": "Crafting Your Unique Identity",
    "education-details": "Shaping Your Academic Journey",
    "membership-details": "Choose Your Path to Success",
  };

  const arrayOption = [
    {
      id: 1,
      title: "Personal Details",
      type: "personal-details",
      isActive: true,
    },
    {
      id: 2,
      title: "Education Details",
      type: "education-details",
      isActive: false,
    },
    {
      id: 3,
      title: "Membership Details",
      type: "membership-details",
      isActive: false,
    },
  ];

  useEffect(() => {
    if (valCount === "2") {
      setType("membership-details");
    } else if (valCount === "0") {
      setType("personal-details");
    } else if (valCount === "1") {
      setType("education-details");
    } else {
      setType("personal-details");
    }
  }, [type]);

  return (
    <Modal onHide={onHide} size="xl" isClose={false}>
      <div className="profile-modal-container">
        <p className="title-text">{`My Profile - ${title} Member`}</p>

        <div className="sub-title">{subTitle[type]}</div>

        <div className="details-list mb-34">
          {arrayOption.map((elem, index) => {
            return (
              <React.Fragment key={index}>
                <div className="details-block">
                  {elem.isActive ? (
                    <img
                      src={icons.completeIcons}
                      alt="active"
                      className="active-selection"
                    />
                  ) : (
                    <div className="number-block">{elem.id}</div>
                  )}
                  <div
                    className={`text-16-400 ${
                      elem.isActive ? "color-113D" : "color-black-3333"
                    }`}
                  >
                    {elem.title}
                  </div>
                </div>
                {arrayOption.length - 1 !== index && (
                  <div
                    className={`border-saprator ${
                      elem.isActive ? "active-border" : ""
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {valCount === 1 && <PersonalDetailsPopUp />}
      </div>
    </Modal>
  );
};

export default MyProfilePopUp;
