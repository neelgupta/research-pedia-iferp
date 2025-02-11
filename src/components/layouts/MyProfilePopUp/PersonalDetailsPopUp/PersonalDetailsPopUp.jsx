import React, { useEffect, useRef, useState } from "react";
import "./PersonalDetailsPopUp.scss";
import TextInput from "@/components/inputs/TextInput";
import DatePicker from "@/components/inputs/DataPicker";
import TextInputwithDropdown from "@/components/inputs/TextInputwithDropdown/TextInputwithDropdown";
import { dialCode } from "@/utils/constants";
import Dropdown from "@/components/inputs/Dropdown";
import FileUpload from "@/components/inputs/FileUpload";
import Button from "@/components/inputs/Button";
import { useDispatch } from "react-redux";
import {
  getCity,
  getCountry,
  getCourse,
  getState,
} from "@/store/userSlice/userDetailSlice";
import { getDataFromLocalStorage } from "@/utils/helpers";
import { Formik } from "formik";
import * as Yup from "yup";

const PersonalDetailsPopUp = ({
  setValCount,
  setFieldValue,
  // handleSubmit,
  handleChange,
  errors,
  setValues,
  values,
  departmentOptions,
  UniverisityOptions,
  institutetOptions,
  isUserData,
  isStudent,
  fetchData,



  isCountry,
  setIsCountry,
  isCountryId,
  setIdCountryId,
  isStateId,
  setIsStateId,
  isState,
  setIsState,
  isCity,
  setIsCity,
  ugCourse,
  setUgcourse,
  loading,
  setloading
}) => {
  const dispatch = useDispatch();
  // const [isCountry, setIsCountry] = useState([]);
  // const localData = getDataFromLocalStorage();

  // const [isCountryId, setIdCountryId] = useState(values?.country?.id);
  // const [isStateId, setIsStateId] = useState(values?.state?.id);
  // const [isState, setIsState] = useState([]);
  // const [isCity, setIsCity] = useState([]);
  // const [ugCourse, setUgcourse] = useState([]);
  const [phonedropdown, setphonedropdown] = useState("+91");

  const fetchCountry = async () => {
    const result = await dispatch(getCountry());
    setIsCountry(result.data.response);
  };

  console.log("UserData ->101 ", isUserData);
  const fetchState = async () => {
    if (isCountryId !== undefined) {
      const result = await dispatch(getState(isCountryId));
      setIsState(result.data.response);
    }
  };

  const fetchCity = async () => {
    if (isStateId !== undefined) {
      const result = await dispatch(getCity(isStateId));
      setIsCity(result.data.response);
    }
  };

  const fetchUgCourse = async () => {
    const result = await dispatch(getCourse("ug"));
    setUgcourse(result.data.response);
  };

  const ugCourseOptions = ugCourse.map((ugCourse) => ({
    id: ugCourse.id,
    label: ugCourse.name,
    value: ugCourse.name,
  }));

  const CountryData = isCountry.map((country) => {
    return {
      id: country.id,
      label: country?.country,
      value: country?.country,
    };
  });

  const StateData = isState.map((state) => ({
    id: state.id,
    label: state.state,
    value: state.state,
  }));

  const CityData = isCity.map((city) => ({
    id: city.id,
    label: city.city,
    value: city.city,
  }));

  // const [loading, setloading] = useState(false);

  // const handleSubmit = async () => {
  //   setloading(true);
  //   values.country = {
  //     id: isCountryId,
  //     countryName:
  //       isCountry.find((country) => country.id === isCountryId)?.country ||
  //       values.country?.countryName,
  //   };

  //   values.state = {
  //     id: isStateId,
  //     stateName:
  //       isState.find((state) => state.id === isStateId)?.state ||
  //       values?.state?.stateName,
  //   };

  //   delete values.role;


  //   const updateAction = isStudent
  //     ? updateStudentMemberDetails(localData.roleId, values)
  //     : updateProfessionalMemberDetails(localData.roleId, values);

  //   const result = await dispatch(updateAction);

  //   if (result?.status === 200) {
  //     setValCount(1);
  //     fetchData();
  //     getDataFromLocalStorage();
  //   }
  //   setloading(false);
  // };

  // const handleSubmit = async () => {
  //   setloading(true);
  //   values.country = {
  //     id: isCountryId,
  //     countryName:
  //       isCountry.find((country) => country.id === isCountryId)?.country ||
  //       values.country?.countryName,
  //   };

  //   values.state = {
  //     id: isStateId,
  //     stateName:
  //       isState.find((state) => state.id === isStateId)?.state ||
  //       values?.state?.stateName,
  //   };

  //   setValCount(1);

  //   setloading(false);
  // };

  useEffect(() => {
    fetchCountry();
    fetchState();
    fetchCity();
    fetchUgCourse();
  }, [isCountryId, isStateId]);

  return (

    <div className="personal-details-container">
      <div className="row row-gap-3">
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="Enter your Name"
            value={values.name}
            disabled
            error={errors.name}
          />
        </div>
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="Enter your Email"
            value={values.email}
            disabled
            error={errors.email}
          />
        </div>
        <div className="col-lg-6">
          <TextInputwithDropdown
            placeholder="Phone Number"
            value={values.phoneNumber}
            // dropdownOptions={dialCode}
            className="h-45"
            id="phoneNumber"
            disabled
            error={errors.phoneNumber}
            onDropdownChange={(selected) => setphonedropdown(selected)}
            dropdownOptions={dialCode.map((item) => ({
              value: "+91" || item.dial_code,
              label: ` ${item.dial_code}`,
            }))}
          />
        </div>
        <div className="col-lg-6">
          <DatePicker
            id="dateOfbirth"
            name="dateOfbirth"
            value={values.dateOfbirth}
            selected={null}
            onChange={handleChange}
            className="h-45"
            icon
            placeholder="Date of birth"
            error={errors.dateOfbirth}
          />
        </div>
        <div className="col-md-6">
          <Dropdown
            id="gender"
            placeholder="Genders"
            optionLabel="label"
            optionKey="value"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
            onChange={handleChange}
            value={values.gender}
            error={errors.gender}
          />
        </div>
        <div className="col-md-6">
          <Dropdown
            id="country.countryName"
            optionLabel="label"
            optionKey="value"
            placeholder="Country"
            options={CountryData}
            onChange={(e) => {
              handleChange(e), setIdCountryId(e.target.data.id);
            }}
            value={values?.country?.countryName}
            error={errors.country?.countryName}
          />
        </div>
        <div className="col-md-6">
          <Dropdown
            id="state.stateName"
            optionLabel="label"
            optionKey="value"
            placeholder="State"
            options={StateData}
            onChange={(e) => {
              handleChange(e), setIsStateId(e.target.data.id);
            }}
            value={values?.state?.stateName}
            error={errors.state?.stateName}
          />
        </div>
        <div className="col-md-6">
          <Dropdown
            id="personalDetails.city"
            optionLabel="label"
            optionKey="value"
            placeholder="City"
            options={CityData}
            onChange={(e) => {
              handleChange(e);
            }}
            value={values?.personalDetails?.city}
            error={errors.personalDetails?.city}
          />
        </div>
        <div className="col-12">
          <FileUpload
            onChange={(file) => setFieldValue(`profilePicture`, file)}
            id="profile-image"
            fileType="image"
            acceptType={["png", "jpg", "jpeg"]}
            label="Upload Profile Image"
            isRequired={true}
            placeholder="Choose a file"
            value={values.profilePicture}
          />
          {values.profilePicture && (
            <div className="preview my-14">
              <h6>Preview</h6>
              <img
                src={values.profilePicture}
                alt="Profile Preview"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
            </div>
          )}
        </div>
        <div className="col-12">
          <h6 className="degree-details">Bachelor Degree/UG Details</h6>
        </div>
        <div className="col-md-6">
          <Dropdown
            id="personalDetails.bacheloerDegreeOrUgDetails.course"
            value={values?.personalDetails?.bacheloerDegreeOrUgDetails?.course}
            optionLabel="label"
            optionKey="value"
            placeholder="Course"
            onChange={(e) => {
              handleChange(e);
            }}
            options={ugCourseOptions}
            error={errors.personalDetails?.bacheloerDegreeOrUgDetails?.course}
          />
        </div>
        <div className="col-md-6">
          <Dropdown
            placeholder="Department"
            id="personalDetails.bacheloerDegreeOrUgDetails.department"
            value={
              values?.personalDetails?.bacheloerDegreeOrUgDetails?.department
            }
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            options={departmentOptions || []}
            error={
              errors.personalDetails?.bacheloerDegreeOrUgDetails?.department
            }
          />
        </div>
        <div className="col-md-6">
          <Dropdown
            id="personalDetails.bacheloerDegreeOrUgDetails.university"
            optionLabel="label"
            optionKey="value"
            options={UniverisityOptions || []}
            placeholder="University"
            onChange={handleChange}
            value={
              values?.personalDetails?.bacheloerDegreeOrUgDetails?.university
            }
            error={
              errors.personalDetails?.bacheloerDegreeOrUgDetails?.university
            }
          />
        </div>
        <div className="col-md-6">
          <Dropdown
            id="personalDetails.bacheloerDegreeOrUgDetails.institution"
            value={
              values?.personalDetails?.bacheloerDegreeOrUgDetails?.institution
            }
            placeholder="Institution"
            options={institutetOptions || []}
            onChange={handleChange}
            optionLabel="label"
            optionKey="value"
            error={
              errors.personalDetails?.bacheloerDegreeOrUgDetails?.institution
            }
          />
        </div>
        <div className="col-md-6">
          <DatePicker
            className="h-45"
            icon
            placeholder="Year of completion"
            id="personalDetails.bacheloerDegreeOrUgDetails.yearOfCompletion"
            value={
              values?.personalDetails?.bacheloerDegreeOrUgDetails
                ?.yearOfCompletion
            }
            selected={null}
            onChange={handleChange}
            error={
              errors.personalDetails?.bacheloerDegreeOrUgDetails
                ?.yearOfCompletion
            }
          />
        </div>
        <div className="col-12">
          <h6 className="degree-details">
            Current Profession Details (Note: This information will be Referred
            for Your Certification Purpose)
          </h6>
        </div>
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="Institution/Organization name"
            id="personalDetails.currentProffessionDetails.insOrOrganizationName"
            value={
              values?.personalDetails?.currentProffessionDetails
                ?.insOrOrganizationName
            }
            onChange={handleChange}
            error={
              errors.personalDetails?.currentProffessionDetails
                ?.insOrOrganizationName
            }
          />
        </div>
        <div className="col-md-6">
          <TextInput
            id="personalDetails.currentProffessionDetails.department"
            value={
              values?.personalDetails?.currentProffessionDetails?.department
            }
            className="h-45"
            placeholder="Department"
            onChange={handleChange}
            error={
              errors.personalDetails?.currentProffessionDetails?.department
            }
          />
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-end mt-10">
            <Button
              btnText="Continue"
              className="h-49 w-114"
              onClick={handleSubmit}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsPopUp;
