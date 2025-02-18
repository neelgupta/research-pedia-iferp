import { useEffect, useState } from "react";
import "./InstitutionalProfile.scss";
import ProfileDetails from "./ProfileDetails";
import MyProfilePopUp from "./MyProfilePopUp";
import { getDataFromLocalStorage } from "@/utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { getInstitutionalMemberDetails } from "@/store/userSlice/userDetailSlice";
import PopupRegistration from "@/pages/User/PopupRegistration/PopupRegistration";

const InstitutionalProfile = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleClick = () => {
    setIsOpenModal(true);
  };
  const [isUserData, setIsUserData] = useState({});
  const localData = getDataFromLocalStorage();

  const isModalOpen = useSelector((state) => state.global.isModalOpen);


  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    const result = await dispatch(
      getInstitutionalMemberDetails(localData.roleId)
    );
    setIsUserData(result?.data?.response);
  };

  const onHide = () => {
    setIsOpenModal(false);
    dispatch(setIsOpenModal(false));
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div className="institutional-profile-container">
      <ProfileDetails onClick={handleClick} isUserData={isUserData} />

      {(isModalOpen || isOpenModal) && (
        <MyProfilePopUp
          title="Institutional"
          onHide={onHide}
          isUserData={isUserData}
          fetchUserDetails={fetchUserDetails}
        />
      )}
    </div>
  );
};

export default InstitutionalProfile;
