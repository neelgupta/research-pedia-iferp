import Dropdown from "@/components/inputs/Dropdown";
import "./EducationDetailsPopUp.scss";
import DatePicker from "@/components/inputs/DataPicker";
import TextInput from "@/components/inputs/TextInput";
import TextArea from "@/components/inputs/TextArea";
import Button from "@/components/inputs/Button";
import TextInputwithDropdown from "@/components/inputs/TextInputwithDropdown/TextInputwithDropdown";
import { dialCode } from "@/utils/constants";

const EducationDetailsPopUp = ({ setValCount }) => {
  return (
    <div className="education-details-container">
      <div className="row row-gap-3">
        <div className="col-12">
          <TextInput className="h-45" placeholder="Name" />
        </div>
        <div className="col-md-6">
          <TextInput className="h-45" placeholder="Email" />
        </div>
        <div className="col-md-6">
          <TextInput className="h-45" placeholder="Alternate email id" />
        </div>
        <div className="col-md-6">
          <TextInputwithDropdown
            className="h-45"
            placeholder="Phone Number"
            dropdownOptions={dialCode}
          />
        </div>
        <div className="col-md-6">
          <TextInputwithDropdown
            className="h-45"
            placeholder="Alternate contact number"
            dropdownOptions={dialCode}
          />
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
