import { Button, Modal } from "@/components";
import "./ProfessionalMemberProfile.scss";
import PersonalDetails from "@/components/layouts/PersonalDetails";
import EducationDetails from "@/components/layouts/EducationDetails";
import { useEffect, useState } from "react";
import MyProfilePopUp from "@/components/layouts/MyProfilePopUp";
import { getDataFromLocalStorage } from "@/utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { getProfessionalMemberDetails } from "@/store/userSlice/userDetailSlice";
import PopupRegistration from "../PopupRegistration/PopupRegistration";
import { setIsModalOpen } from "@/store/globalSlice";

const ProfessionalMemberProfile = () => {
  const [isUserData, setIsUserData] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);

  const isModalOpen = useSelector((state) => state.global.isModalOpen);

  const localData = getDataFromLocalStorage();
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsOpenModal(true);
  };

  const role = localData.role
  
  const fetchUserDetails = async () => {
    const result = await dispatch(
      getProfessionalMemberDetails(localData.roleId)
    );
    setIsUserData(result?.data?.response);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);


  const isPopupOpen = false;
  
  const onHide =()=>{
    setIsOpenModal(false);
    dispatch(setIsModalOpen(false))
  }

  useEffect(() => {
    if (isPopupOpen) {
      setIsOpenModal(true);
    }
  }, [isPopupOpen]);

  return (
    <div className="professional-profile-container">
      <PopupRegistration />
      <PersonalDetails
        onClick={handleClick}
        role={role}
        isUserData={isUserData}
      />
      <EducationDetails
        onClick={handleClick}
        educationDetails={isUserData?.educationDetails}
        researchDetails={isUserData?.researchDetails}
      />
      {(isModalOpen || isOpenModal) && (
        <MyProfilePopUp
          isUserData={isUserData}
          title="Student"
          onHide = {onHide}
          fetchData={fetchUserDetails}
          setIsOpenModal
        />
      )}
    </div>
  );
};

export default ProfessionalMemberProfile;
