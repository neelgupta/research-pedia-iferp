import { useEffect, useState } from "react";
import "./InstitutionalProfile.scss";
import ProfileDetails from "./ProfileDetails";
import MyProfilePopUp from "./MyProfilePopUp";
import { getDataFromLocalStorage } from "@/utils/helpers";
import { useDispatch } from "react-redux";
import { getInstitutionalMemberDetails } from "@/store/userSlice/userDetailSlice";

const InstitutionalProfile = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleClick = () => {
    setIsOpenModal(true);
  };

  const [isUserData, setIsUserData] = useState({});
  const localData = getDataFromLocalStorage();
  const dispatch = useDispatch();
  const fetchUserDetails = async () => {
    const result = await dispatch(
      getInstitutionalMemberDetails(localData.roleId)
    );
    setIsUserData(result?.data?.response);
  };

  console.log(isUserData, "isUserData");
  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <div className="institutional-profile-container">
      <ProfileDetails onClick={handleClick} isUserData={isUserData} />

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
