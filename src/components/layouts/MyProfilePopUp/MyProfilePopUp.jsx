import React, { useEffect, useState } from "react";
import Modal from "../Modal";
import "./MyProfilePopUp.scss";
import { icons } from "@/utils/constants";
import PersonalDetailsPopUp from "./PersonalDetailsPopUp/PersonalDetailsPopUp";
import EducationDetailsPopUp from "./EducationDetailsPopUp";
import SelectPlan from "./SelectPlan";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import {
  getDepartment,
  getInstitution,
  getUniverisity,
} from "@/store/userSlice/userDetailSlice";
import { getDataFromLocalStorage } from "@/utils/helpers";
import * as Yup from "yup";
const MyProfilePopUp = ({ onHide, title, isUserData, fetchData }) => {
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [valCount, setValCount] = useState(0);
  const [isDepartment, setIsDepartment] = useState([]);
  const [isUniversity, setIsUniversity] = useState([]);
  const [isInstitute, setIsInstitute] = useState([]);
  const localData = getDataFromLocalStorage();

  const isStudent = localData.role === "student";

  const initialValues = {
    name: "",
    email: "",
    country: {
      id: "",
      countryName: "",
    },
    dateOfbirth: "",
    gender: "",
    memberShipid: "",
    phoneNumber: "",
    profilePicture: "",
    state: {
      id: "",
      stateName: "",
    },
    educationDetails: {
      doctorateOrPhdDetails: {
        course: "",
        department: "",
        institution: "",
        university: "",
        yearOfCompletion: "",
      },
      masterDegreeOrPgDetails: {
        course: "",
        department: "",
        institution: "",
        university: "",
        yearOfCompletion: "",
      },
    },
    personalDetails: {
      bacheloerDegreeOrUgDetails: {
        course: "",
        department: "",
        institution: "",
        university: "",
        yearOfCompletion: "",
      },
      currentProffessionDetails: {
        department: "",
        insOrOrganizationName: "",
      },
      city: "",
    },
    researchDetails: {
      researchIntrest: {
        areaOfIntrest: "",
        comments: "",
      },
    },
  };

  const subTitle = {
    0: "Crafting Your Unique Identity",
    1: "Choose Your Path to Success",
    2: "Choose Your Path to Success",
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
    if (valCount === 2) {
      setType("membership-details");
    } else if (valCount === 0) {
      setType("personal-details");
    } else if (valCount === 1) {
      setType("education-details");
    } else {
      setType("personal-details");
    }
  }, [valCount]);

  const fetchDepartment = async () => {
    const result = await dispatch(getDepartment());
    setIsDepartment(result.data.response);
  };

  const fetchUniversity = async () => {
    const result = await dispatch(getUniverisity());
    setIsUniversity(result?.data?.response);
  };

  const fetchInstitution = async () => {
    const result = await dispatch(getInstitution());
    setIsInstitute(result?.data?.response);
  };

  const institutetOptions = isInstitute?.map((institute) => ({
    id: institute._id,
    label: institute.name,
    value: institute.name,
  }));

  const departmentOptions = isDepartment?.map((department) => ({
    id: department._id,
    label: department.categoryName,
    value: department.categoryName,
  }));

  const UniverisityOptions = isUniversity?.map((university) => ({
    id: university.id,
    label: university.name,
    value: university.name,
  }));

  useEffect(() => {
    fetchDepartment();
    fetchUniversity();
    fetchInstitution();
  }, []);

  const handleSubmit = (values) => {
    // console.log(values, "EDIT USER PROFFESIONAL DATA");
    console.log("values", values);
  };

  return (
    <Modal onHide={onHide} size="xl" isClose={valCount === 2} isCloseOutside>
      <div className="profile-modal-container">
        <p className="title-text">{`My Profile - ${title} Member`}</p>

        <div className="sub-title">{subTitle[valCount]}</div>

        <div className="details-list mb-34">
          {arrayOption.map((elem, index) => {
            const isComplete = valCount >= elem.id;
            const isActive = valCount === elem.id - 1;
            return (
              <React.Fragment key={index}>
                <div className="details-block">
                  {valCount > elem.id - 1 ? (
                    <img
                      src={icons.completeIcons}
                      alt="complete"
                      className="active-selection"
                    />
                  ) : (
                    <div
                      className={` ${
                        valCount === elem.id - 1
                          ? "color-113D number-block-a"
                          : "color-black-3333 number-block"
                      }`}
                    >
                      {elem.id}
                    </div>
                  )}
                  <div
                    className={`text-16-400 ${
                      isActive || isComplete ? "color-113D" : "color-black-3333"
                    }`}
                  >
                    {elem.title}
                  </div>
                </div>
                {arrayOption.length - 1 !== index && (
                  <div
                    className={`border-saprator ${
                      valCount > 0 ? "active-border" : ""
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
        <Formik
          enableReinitialize
          initialValues={isUserData ? isUserData : initialValues}
          // validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(props) => {
            const {
              values,
              errors,
              handleChange,
              setFieldValue,
              handleSubmit,
              setValues,
            } = props;
            return (
              <from>
                {valCount === 0 && (
                  <PersonalDetailsPopUp
                    setValCount={setValCount}
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    setFieldValue={setFieldValue}
                    setValues={setValues}
                    departmentOptions={departmentOptions}
                    UniverisityOptions={UniverisityOptions}
                    institutetOptions={institutetOptions}
                    fetchData={fetchData}
                    isUserData={isUserData}
                  />
                )}
                {valCount === 1 && (
                  <EducationDetailsPopUp
                    setValCount={setValCount}
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    setFieldValue={setFieldValue}
                    departmentOptions={departmentOptions}
                    UniverisityOptions={UniverisityOptions}
                    institutetOptions={institutetOptions}
                    fetchData={fetchData}
                    isStudent={isStudent}
                    isUserData={isUserData}
                  />
                )}
                {valCount === 2 && (
                  <SelectPlan
                    setValCount={setValCount}
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    setFieldValue={setFieldValue}
                  />
                )}
              </from>
            );
          }}
        </Formik>
      </div>
    </Modal>
  );
};

export default MyProfilePopUp;
