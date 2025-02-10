import React, { useEffect, useState } from "react";
import "./MyProfilePopUp.scss";
import { icons } from "@/utils/constants";
import PersonalDetailsPopUp from "./PersonalDetailsPopUp/PersonalDetailsPopUp";
import EducationDetailsPopUp from "./EducationDetailsPopUp";
import SelectPlan from "./SelectPlan";
import { Formik } from "formik";
import { Modal } from "@/components";
import * as Yup from "yup";
const MyProfilePopUp = ({ onHide, title, isUserData, fetchUserDetails }) => {
  const [type, setType] = useState("");
  const [valCount, setValCount] = useState(0);

  const subTitle = {
    0: "Crafting Your Unique Identity",
    1: "Choose Your Path to Success",
    2: "Choose Your Path to Success",
  };

  const arrayOption = [
    {
      id: 1,
      title: "Institution Details",
      type: "institution-details",
      isActive: true,
    },
    {
      id: 2,
      title: "Admin Details",
      type: "admin-details",
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
      setType("institution-details");
    } else if (valCount === 1) {
      setType("admin-details");
    } else {
      setType("institution-details");
    }
  }, [valCount]);

  const initialValues = {
    name: "",
    email: "",
    alternateEmail: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    dateOfbirth: "",
    gender: "",
    country: {
      id: "",
      countryName: "",
    },
    state: {
      id: "",
      stateName: "",
    },
    city: "",
    profilePicture: "",
    institutionDetails: {
      instituion: "",
      institutionEmail: "",
      institutionContactNumber: "",
      noOfPremiumStudent: "",
      noOfPremiumProfessional: "",
      strengthOfpremiumUGStudents: "",
      strengthOfpremiumPGStudents: "",
      strengthOfpremiumResearchScholar: "",
      strengthOfinstitute: "",
      departmentOfOrganization: "",
    },
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    alternateEmail: Yup.string().email("Invalid email address").notRequired(),

    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),

    alternatePhoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .notRequired(),

    dateOfbirth: Yup.date()
      .required("Date of birth is required")
      .max(new Date(), "Date of birth cannot be in the future"),

    gender: Yup.string()
      .oneOf(["male", "female", "other"], "Invalid gender")
      .required("Gender is required"),

    country: Yup.object({
      id: Yup.string().required("Country is required"),
      countryName: Yup.string().required("Country name is required"),
    }),

    state: Yup.object({
      id: Yup.string().required("State is required"),
      stateName: Yup.string().required("State name is required"),
    }),

    city: Yup.string().required("City is required"),

    profilePicture: Yup.string().notRequired(),

    institutionDetails: Yup.object({
      instituion: Yup.string()
        .required("Institution name is required")
        .min(2, "Institution name must be at least 2 characters"),

      institutionEmail: Yup.string()
        .email("Invalid email address")
        .required("Institution email is required"),

      institutionContactNumber: Yup.string()
        .matches(
          /^[0-9]{10}$/,
          "Institution contact number must be exactly 10 digits"
        )
        .required("Institution contact number is required"),

      noOfPremiumStudent: Yup.number()
        .required("Number of premium students is required")
        .positive("Number must be positive")
        .integer("Number must be an integer"),

      noOfPremiumProfessional: Yup.number()
        .required("Number of premium professionals is required")
        .positive("Number must be positive")
        .integer("Number must be an integer"),

      strengthOfpremiumUGStudents: Yup.number()
        .required("Strength of premium UG students is required")
        .positive("Number must be positive")
        .integer("Number must be an integer"),

      strengthOfpremiumPGStudents: Yup.number()
        .required("Strength of premium PG students is required")
        .positive("Number must be positive")
        .integer("Number must be an integer"),

      strengthOfpremiumResearchScholar: Yup.number()
        .required("Strength of premium research scholars is required")
        .positive("Number must be positive")
        .integer("Number must be an integer"),

      strengthOfinstitute: Yup.number()
        .required("Strength of the institution is required")
        .positive("Number must be positive")
        .integer("Number must be an integer"),

      departmentOfOrganization: Yup.string()
        .required("Department of organization is required")
        .min(2, "Department name must be at least 2 characters")
        .max(100, "Department name must be less than 100 characters"),
    }),
  });

  const handelSave = (value) => {
    console.log("values", value);
  };
  return (
    <Modal onHide={onHide} size="xl" isClose={false}>
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
          initialValues={isUserData || initialValues}
          // validationSchema={validationSchema}
          onSubmit={handelSave}
        >
          {(props) => {
            const {
              values,
              errors,
              handleChange,
              setFieldValue,
              handleSubmit,
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
                    fetchUserDetails={fetchUserDetails}
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
