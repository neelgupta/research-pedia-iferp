import "./Checkmail.scss";
import { Button } from "@/components";
import { icons } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
const Checkmail = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="checkmail-container">
        <div className="checkmail-card">
          <div class="login-logo d-flex justify-content-start align-items-center">
            <div class="img-tag me-3">
              <img
                src={icons.loginicon}
                alt="login-img"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="login-text d-flex justify-content-start align-items-center">
            <h1>Hi, Check Your Mail</h1>
          </div>
          <div className="login-para">
            <p>We have sent a password recover instructions to your email.</p>
          </div>
          <div className="login-btn">
            <Button
              btnText="Login"
              className="wp-100 h-45 br-12 text-18-500"
              onClick={() => navigate("/admin/resetpassword")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkmail;
