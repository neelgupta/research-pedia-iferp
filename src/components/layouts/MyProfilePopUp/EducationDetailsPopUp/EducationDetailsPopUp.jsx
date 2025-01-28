import Dropdown from "@/components/inputs/Dropdown";
import "./EducationDetailsPopUp.scss";
import DatePicker from "@/components/inputs/DataPicker";
import TextInput from "@/components/inputs/TextInput";
import TextArea from "@/components/inputs/TextArea";
import Button from "@/components/inputs/Button";
import {
  getCourse,
  updateProfessionalMemberDetails,
  updateStudentMemberDetails,
} from "@/store/userSlice/userDetailSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDataFromLocalStorage } from "@/utils/helpers";

const EducationDetailsPopUp = ({
  setValCount,
  values,
  handleChange,
  departmentOptions,
  UniverisityOptions,
  institutetOptions,
  fetchData,
  isStudent,
}) => {
  const dispatch = useDispatch();
  const localData = getDataFromLocalStorage();

  const [pgCourse, setPgcourse] = useState([]);
  const [phdCourse, setPhdCourse] = useState([]);

  const fetchPgCourse = async () => {
    const result = await dispatch(getCourse("pg"));
    setPgcourse(result.data.response);
  };
  const fetchPhdCourse = async () => {
    const result = await dispatch(getCourse("phd"));
    setPhdCourse(result.data.response);
  };

  const pgCourseOptions = pgCourse.map((pgCourse) => ({
    id: pgCourse.id,
    label: pgCourse.name,
    value: pgCourse.name,
  }));

  const phdCourseOptions = phdCourse.map((phdCourse) => ({
    id: phdCourse.id,
    label: phdCourse.name,
    value: phdCourse.name,
  }));
  const handleNext = async () => {
    delete values.role;

    const updateAction = isStudent
      ? updateStudentMemberDetails(localData.roleId, values)
      : updateProfessionalMemberDetails(localData.roleId, values);

    const result = await dispatch(updateAction);

    if (result.status === 200) {
      setValCount(2);
      fetchData();
    }
  };

  useEffect(() => {
    fetchPgCourse();
    fetchPhdCourse();
  }, []);

  return (
    <div className="education-details-container">
      <div className="row row-gap-3">
        <div className="col-12">
          <h6 className="degree-details">Master Degree/PG Details</h6>
        </div>
        <div className="col-md-6">
          <Dropdown
            placeholder="Course"
            id="educationDetails.masterDegreeOrPgDetails.course"
            value={values.educationDetails.masterDegreeOrPgDetails.course}
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            options={pgCourseOptions}
          />
        </div>
        <div className="col-md-6">
          <Dropdown
            placeholder="Department"
            id="educationDetails.masterDegreeOrPgDetails.department"
            value={values.educationDetails.masterDegreeOrPgDetails.department}
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            options={departmentOptions}
          />
        </div>
        <div className="col-md-6">
          <Dropdown
            placeholder="University"
            id="educationDetails.masterDegreeOrPgDetails.university"
            value={values.educationDetails.masterDegreeOrPgDetails.university}
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            options={UniverisityOptions}
          />
        </div>
        <div className="col-md-6">
          <Dropdown
            placeholder="Institution"
            id="educationDetails.masterDegreeOrPgDetails.institution"
            value={values.educationDetails.masterDegreeOrPgDetails.institution}
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            options={institutetOptions}
          />
        </div>
        <div className="col-md-6">
          <DatePicker
            id="educationDetails.masterDegreeOrPgDetails.yearOfCompletion"
            value={
              values.educationDetails.masterDegreeOrPgDetails.yearOfCompletion
            }
            className="h-45"
            icon
            placeholder="Year of completion"
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <h6 className="degree-details">Doctorate/Ph.D Programme Details</h6>
        </div>
        <div className="col-md-6">
          <Dropdown
            placeholder="Course"
            id="educationDetails.doctorateOrPhdDetails.course"
            value={values.educationDetails.doctorateOrPhdDetails.course}
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            options={phdCourseOptions}
          />
        </div>
        <div className="col-md-6">
          <Dropdown
            placeholder="Department"
            id="educationDetails.doctorateOrPhdDetails.department"
            value={values.educationDetails.doctorateOrPhdDetails.department}
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            options={departmentOptions}
          />
        </div>
        <div className="col-md-6">
          <Dropdown
            placeholder="University"
            id="educationDetails.doctorateOrPhdDetails.university"
            value={values.educationDetails.doctorateOrPhdDetails.university}
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            options={UniverisityOptions}
          />
        </div>
        <div className="col-md-6">
          <Dropdown
            placeholder="Institution"
            id="educationDetails.doctorateOrPhdDetails.institution"
            value={values.educationDetails.doctorateOrPhdDetails.institution}
            optionLabel="label"
            optionKey="value"
            onChange={(e) => {
              handleChange(e);
            }}
            options={institutetOptions}
          />
        </div>
        <div className="col-md-6">
          <DatePicker
            className="h-45"
            icon
            placeholder="Year of completion"
            id="educationDetails.doctorateOrPhdDetails.yearOfCompletion"
            value={
              values.educationDetails.doctorateOrPhdDetails.yearOfCompletion
            }
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <h6 className="degree-details">Research Interests</h6>
        </div>
        <div className="col-12">
          <TextInput
            id="researchDetails.researchIntrest.areaOfIntrest"
            onChange={handleChange}
            value={values.researchDetails.researchIntrest.areaOfIntrest}
            className="h-45"
            placeholder="Area of interest"
          />
        </div>
        <div className="col-12">
          <TextArea
            id="researchDetails.researchIntrest.comments"
            onChange={handleChange}
            value={values.researchDetails.researchIntrest.comments}
            className="h-45"
            placeholder="Comments if any"
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
              btnText="Skip"
              btnStyle="LBA"
              className="h-49 w-114"
              onClick={() => {
                setValCount(2);
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
  );
};

export default EducationDetailsPopUp;
