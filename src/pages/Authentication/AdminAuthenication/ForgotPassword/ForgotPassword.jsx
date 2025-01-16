import { Button, TextInput } from "@/components";
import { Formik } from "formik";
import "./ForgotPassword.scss";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { forgotpasswordsendemail } from "@/store/globalSlice";
import { icons } from "@/utils/constants";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const res = await dispatch(forgotpasswordsendemail(values));
  };

  return (
    <>
      <div id="forgotpassword-container">
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

          <div className="login-text d-flex justify-content-between align-items-center text-center">
            <h1 className="">Forgot Password</h1>
            <span className="mt-26" onClick={() => navigate("/admin/login")}>
              Back to Login
            </span>
          </div>

          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {(props) => {
              const {
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                isSubmitting,
              } = props;

              return (
                <form
                  onSubmit={handleSubmit}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSubmit();
                    }
                  }}
                >
                  <div className="mb-24">
                    <TextInput
                      id="email"
                      name="email"
                      label="Email Address"
                      labelClass="pb-10"
                      value={values.email}
                      onChange={handleChange}
                      error={touched.email && errors.email}
                      placeholder="Email Address"
                      type="text"
                    />
                  </div>
                  <div className="form-text mt-">
                    <p className="mb-8">Do not forgot to check SPAM box.</p>
                  </div>
                  <div className="login-btn mt-20">
                    <Button
                      btnText="Send Password Reset Email"
                      className="wp-100 h-45  br-12 text-18-500"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    />
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
