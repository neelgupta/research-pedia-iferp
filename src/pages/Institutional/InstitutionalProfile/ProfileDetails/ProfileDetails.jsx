import { Button } from "@/components";
import "./ProfileDetails.scss";

const ProfileDetails = ({ onClick, isUserData }) => {
  const { name, email, phoneNumber, alternatePhoneNumber } = isUserData || {};
  const {
    instituion,
    institutionEmail,
    institutionContactNumber,
    country,
    state,
    city,
    noOfPremiumStudent,
    noOfPremiumProfessional,
    strengthOfpremiumUGStudents,
    strengthOfpremiumPGStudents,
    strengthOfpremiumResearchScholar,
    strengthOfinstitute,
    departmentOfOrganization,
  } = isUserData?.institutionDetails || {};
  return (
    <div className="profile-details-container">
      <div className="professional-top-box">
        <h2 className="details-text">Personal Details</h2>
        <Button btnText="Edit" className="h-43 w-82" onClick={onClick} />
      </div>
      <div className="details-box-main">
        <div className="row row-gap">
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Join As</p>
              <h5 className="details-name">Institutional Member</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Name</p>
              <h5 className="details-name">{name || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Email</p>
              <h5 className="details-name">{email || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Phone Number</p>
              <h5 className="details-name">{phoneNumber || "-"}</h5>
            </div>
          </div>
          <div className="col-12">
            <p className="text-title">Institution Details</p>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Institution</p>
              <h5 className="details-name">{instituion || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Institution email id</p>
              <h5 className="details-name">{institutionEmail || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Institution contact number </p>
              <h5 className="details-name">
                {institutionContactNumber || "-"}
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Country</p>
              <h5 className="details-name">{country || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">State/Province</p>
              <h5 className="details-name">{state || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">City</p>
              <h5 className="details-name">{city || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">
                No. of IFERP premium student members
              </p>
              <h5 className="details-name">{noOfPremiumStudent || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">
                No. of IFERP premium professional members
              </p>
              <h5 className="details-name">{noOfPremiumProfessional || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Strength of premium U.G. students</p>
              <h5 className="details-name">
                {strengthOfpremiumUGStudents || "-"}
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Strength of premium P.G. students</p>
              <h5 className="details-name">
                {strengthOfpremiumPGStudents || "-"}
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">
                Strength of premium research scholars
              </p>
              <h5 className="details-name">
                {strengthOfpremiumResearchScholar || "-"}
              </h5>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Strength Of institution</p>
              <h5 className="details-name">{strengthOfinstitute}</h5>
            </div>
          </div>

          <div className="col-12">
            <div className="details-box">
              <p className="details-label">Departments of your organization</p>
              <h5 className="details-name">
                {departmentOfOrganization || "-"}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="professional-top-box mt-36">
        <h2 className="details-text">Admin Details</h2>
        <Button btnText="Edit" className="h-43 w-82" onClick={onClick} />
      </div>
      <div className="details-box-main ">
        <div className="row row-gap">
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Name</p>
              <h5 className="details-name">{name || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Email</p>
              <h5 className="details-name">{email || "-"}</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Contact Number</p>
              <h5 className="details-name">{phoneNumber || "-"}</h5>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Alternate Contact Number</p>
              <h5 className="details-name">{alternatePhoneNumber || "-"}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
