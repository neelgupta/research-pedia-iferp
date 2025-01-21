import Button from "@/components/inputs/Button";
import "./PersonalDetails.scss";
import moment from "moment";

const PersonalDetails = ({ onClick, isUserData, role }) => {
  const {
    name,
    email,
    phoneNumber,
    gender,
    dateOfbirth: dob,
    country,
    state,
  } = isUserData || {};

  const { city } = isUserData?.personalDetails || {};

  const { course, department, institution, university, yearOfCompletion } =
    isUserData?.personalDetails?.bacheloerDegreeOrUgDetails || {};

  const { department: currDepartment, insOrOrganizationName } =
    isUserData?.personalDetails?.currentProffessionDetails || {};

  return (
    <div className="details-container">
      <div className="professional-top-box">
        <h2 className="details-text">Personal Details</h2>
        <Button btnText="Edit" className="h-43 w-82" onClick={onClick} />
      </div>
      <div className="detail-box-main">
        <div className="row row-gap mt-16">
          <div className="col-lg-6">
            <div className="detail-box-a">
              <p className="details-label">Join As</p>
              <h5 className="details-name">
                {role === "professional"
                  ? "Professional Member"
                  : "Student Member"}{" "}
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="detail-box-a">
              <p className="details-label">Name</p>
              <h5 className="details-name">{name || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="detail-box-a">
              <p className="details-label">Email</p>
              <h5 className="details-name">{email || "-"} </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="detail-box-a">
              <p className="details-label">Phone Number</p>
              <h5 className="details-name">{phoneNumber || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="detail-box-a">
              <p className="details-label">Gender</p>
              <h5 className="details-name text-capitalize">{gender || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="detail-box-a">
              <p className="details-label">Date of birth</p>
              <h5 className="details-name">
                {moment(dob).format("DD MMM, YYYY") || "-"}
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="detail-box-a">
              <p className="details-label">Country </p>
              <h5 className="details-name">{country?.countryName || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="detail-box-a">
              <p className="details-label">State/Province</p>
              <h5 className="details-name">{state?.stateName || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="detail-box-a">
              <p className="details-label">City</p>
              <h5 className="details-name">{city || "-"}</h5>
            </div>
          </div>
          <div className="col-12">
            <p className="text-title">Bachelor Degree/UG Details</p>
          </div>
          <div className="col-lg-6">
            <div className="detail-box-a">
              <p className="details-label">Course</p>
              <h5 className="details-name">{course || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="detail-box-a">
              <p className="details-label">Department</p>
              <h5 className="details-name">{department || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="detail-box-a">
              <p className="details-label">University </p>
              <h5 className="details-name">{university || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="detail-box-a">
              <p className="details-label">Institution</p>
              <h5 className="details-name">{institution || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="detail-box-a">
              <p className="details-label">Year of completion</p>
              <h5 className="details-name">{yearOfCompletion || "-"}</h5>
            </div>
          </div>
          <div className="col-12">
            <p className="text-title">Current Profession Details</p>
          </div>
          <div className="col-lg-6">
            <div className="detail-box-a">
              <p className="details-label">Institution/Organization name</p>
              <h5 className="details-name">{insOrOrganizationName || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="detail-box-a">
              <p className="details-label">Department</p>
              <h5 className="details-name">{currDepartment || "-"}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
