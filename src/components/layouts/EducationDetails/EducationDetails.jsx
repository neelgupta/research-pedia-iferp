import Button from "@/components/inputs/Button";
import "./EducationDetails.scss";
const EducationDetails = () => {
  return (
    <div className="education-container">
      <div className="education-top-box">
        <h2 className="education-text">Education Details</h2>
        <Button btnText="Edit" className="h-43 w-82" />
      </div>
      <div className="education-box-main">
        <div className="row row-gap">
          <div className="col-12">
            <p className="education-title">Master Degree/PG Details</p>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">Course</p>
              <h5 className="education-name">BSc</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">Department</p>
              <h5 className="education-name">Accountancy</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">University </p>
              <h5 className="education-name">
                University of Petroleum and Energy Studies
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">Institution </p>
              <h5 className="education-name">
                Parvathaneni Brahmayya Siddhartha college of Arts & Science
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">Year of completion</p>
              <h5 className="education-name">2024-10-29</h5>
            </div>
          </div>
          <div className="col-12">
            <p className="education-title">Doctorate/Ph.D Programme Details</p>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">Institution </p>
              <h5 className="education-name">
                Parvathaneni Brahmayya Siddhartha college of Arts & Science
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">Department</p>
              <h5 className="education-name">Accountancy</h5>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">Year of completion</p>
              <h5 className="education-name">2024-10-29</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">University </p>
              <h5 className="education-name">
                University of Petroleum and Energy Studies
              </h5>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">Course</p>
              <h5 className="education-name">BSc</h5>
            </div>
          </div>

          <div className="col-12">
            <p className="education-title">Research Interests</p>
          </div>

          <div className="col-lg-6">
            <div className="details-box">
              <p className="education-label">Area of interest</p>
              <h5 className="education-name">Economic Growth</h5>
            </div>
          </div>
          <div className="col-12">
            <div className="details-box">
              <p className="education-label">Comment</p>
              <h5 className="education-name">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetails;
