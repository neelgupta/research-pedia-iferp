import React from "react";
import "./PersonalDetailsPopUp.scss";
import TextInput from "@/components/inputs/TextInput";
import DatePicker from "@/components/inputs/DataPicker";

const PersonalDetailsPopUp = () => {
  return (
    <div className="personal-details-container">
      <div className="row">
        <div className="col-md-6">
          <TextInput className="h-45" placeholder="Enter your Name" disabled />
        </div>
        <div className="col-md-6">
          <TextInput className="h-45" placeholder="Enter your Email" disabled />
        </div>
        <div className="col-md-6">
          <TextInput className="h-45" placeholder="Enter your Email" disabled />
        </div>
        <div className="col-md-6">
          <DatePicker className="h-45" />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsPopUp;
