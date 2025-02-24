import React, { useEffect, useState } from "react";
import "./RegisterProfilePopUp.scss";
import { icons } from "@/utils/constants";
import PersonalDetailsPopUp from "./PersonalDetailsPopUp/PersonalDetailsPopUp";
import EducationDetailsPopUp from "./EducationDetailsPopUp";
import SelectPlan from "./SelectPlan";
import { Formik } from "formik";
import { Modal } from "@/components";

const RegisterProfilePopUp = ({
  onHide,
  title,
  isUserData,
  fetchUserDetails,
}) => {
  const [type, setType] = useState("");
  const [valCount, setValCount] = useState(1);

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
    PersonalDetails: {
      name: "",
      email: "",
      phoneno: "",
      gender: "",
      countryName: "",
      stateName: "",
      city: "",
      date_of_birth: "",
      bd_course: "",
      bd_department: "",
      bd_university: "",
      bd_institution: "",
      organizationname: "",
      departmentname: "",
      bd_year_of_completion: "",
    },

    eductiondetails: {
      md_course: "",
      md_department: "",
      md_university: "",
      md_institution: "",
      md_year_of_completion: "",
      phd_course: "",
      phd_department: "",
      phd_university: "",
      phd_institution: "",
      phdyear_of_completion: "",
    },
  };

  const handelSave = (values) => {};
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

export default RegisterProfilePopUp;
