import { useState } from "react";
import "./InstitutionalProfile.scss";
import ProfileDetails from "./ProfileDetails";
import MyProfilePopUp from "./MyProfilePopUp";

const InstitutionalProfile = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleClick = () => {
    setIsOpenModal(true);
  };
  return (
    <div className="institutional-profile-container">
      <ProfileDetails onClick={handleClick} />

      {isOpenModal && (
        <MyProfilePopUp
          title="Institutional"
          onHide={() => {
            setIsOpenModal(false);
          }}
        />
      )}
    </div>
  );
};

export default InstitutionalProfile;
