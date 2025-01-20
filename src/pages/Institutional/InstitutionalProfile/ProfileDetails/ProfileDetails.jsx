import { Button } from "@/components";
import "./ProfileDetails.scss";

const ProfileDetails = ({ onClick }) => {
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
          <div className="col-12">
            <p className="text-title">Institution Details</p>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Institution</p>
              <h5 className="details-name">BSc</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Institution email id</p>
              <h5 className="details-name">Institution123@gmail.com</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Institution contact number </p>
              <h5 className="details-name">+91 9876543210</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Country</p>
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
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">
                No. of IFERP premium student members
              </p>
              <h5 className="details-name">100</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">
                No. of IFERP premium professional members
              </p>
              <h5 className="details-name">120</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Strength of premium U.G. students</p>
              <h5 className="details-name">120</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Strength of premium P.G. students</p>
              <h5 className="details-name">120</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">
                Strength of premium research scholars
              </p>
              <h5 className="details-name">Canillo</h5>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">City</p>
              <h5 className="details-name">120</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Strength of Institution</p>
              <h5 className="details-name">120</h5>
            </div>
          </div>
          <div className="col-12">
            <div className="details-box">
              <p className="details-label">Departments of your organization</p>
              <h5 className="details-name">
                Digital Filmmaking, Accountancy, Actuarial Science
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
              <p className="details-label">Contact Number</p>
              <h5 className="details-name">+91 9876543210</h5>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="details-box">
              <p className="details-label">Alternate Contact Number</p>
              <h5 className="details-name">+91 9876543210</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
