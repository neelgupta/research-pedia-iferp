import Button from "@/components/inputs/Button";
import "./PersonalDetails.scss";

const PersonalDetails = ({ onClick }) => {
  return (
    <div className="details-container">
      <div className="professional-top-box">
        <h2 className="details-text">Personal Details</h2>
        <Button btnText="Edit" className="h-43 w-82" onClick={onClick} />
      </div>
      <div className="details-box-main">
        <div className="row row-gap">
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Join As</p>
              <h5 className="details-name">Student Member</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Name</p>
              <h5 className="details-name">Mary Jane</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Email</p>
              <h5 className="details-name">maryjane123@gmail.com</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Phone Number</p>
              <h5 className="details-name">+91 9876543210</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Gender</p>
              <h5 className="details-name">Male</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Date of birth</p>
              <h5 className="details-name">12 Jun, 2001</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Country </p>
              <h5 className="details-name">Andorra</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">State/Province</p>
              <h5 className="details-name">Canillo</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">City</p>
              <h5 className="details-name">Canillo</h5>
            </div>
          </div>
          <div className="col-12">
            <p className="text-title">Bachelor Degree/UG Details</p>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Course</p>
              <h5 className="details-name">BSc</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Department</p>
              <h5 className="details-name">Accountancy</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">University </p>
              <h5 className="details-name">
                University of Petroleum and Energy Studies
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Institution</p>
              <h5 className="details-name">
                Parvathaneni Brahmayya Siddhartha college of Arts & Science
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Year of completion</p>
              <h5 className="details-name">2024-10-29</h5>
            </div>
          </div>
          <div className="col-12">
            <p className="text-title">Current Profession Details</p>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Institution/Organization name</p>
              <h5 className="details-name">BSc</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Department</p>
              <h5 className="details-name">Accountancy</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
