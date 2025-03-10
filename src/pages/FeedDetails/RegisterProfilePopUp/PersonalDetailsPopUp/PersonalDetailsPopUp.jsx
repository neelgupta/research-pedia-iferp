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
import TextInputwithDropdown from "@/components/inputs/TextInputwithDropdown/TextInputwithDropdown";
import { dialCode } from "@/utils/constants";
import DatePicker from "@/components/inputs/DataPicker";

const PersonalDetailsPopUp = ({
  setValCount,
  setFieldValue,
  handleSubmit,
  handleChange,
  errors,
  values,
}) => {
  const dispatch = useDispatch();

  const [isCountry, setIsCountry] = useState([]);
  const [isState, setIsState] = useState([]);
  const [isCity, setIsCity] = useState([]);
  const [isCountryId, setIdCountryId] = useState(values?.country?.id || "");
  const [isStateId, setIsStateId] = useState(values?.state?.id || "");
  const [departmentOfOrganization, setDepartmentOfOrganization] = useState([]);

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

  const handleNext = async () => {
    values.country = {
      id: isCountryId,
      countryName:
        isCountry.find((country) => country.id === isCountryId)?.country ||
        values.country?.countryName,
    };

    values.state = {
      id: isStateId,
      stateName:
        isState.find((state) => state.id === isStateId)?.state ||
        values?.state?.stateName,
    };

    setValCount(1);
  };

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
            placeholder="name"
            onChange={handleChange}
            value={values.PersonalDetails.name}
            id="institutionDetails.instituion"
          />
        </div>
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="Enter Email"
            onChange={handleChange}
            value={values.PersonalDetails.email}
            id="institutionDetails.institutionEmail"
          />
        </div>

        <div className="col-md-6">
          <TextInputwithDropdown
            isphone
            id="phoneno"
            name="phoneno"
            labelClass="pb-8"
            value={values.PersonalDetails.phoneno}
            onChange={(e) => setFieldValue("phoneno", e.target.value)}
            placeholder="Enter phone number"
            dropdownOptions={dialCode.map((item) => ({
              value: item.dial_code,
              label: `${item.flag} ${item.dial_code}`,
            }))}
            onDropdownChange={(selected) => setphonedropdown(selected)}
            // error={touched.phoneNumber && errors.phoneNumber}
          />
        </div>
        <div className="col-md-6 cmb-22">
          <DatePicker
            placeholder="Date of Birth*"
            id="date_of_birth"
            value={values.PersonalDetails.date_of_birth}
            onChange={handleChange}
            error={errors.date_of_birth}
            maxDate={new Date()}
          />
        </div>
        <div className="col-md-6 cmb-22">
          <Dropdown
            placeholder="Gender*"
            options={[
              { id: "Male", label: "Male" },
              { id: "Female", label: "Female" },
            ]}
            id="gender"
            value={values.PersonalDetails.gender}
            onChange={handleChange}
            error={errors.gender}
          />
        </div>

        <div className="col-md-6">
          <Dropdown
            placeholder="Country"
            id="country.countryName"
            optionLabel="label"
            optionKey="value"
            // options={CountryData}
            options={[
              { id: "Male", label: "Male" },
              { id: "Female", label: "Female" },
            ]}
            onChange={(e) => {
              handleChange(e), setIdCountryId(e.target.data.id);
            }}
            value={values.PersonalDetails.countryName}
          />
        </div>
        <div className="col-md-6">
          <Dropdown
            placeholder="State"
            id="state.stateName"
            optionLabel="label"
            optionKey="value"
            // options={StateData}
            options={[
              { id: "Male", label: "Male" },
              { id: "Female", label: "Female" },
            ]}
            onChange={(e) => {
              handleChange(e), setIsStateId(e.target.data.id);
            }}
            value={values.PersonalDetails.stateName}
          />
        </div>
        <div className="col-md-6">
          <Dropdown
            placeholder="City"
            id="city"
            optionLabel="label"
            optionKey="value"
            // options={CityData}
            options={[
              { id: "Male", label: "Male" },
              { id: "Female", label: "Female" },
            ]}
            onChange={(e) => {
              handleChange(e);
            }}
            value={values.PersonalDetails}
          />
        </div>

        <div className="col-md-12">
          <FileUpload
            placeholder="Profile photo"
            onChange={(file) => setFieldValue(`profilePicture`, file)}
            id="profilePicture"
            fileType="image"
            acceptType={["png", "jpg", "jpeg"]}
            // label="Upload Profile Image"
            isRequired={true}
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

        <div>Bachelor Degree/UG Details</div>
        <div className="col-md-6">
          <Dropdown
            placeholder="Course"
            // options={DepartmentOption}
            options={[
              { id: "Male", label: "Male" },
              { id: "Female", label: "Female" },
            ]}
            id="PersonalDetails?.bd_course"
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            value={values?.PersonalDetails?.bd_course}
          />
        </div>

        <div className="col-md-6">
          <Dropdown
            placeholder="Department"
            // options={DepartmentOption}
            options={[
              { id: "Male", label: "Male" },
              { id: "Female", label: "Female" },
            ]}
            id="PersonalDetails?.bd_department"
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            value={values?.PersonalDetails?.bd_department}
          />
        </div>

        <div className="col-md-6">
          <Dropdown
            placeholder="University"
            // options={DepartmentOption}
            options={[
              { id: "Male", label: "Male" },
              { id: "Female", label: "Female" },
            ]}
            id="PersonalDetails.bd_university"
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            value={values?.PersonalDetails?.bd_university}
          />
        </div>

        <div className="col-md-6">
          <Dropdown
            placeholder="Institution"
            options={[
              { id: "Male", label: "Male" },
              { id: "Female", label: "Female" },
            ]}
            id="PersonalDetails?.bd_institution"
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            value={values?.PersonalDetails?.bd_institution}
          />
        </div>
        <div className="col-md-6 cmb-22">
          <DatePicker
            placeholder="Year of completion *"
            id="bd_year_of_completion "
            value={values.PersonalDetails.bd_year_of_completion}
            onChange={handleChange}
            error={errors.bd_year_of_completion}
            maxDate={new Date()}
          />
        </div>
            
        <div>
          Current Profession Details (Note: This information will be Referred
          for Your Certification Purpose)
        </div>

        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="Institution/Organization name"
            onChange={handleChange}
            value={values.PersonalDetails.organizationname}
            id="institutionDetails.institutionContactNumber"
          />
        </div>

        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="Department"
            onChange={handleChange}
            value={values.PersonalDetails.departmentname}
            id="institutionDetails.institutionContactNumber"
          />
        </div>

        <div className="col-12">
          <div className="d-flex justify-content-end mt-10">
            <Button
              btnText="Continue"
              className="h-49 w-114"
              onClick={() => {
                handleNext;
                setValCount(1);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsPopUp;
