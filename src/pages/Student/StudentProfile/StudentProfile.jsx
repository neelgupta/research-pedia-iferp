import { useEffect, useState } from "react";
import "./StudentProfile.scss";
import PersonalDetails from "@/components/layouts/PersonalDetails";
import MyProfilePopUp from "@/components/layouts/MyProfilePopUp";
import EducationDetails from "@/components/layouts/EducationDetails";
import { getDataFromLocalStorage } from "@/utils/helpers";
import { useDispatch } from "react-redux";
import { getStudentMemberDetails } from "@/store/userSlice/userDetailSlice";

const StudentProfile = () => {
  const localData = getDataFromLocalStorage();
  const isPersonalDetailsExist = localData?.isPersonalDetailsExist;

  console.log(localData)
  const [isOpenModal, setIsOpenModal] = useState(isPersonalDetailsExist === false ? true: false);

  const handleClick = () => {
    setIsOpenModal(true);
  };

  const [isUserData, setIsUserData] = useState({});
  const dispatch = useDispatch();

  const role = localData.role;

  const fetchUserDetails = async () => {
    const result = await dispatch(getStudentMemberDetails(localData.roleId));
    setIsUserData(result?.data?.response);

  };


  const onHide = () => {
    if (isPersonalDetailsExist === true) {
      setIsOpenModal(false);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div className="student-profile-container">
      <PersonalDetails
        onClick={handleClick}
        role={role}
        isUserData={isUserData}
      />
      <EducationDetails
        onClick={handleClick}
        educationDetails={isUserData?.educationDetails}
        researchDetails={isUserData.researchDetails}
      />
      {isOpenModal && (
        <MyProfilePopUp
          isUserData={isUserData}
          title="Student"
          // onHide={() => {
          //   setIsOpenModal(false);
          // }}
          onHide={onHide}
          fetchData={fetchUserDetails}
        />
      )}
    </div>
  );
};

export default StudentProfile;
