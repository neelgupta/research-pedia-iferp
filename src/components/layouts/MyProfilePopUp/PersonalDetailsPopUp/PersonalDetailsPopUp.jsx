import React from "react";
import "./PersonalDetailsPopUp.scss";
import TextInput from "@/components/inputs/TextInput";
import DatePicker from "@/components/inputs/DataPicker";
import TextInputwithDropdown from "@/components/inputs/TextInputwithDropdown/TextInputwithDropdown";
import { dialCode } from "@/utils/constants";
import Dropdown from "@/components/inputs/Dropdown";
import FileUpload from "@/components/inputs/FileUpload";
import Button from "@/components/inputs/Button";

const PersonalDetailsPopUp = ({
  setValCount,
  setFieldValue,
  handleSubmit,
  handleChange,
  errors,
  values,
}) => {
  return (
    <div className="personal-details-container">
      <div className="row row-gap-3">
        <div className="col-md-6">
          <TextInput className="h-45" placeholder="Enter your Name" disabled />
        </div>
        <div className="col-md-6">
          <TextInput className="h-45" placeholder="Enter your Email" disabled />
        </div>
        <div className="col-md-6">
          <TextInputwithDropdown
            placeholder="9876543210"
            dropdownOptions={dialCode}
            className="h-45"
            disabled
          />
        </div>
        <div className="col-md-6">
          <DatePicker className="h-45" icon placeholder="Date of birth" />
        </div>
        <div className="col-md-6">
          <Dropdown placeholder="Genders" />
        </div>
        <div className="col-md-6">
          <Dropdown placeholder="Country" />
        </div>
        <div className="col-md-6">
          <Dropdown placeholder="State" />
        </div>
        <div className="col-md-6">
          <Dropdown placeholder="City" />
        </div>
        <div className="col-12">
          <FileUpload placeholder="City" />
        </div>
        <div className="col-12">
          <h6 className="degree-details">Bachelor Degree/UG Details</h6>
        </div>
        <div className="col-md-6">
          <Dropdown placeholder="Course" />
        </div>
        <div className="col-md-6">
          <Dropdown placeholder="Department" />
        </div>
        <div className="col-md-6">
          <Dropdown placeholder="University" />
        </div>
        <div className="col-md-6">
          <Dropdown placeholder="Institution" />
        </div>
        <div className="col-md-6">
          <DatePicker className="h-45" icon placeholder="Year of completion" />
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
          />
        </div>
        <div className="col-md-6">
          <TextInput className="h-45" placeholder="Department" />
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-end mt-10">
            <Button
              btnText="Continue"
              className="h-49 w-114"
              onClick={() => {
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
