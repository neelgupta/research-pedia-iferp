import React, { useEffect, useState } from "react";
import "./PersonalDetailsPopUp.scss";
import TextInput from "@/components/inputs/TextInput";
import Dropdown from "@/components/inputs/Dropdown";
import FileUpload from "@/components/inputs/FileUpload";
import Button from "@/components/inputs/Button";
import {
  getCity,
  getCountry,
  getDepartmentOfOrganization,
  getState,
} from "@/store/userSlice/userDetailSlice";
import { useDispatch } from "react-redux";

const PersonalDetailsPopUp = ({
  setValCount,
  setFieldValue,
  handleSubmit,
  handleChange,
  errors,
  values,
  // 
  isCountry,
  setIsCountry,
  isState, 
  setIsState,
  isCity, 
  setIsCity,
  isCountryId, 
  setIdCountryId,
  isStateId,
  setIsStateId,
  departmentOfOrganization, 
  setDepartmentOfOrganization,
}) => {
  
  const dispatch = useDispatch();
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

  const fetchDepartmentOfOrganization = async () => {
    const result = await dispatch(getDepartmentOfOrganization());

    const data = result?.data?.response;

    const filteredTopics = data?.filter(
      (cat, index, self) =>
        cat.categoryName !== null &&
        self.findIndex((t) => t.categoryName === cat.categoryName) === index
    );
    setDepartmentOfOrganization(filteredTopics);
  };

  const CountryData = isCountry?.map((country) => ({
    id: country.id,
    label: country?.country,
    value: country?.country,
  }));

  const DepartmentOption = departmentOfOrganization?.map((dep) => ({
    id: dep.id,
    label: dep.categoryName,
    value: dep.categoryName,
  }));

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

  // const handleSubmit = async () => {
  //   values.country = {
  //     id: isCountryId,
  //     countryName:
  //       isCountry.find((country) => country.id === isCountryId)?.country ||
  //       values.country?.countryName,
  //   };

  //   values.state = {
  //     id: isStateId,
  //     stateName:
  //       isState?.find((state) => state.id === isStateId)?.state ||
  //       values?.state?.stateName,
  //   };

  //   setValCount(1);
  // };

  useEffect(() => {
    fetchCountry();
    fetchState();
    fetchCity();
    fetchDepartmentOfOrganization();
  }, [isCountryId, isStateId]);

  return (
    <div className="personal-details-container">
      <div className="row row-gap-3">
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="Institution"
            onChange={handleChange}
            value={values?.institutionDetails?.instituion}
            id="institutionDetails.instituion"
            error={errors.institutionDetails?.instituion}
          />
        </div>
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="Institution email id"
            onChange={handleChange}
            value={values?.institutionDetails?.institutionEmail}
            id="institutionDetails.institutionEmail"
            error={errors.institutionDetails?.institutionEmail}
          />
        </div>
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="Institution contact number"
            onChange={handleChange}
            value={values?.institutionDetails?.institutionContactNumber}
            id="institutionDetails.institutionContactNumber"
            error={errors.institutionDetails?.institutionContactNumber}
          />
        </div>
        <div className="col-md-6">
          <Dropdown
            placeholder="Country"
            id="country.countryName"
            optionLabel="label"
            optionKey="value"
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
            placeholder="State"
            id="state.stateName"
            optionLabel="label"
            optionKey="value"
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
            placeholder="City"
            id="city"
            optionLabel="label"
            optionKey="value"
            options={CityData}
            onChange={(e) => {
              handleChange(e);
            }}
            value={values?.city}
            error={errors.city}
          />
        </div>
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="No. of IFERP premium student members"
            onChange={handleChange}
            value={values?.institutionDetails?.noOfPremiumStudent}
            id="institutionDetails.noOfPremiumStudent"
            error={errors.institutionDetails?.noOfPremiumStudent}
          />
        </div>
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="No. of IFERP premium professional members"
            onChange={handleChange}
            value={values?.institutionDetails?.noOfPremiumProfessional}
            id="institutionDetails.noOfPremiumProfessional"
            error={errors.institutionDetails?.noOfPremiumProfessional}
          />
        </div>
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="Strength of premium U.G. students"
            onChange={handleChange}
            value={values?.institutionDetails?.strengthOfpremiumUGStudents}
            id="institutionDetails.strengthOfpremiumUGStudents"
            error={errors.institutionDetails?.strengthOfpremiumUGStudents}
          />
        </div>
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="Strength of premium P.G. students"
            onChange={handleChange}
            value={values?.institutionDetails?.strengthOfpremiumPGStudents}
            id="institutionDetails.strengthOfpremiumPGStudents"
            error={errors.institutionDetails?.strengthOfpremiumPGStudents}
          />
        </div>
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="Strength of premium research scholars"
            onChange={handleChange}
            value={values?.institutionDetails?.strengthOfpremiumResearchScholar}
            id="institutionDetails.strengthOfpremiumResearchScholar"
            error={errors.institutionDetails?.strengthOfpremiumResearchScholar}
          />
        </div>
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="Strength of Institution"
            onChange={handleChange}
            value={values?.institutionDetails?.strengthOfinstitute}
            id="institutionDetails.strengthOfinstitute"
            error={errors.institutionDetails?.strengthOfinstitute}
          />
        </div>
        <div className="col-md-6">
          <Dropdown
            placeholder="Departments of your organization"
            options={DepartmentOption}
            id="institutionDetails.departmentOfOrganization"
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            value={values?.institutionDetails?.departmentOfOrganization}
            error={errors.institutionDetails?.departmentOfOrganization}
          />
        </div>

        <div className="col-md-6">
          <FileUpload
            placeholder="Profile photo"
            onChange={(file) => setFieldValue(`profilePicture`, file)}
            id="profilePicture"
            fileType="image"
            acceptType={["png", "jpg", "jpeg"]}
            label="Upload Profile Image"
            isRequired={true}
            value={values?.profilePicture}
            error={errors.profilePicture}
          />
          {values.profilePicture && (
            <div className="preview my-14">
              <h6>Preview</h6>
              <img
                src={values?.profilePicture}
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
          <div className="d-flex justify-content-end mt-10">
            <Button
              btnText="Continue"
              className="h-49 w-114"
              onClick={handleSubmit}
              // onClick={() => {
              //   setValCount(1);
              // }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsPopUp;
