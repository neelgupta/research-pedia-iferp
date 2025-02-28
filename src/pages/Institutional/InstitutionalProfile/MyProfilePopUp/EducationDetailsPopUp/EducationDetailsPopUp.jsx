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

  const [phonedropdown, setphonedropdown] = useState(
    values.aleternateCountryCode || "+91"
  );

  console.log(phonedropdown, "phonedropdown");

  const handleNext = async () => {
    delete values.role;

    values.aleternateCountryCode = phonedropdown;
    console.log(values, "VALUES 124");
    const result = await dispatch(
      updateInstitutionalMemberDetails(userId, values)
    );
    if (result?.status === 200) {
      setValCount(2);
      fetchUserDetails();
    }
  };

  return (
    <div className="education-details-container">
      <div className="row row-gap-3" >
        <div className="col-12">
          <TextInput
            className="h-45"
            placeholder="Name"
            onChange={handleChange}
            value={values.name}
            id="name"
            disabled="true"
          />
        </div>
        <div className="col-lg-6">
          <TextInput
            className="h-45"
            placeholder="Email"
            onChange={handleChange}
            value={values.email}
            id="email"
            disabled="true"
          />
        </div>
        <div className="col-lg-6 col-12">
          <TextInput
            className="h-45"
            placeholder="Alternate email id"
            onChange={handleChange}
            value={values.alternateEmail}
            id="alternateEmail"
            type="email"
            error={errors.alternateEmail}
          />
        </div>
        <div className="col-lg-6">
          <TextInputwithDropdown
            className="h-45"
            placeholder="Phone Number"
            onChange={handleChange}
            value={values.phoneNumber}
            disabled
            values={values}
            id="phoneNumber"
            dropdownOptions={dialCode.map((item) => ({
              value: "+91" || item.dial_code,

              label: `${values.countryCode ? values.countryCode : item.dial_code} `,
            }))}
            onDropdownChange={(selected) => setphonedropdown(selected)}
          />
        </div>
        <div className="col-md-6">
          <TextInputwithDropdown
            isphone
            id="alternatePhoneNumber"
            name="alternatePhoneNumber"
            className="h-45"
            placeholder="Alternate contact number"
            onChange={(e) =>
              setFieldValue("alternatePhoneNumber", e.target.value)
            }
            value={values.alternatePhoneNumber}
            dropdownOptions={dialCode.map((item) => ({
              value: item.dial_code,
              label: `${item.dial_code} `,
            }))}
            
            onDropdownChange={(selected) => setphonedropdown(selected)}
            maxLength={15}
            type="text"
            alternateval={phonedropdown}
          />
        </div>
        <div className="">
          <div className="col-12 ">
            <div className="d-flex justify-content-end mt-10 gap-3">
              <Button
                btnText="Previous"
                className="h-49 w-114"
                onClick={() => {
                  setValCount(0);
                }}
              />
              <Button
                btnText="Continue"
                className="h-49 w-114"
                onClick={handleNext}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetailsPopUp;
