import { Button, Modal } from "@/components";
import "./ProfessionalMemberProfile.scss";
import PersonalDetails from "@/components/layouts/PersonalDetails";
import EducationDetails from "@/components/layouts/EducationDetails";
import { useState } from "react";
import MyProfilePopUp from "@/components/layouts/MyProfilePopUp";

const ProfessionalMemberProfile = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleClick = () => {
    setIsOpenModal(true);
  };

  return (
    <div className="professional-profile-container">
      <PersonalDetails onClick={handleClick} />
      <EducationDetails />
      {isOpenModal && (
        <MyProfilePopUp
          title="Professional"
          onHide={() => {
            setIsOpenModal(false);
          }}
        />
      )}
    </div>
  );
};

export default ProfessionalMemberProfile;
