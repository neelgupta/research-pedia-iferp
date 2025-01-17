import Dropdown from "@/components/inputs/Dropdown";
import "./EducationDetailsPopUp.scss";
import DatePicker from "@/components/inputs/DataPicker";
import TextInput from "@/components/inputs/TextInput";
import TextArea from "@/components/inputs/TextArea";
import Button from "@/components/inputs/Button";

const EducationDetailsPopUp = ({ setValCount }) => {
  return (
    <div className="education-details-container">
      <div className="row row-gap-3">
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
          <h6 className="degree-details">Doctorate/Ph.D Programme Details</h6>
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
          <h6 className="degree-details">Research Interests</h6>
        </div>
        <div className="col-12">
          <TextInput className="h-45" placeholder="Area of interest" />
        </div>
        <div className="col-12">
          <TextArea className="h-45" placeholder="Comments if any" />
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-end mt-10 gap-3">
            <Button
              btnText="Previous"
              btnStyle="Lb"
              className="h-49 w-114"
              onClick={() => {
                setValCount(0);
              }}
            />
            <Button
              btnText="Skip"
              btnStyle="LBB"
              className="h-49 w-114"
              onClick={() => {
                setValCount(2);
              }}
            />
            <Button
              btnText="Continue"
              className="h-49 w-114"
              onClick={() => {
                setValCount(2);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetailsPopUp;
