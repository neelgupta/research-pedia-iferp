import Dropdown from "@/components/inputs/Dropdown";
import "./EducationDetailsPopUp.scss";
import DatePicker from "@/components/inputs/DataPicker";
import TextInput from "@/components/inputs/TextInput";
import TextArea from "@/components/inputs/TextArea";
import Button from "@/components/inputs/Button";
import TextInputwithDropdown from "@/components/inputs/TextInputwithDropdown/TextInputwithDropdown";
import { dialCode } from "@/utils/constants";
import { getDataFromLocalStorage } from "@/utils/helpers";
import { useDispatch } from "react-redux";
import { updateInstitutionalMemberDetails } from "@/store/userSlice/userDetailSlice";
import { useState } from "react";

const EducationDetailsPopUp = ({
  setValCount,
  setFieldValue,
  handleSubmit,
  handleChange,
  errors,
  values,
  fetchUserDetails,
}) => {
  const dispatch = useDispatch();
  const localData = getDataFromLocalStorage();
  const userId = localData.roleId;
  const [phonedropdown, setphonedropdown] = useState("+91");
  const handleNext = async () => {
    delete values.role;
    const result = await dispatch(
      updateInstitutionalMemberDetails(userId, values)
    );
    if (result.status === 200) {
      fetchUserDetails();
      setValCount(2);
    }
  };

  return (
    <div className="education-details-container">
      <div className="row row-gap-3">
        <div className="col-12">
          <TextInput
            className="h-45"
            placeholder="Name"
            onChange={handleChange}
            value={values.name}
            id="name"
          />
        </div>
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="Email"
            onChange={handleChange}
            value={values.email}
            id="email"
          />
        </div>
        <div className="col-md-6">
          <TextInput
            className="h-45"
            placeholder="Alternate email id"
            onChange={handleChange}
            value={values.alternateEmail}
            id="alternateEmail"
          />
        </div>
        <div className="col-md-6">
          <TextInputwithDropdown
            className="h-45"
            placeholder="Phone Number"
            onChange={handleChange}
            value={values.phoneNumber}
            id="phoneNumber"
            dropdownOptions={dialCode.map((item) => ({
              value: "+91" || item.dial_code,
              label: `${item.dial_code}`,
            }))}
            onDropdownChange={(selected) => setphonedropdown(selected)}
          />
        </div>
        <div className="col-md-6">
          <TextInputwithDropdown
            className="h-45"
            placeholder="Alternate contact number"
            onChange={handleChange}
            value={values.alternatePhoneNumber}
            id="alternatePhoneNumber"
            dropdownOptions={dialCode.map((item) => ({
              value: "+91" || item.dial_code,
              label: `${item.dial_code}`,
            }))}
            onDropdownChange={(selected) => setphonedropdown(selected)}
          />
        </div>
        <div className="">
          <div className="col-12 ">
            <div className="d-flex justify-content-end mt-10 gap-3">
              <Button
                btnText="Previous"
                // btnStyle="Lb"
                className="h-49 w-114"
                onClick={() => {
                  setValCount(0);
                }}
              />
              <Button
                btnText="Continue"
                className="h-49 w-114"
                onClick={handleNext}
                // onClick={() => {
                //   setValCount(2);
                // }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetailsPopUp;
