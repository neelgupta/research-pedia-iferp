import Dropdown from "@/components/inputs/Dropdown";
import "./EducationDetailsPopUp.scss";
import DatePicker from "@/components/inputs/DataPicker";
import TextInput from "@/components/inputs/TextInput";
import TextArea from "@/components/inputs/TextArea";
import Button from "@/components/inputs/Button";

import { dialCode } from "@/utils/constants";
import { getDataFromLocalStorage } from "@/utils/helpers";
import { useDispatch } from "react-redux";
import { updateInstitutionalMemberDetails } from "@/store/userSlice/userDetailSlice";
import TextInputwithDropdown from "@/components/inputs/TextInputwithDropdown/TextInputwithDropdown";
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
 const [phonedropdown, setphonedropdown] = useState("+91");
  return (
    <div className="education-details-container">
      <div className="row row-gap-3">
      <div>
      Master Degree/PG Details
        </div>
        <div className="col-md-6">
          <Dropdown
            placeholder="Course"
            // options={DepartmentOption}
            options={[
              { id: "Male", label: "Male" },
              { id: "Female", label: "Female" },
            ]}
            id="eductiondetails.bd_course"
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            value={values?.eductiondetails?.bd_course}
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
            id="eductiondetails.bd_department"
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            value={values?.eductiondetails?.bd_department}
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
            id="eductiondetails.bd_university"
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            value={values?.eductiondetails?.bd_university}
          />
        </div>

        <div className="col-md-6">
          <Dropdown
            placeholder="Institution"
            // options={DepartmentOption}
            options={[
              { id: "Male", label: "Male" },
              { id: "Female", label: "Female" },
            ]}
            id="eductiondetails.bd_institution"
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            value={values?.eductiondetails?.bd_institution}
          />
        </div>
        <div className="col-md-6 cmb-22">
              <DatePicker
                placeholder="Year of completion *"
                id="bd_year_of_completion "
                value={values.eductiondetails.bd_year_of_completion}
                onChange={handleChange}
                error={errors.year_of_completion}
                maxDate={new Date()}
              />
        </div>
        

        <div>
            Doctorate/Ph.D Programme Details
        </div>
        <div className="col-md-6">
          <Dropdown
            placeholder="Course"
            // options={DepartmentOption}
            options={[
              { id: "Male", label: "Male" },
              { id: "Female", label: "Female" },
            ]}
            id="eductiondetails.phd_course"
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            value={values?.eductiondetails?.phd_course}
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
            id="eductiondetails.phd_department"
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            value={values?.eductiondetails?.phd_department}
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
            id="eductiondetails.phd_university"
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            value={values?.eductiondetails?.phd_university}
          />
        </div>

        <div className="col-md-6">
          <Dropdown
            placeholder="Institution"
            // options={DepartmentOption}
            options={[
              { id: "Male", label: "Male" },
              { id: "Female", label: "Female" },
            ]}
            id="eductiondetails.phd_institution"
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            value={values?.eductiondetails?.phd_institution}
          />
        </div>
        <div className="col-md-6 cmb-22">
              <DatePicker
                placeholder="Year of completion *"
                id="phd_year_of_completion "
                value={values.eductiondetails.phd_year_of_completion}
                onChange={handleChange}
                error={errors.phd_year_of_completion}
                maxDate={new Date()}
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
                handleNext
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
