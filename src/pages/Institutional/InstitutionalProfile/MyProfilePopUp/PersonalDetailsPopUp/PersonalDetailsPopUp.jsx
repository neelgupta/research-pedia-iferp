import React from "react";
import "./PersonalDetailsPopUp.scss";
import TextInput from "@/components/inputs/TextInput";
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
          <TextInput className="h-45" placeholder="Institution" />
        </div>
        <div className="col-md-6">
          <TextInput className="h-45" placeholder="Institution email id" />
        </div>
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="Institution contact number"
          />
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
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="No. of IFERP premium student members"
          />
        </div>
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="No. of IFERP premium professional members"
          />
        </div>
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="Strength of premium U.G. students"
          />
        </div>
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="Strength of premium P.G. students"
          />
        </div>
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="Strength of premium research scholars"
          />
        </div>
        <div className="col-md-6">
          <TextInput className="h-45" placeholder="Strength of Institution" />
        </div>
        <div className="col-md-6">
          <Dropdown placeholder="Departments of your organization" />
        </div>

        <div className="col-md-6">
          <FileUpload placeholder="Profile photo" />
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
