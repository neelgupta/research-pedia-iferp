import { useEffect, useState } from "react";
import "./StudentProfile.scss";
import PersonalDetails from "@/components/layouts/PersonalDetails";
import MyProfilePopUp from "@/components/layouts/MyProfilePopUp";
import EducationDetails from "@/components/layouts/EducationDetails";
import { getDataFromLocalStorage } from "@/utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { getStudentMemberDetails } from "@/store/userSlice/userDetailSlice";
import { setIsModalOpen } from "@/store/globalSlice";

const StudentProfile = () => {
  const localData = getDataFromLocalStorage();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isUserData, setIsUserData] = useState({});
  const dispatch = useDispatch();

  const role = localData.role;
  const isModalOpen = useSelector((state) => state.global.isModalOpen);

  const fetchUserDetails = async () => {
    const result = await dispatch(getStudentMemberDetails(localData.roleId));
    setIsUserData(result?.data?.response);
  };


  // const onHide = () => {
  //   if (isPersonalDetailsExist === true) {
  //     setIsOpenModal(false);
  //   }
  // };

  const onHide =()=>{
    setIsOpenModal(false);
    dispatch(setIsModalOpen(false))
  }


  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleClick = () => {
    setIsOpenModal(true);
  };

  const reduxdata = useSelector((state) => state.global.isregisterpopup);
  const isPopupOpen = true;

  useEffect(() => {
    if (isPopupOpen) {
      setIsOpenModal(true);
    }
  }, [isPopupOpen]);

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
      {(isModalOpen || isOpenModal) && (
        <MyProfilePopUp
          isUserData={isUserData}
          title="Student"
          onHide={onHide}
          fetchData={fetchUserDetails}
          setIsOpenModal
        />
      )}
    </div>
  );
};

export default StudentProfile;
