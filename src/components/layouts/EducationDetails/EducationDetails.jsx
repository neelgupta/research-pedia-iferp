import Button from "@/components/inputs/Button";
import "./EducationDetails.scss";
import moment from "moment";
const EducationDetails = ({ onClick, educationDetails, researchDetails }) => {

  const { course, department, institution, university, yearOfCompletion } =
    educationDetails?.masterDegreeOrPgDetails || {};

  const {
    course: dpCourse,
    department: dpDepartment,
    institution: dpInstitute,
    university: dpUniversity,
    yearOfCompletion: dpyearOfCompletion,
  } = educationDetails?.doctorateOrPhdDetails || {};

  const { areaOfIntrest, comments } = researchDetails?.researchIntrest || {};

  return (
    <div className="education-container">
      <div className="education-top-box">
        <h2 className="education-text">Education Details</h2>
        <Button btnText="Edit" className="h-43 w-82" onClick={onClick} />
      </div>
      <div className="education-box-main">
        <div className="row row-gap">
          <div className="col-12">
            <p className="education-title">Master Degree/PG Details</p>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">Course</p>
              <h5 className="education-name">{course || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">Department</p>
              <h5 className="education-name">{department || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">University </p>
              <h5 className="education-name">{university || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">Institution </p>
              <h5 className="education-name">{institution || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">Year of completion</p>
              <h5 className="education-name">
                {moment(yearOfCompletion).format("YYYY") || "-"}
              </h5>
            </div>
          </div>
          <div className="col-12">
            <p className="education-title">Doctorate/Ph.D Programme Details</p>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">Institution </p>
              <h5 className="education-name">{dpInstitute || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">Department</p>
              <h5 className="education-name">{dpDepartment || "-"}</h5>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">Year of completion</p>
              <h5 className="education-name">
                {moment(dpyearOfCompletion).format("YYYY") || "-"}
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">University </p>
              <h5 className="education-name">{dpUniversity || "-"}</h5>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">Course</p>
              <h5 className="education-name">{dpCourse || "-"}</h5>
            </div>
          </div>

          <div className="col-12">
            <p className="education-title">Research Interests</p>
          </div>

          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">Area of interest</p>
              <h5 className="education-name">{areaOfIntrest || "-"}</h5>
            </div>
          </div>
          <div className="col-12">
            <div className="details-box">
              <p className="education-label">Comment</p>
              <h5 className="education-name">{comments || "-"}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetails;
