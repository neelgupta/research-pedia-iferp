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
  handleSubmit,
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
  setloading,
  isSubmitting,
  phonedropdown,
  setphonedropdown,
}) => {
  const dispatch = useDispatch();

  const [phoneNumberAlreadySet, setPhoneNumberAlreadySet] = useState(false);

  useEffect(() => {
    if (values.phoneNumber) {
      setPhoneNumberAlreadySet(true); 
    }
  }, []);


  console.log(phoneNumberAlreadySet,"phoneNumberAlreadySet")

  const fetchCountry = async () => {
    const result = await dispatch(getCountry());
    setIsCountry(result?.data?.response);
  };

  const fetchState = async () => {
    if (isCountryId !== undefined) {
      const result = await dispatch(getState(isCountryId));
      setIsState(result?.data?.response);
    }
  };

  const fetchCity = async () => {
    if (isStateId !== undefined) {
      const result = await dispatch(getCity(isStateId));
      setIsCity(result?.data?.response);
    }
  };

  const fetchUgCourse = async () => {
    const result = await dispatch(getCourse("ug"));
    setUgcourse(result?.data?.response);
  };

  const ugCourseOptions = ugCourse.map((ugCourse) => ({
    id: ugCourse.id,
    label: ugCourse.name,
    value: ugCourse.name,
  }));

  const CountryData = isCountry?.map((country) => {
    return {
      id: country.id,
      label: country?.country,
      value: country?.country,
    };
  });

  const StateData = isState?.map((state) => ({
    id: state.id,
    label: state.state,
    value: state.state,
  }));

  const CityData = isCity?.map((city) => ({
    id: city.id,
    label: city.city,
    value: city.city,
  }));

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
            value={` ${values?.namePrefix && values?.namePrefix} ${values.name}`}
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
            className="h-45"
            id="phoneNumber"
            onChange={handleChange}
            // disabled={isSubmitting || !!values.phoneNumber}
            disabled={phoneNumberAlreadySet}
            values={values}
            error={errors.phoneNumber}
            onDropdownChange={(selected) => setphonedropdown(selected)}
            dropdownOptions={dialCode.map((item) => ({
              value: item.dial_code,
              label: `${values.countryCode ? values.countryCode : item.dial_code} `,
            }))}
            alternateval={phonedropdown}
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
            placeholder="Gender"
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
