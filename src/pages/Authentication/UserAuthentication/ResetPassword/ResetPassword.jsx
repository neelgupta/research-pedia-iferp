import { Button, PasswordInput } from "@/components";
import { Formik } from "formik";
import React, { useState } from "react";
import LeftsideContainer from "../LeftsideContainer";
import "./ResetPassword.scss";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleResetPassword } from "@/store/userSlice/userDetailSlice";
const UserResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [loading, setlodding] = useState(false);
  const initialValues = {
    password: "",
    ConfirmPassword: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("Password is required"),

    ConfirmPassword: Yup.string()
      .required("Password confirmation is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const handleSubmit = async (values) => {
    setlodding(true);
    const resetPassword = {
      email: location.state.email,
      password: values.password,
    };
    const result = await dispatch(handleResetPassword(resetPassword));

    if (result.status === 200) {
      navigate("/login");
      setlodding(false);
    }
    setlodding(false);
  };

  return (
    <div id="userresetpassword-container">
      <div className="row">
        <div className="col-6  d-none d-lg-block ">
          <LeftsideContainer />
        </div>
        <div className="col-lg-6 col-12 ">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="usersignin-container ">
              <div className="form-header mb-32">
                <h1>Reset Password</h1>
              </div>
              <div className="form">
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
                        <div>
                          <PasswordInput
                            id="password"
                            name="password"
                            label="Password"
                            labelClass="pb-9"
                            value={values.password}
                            onChange={handleChange}
                            error={touched.password && errors.password}
                            placeholder="Enter password"
                          />
                        </div>
                        <div>
                          <PasswordInput
                            id="ConfirmPassword"
                            name="ConfirmPassword"
                            label="Confirm Password"
                            labelClass="pb-9"
                            value={values.ConfirmPassword}
                            onChange={handleChange}
                            error={
                              touched.ConfirmPassword && errors.ConfirmPassword
                            }
                            placeholder="Enter confirm password"
                          />
                        </div>

                        <div className="login-btn mt-20">
                          <Button
                            btnText="Save"
                            className=" h-45  br-12 text-18-500"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            loading={loading}
                          />
                        </div>
                        <div className="mt-18 nav-login">
                          <p className="text-center mt-8 text-16-400 color-3333">
                            Go to back{" "}
                            <span
                              className="color-113D login"
                              onClick={() => {
                                navigate("/login");
                              }}
                            >
                              Login
                            </span>
                          </p>
                        </div>
                      </form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserResetPassword;
