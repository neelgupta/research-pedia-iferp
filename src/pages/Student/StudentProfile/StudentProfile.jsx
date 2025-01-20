import { useState } from "react";
import "./StudentProfile.scss";
import PersonalDetails from "@/components/layouts/PersonalDetails";
import MyProfilePopUp from "@/components/layouts/MyProfilePopUp";
import EducationDetails from "@/components/layouts/EducationDetails";

const StudentProfile = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleClick = () => {
    setIsOpenModal(true);
  };
  return (
    <div className="student-profile-container">
      <PersonalDetails onClick={handleClick} />
      <EducationDetails onClick={handleClick} />
      {isOpenModal && (
        <MyProfilePopUp
          title="Student"
          onHide={() => {
            setIsOpenModal(false);
          }}
        />
      )}
    </div>
  );
};

export default StudentProfile;
