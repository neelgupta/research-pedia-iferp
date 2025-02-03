import { Button, Modal } from "@/components";
import "./ProfessionalMemberProfile.scss";
import PersonalDetails from "@/components/layouts/PersonalDetails";
import EducationDetails from "@/components/layouts/EducationDetails";
import { useEffect, useState } from "react";
import MyProfilePopUp from "@/components/layouts/MyProfilePopUp";
import { getDataFromLocalStorage } from "@/utils/helpers";
import { useDispatch } from "react-redux";
import { getProfessionalMemberDetails } from "@/store/userSlice/userDetailSlice";

const ProfessionalMemberProfile = () => {
  const [isUserData, setIsUserData] = useState({});

  const [isPersonalDetailsExist, setIsPersonalDetailsExist] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState(
    !isPersonalDetailsExist ? true : false
  );

  const localData = getDataFromLocalStorage();
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsOpenModal(true);
  };

  const role = localData.role;

  const fetchUserDetails = async () => {
    const result = await dispatch(
      getProfessionalMemberDetails(localData.roleId)
    );
    setIsUserData(result?.data?.response);
    setIsPersonalDetailsExist(
      result?.data?.response?.isPersonalDetailsExistfalse
    );
  };


  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div className="professional-profile-container">
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
      {isOpenModal && (
        <MyProfilePopUp
          title="Professional"
          isUserData={isUserData}
          onHide={() => {
            setIsOpenModal(false);
          }}
          fetchData={fetchUserDetails}
        />
      )}
    </div>
  );
};

export default ProfessionalMemberProfile;
