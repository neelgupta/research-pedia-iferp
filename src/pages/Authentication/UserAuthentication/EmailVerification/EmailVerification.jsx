import { Button, TextInput } from "@/components";
import { Formik } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import React, { useState } from "react";
import LeftsideContainer from "../LeftsideContainer";
import "./EmailVerification.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  handleForgetPassword,
  handleVerifyCode,
} from "@/store/userSlice/userDetailSlice";


const EmailVerification = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEmail, setIsEmail] = useState();
  const initialValues = {
    email: "",
    otp: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    // otp: Yup.string()
    //   .length(4, "OTP must be 4 digits")
    //   .matches(/^\d{4}$/, "OTP must be 4 digits")
    //   .required("OTP is required"),
  });

  const handleSubmit = async (values) => {
    if (!isEmail) {
      const email = values.email;
      const result = await dispatch(handleForgetPassword({ email }));
      console.log(result, "FORGET PASSS");
      if (result?.status === 200) {
        setIsEmail(true);
      }
    } else {
      const verifyUser = {
        email: values.email,
        verificationCode: values.otp,
      };
      const result = await dispatch(handleVerifyCode(verifyUser));
      if (result?.status === 200) {
        navigate("/reset-password", { state: { email: values.email } });
      }
    }
  };

  const handleOTPChange = (e, index, otp, setFieldValue) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      // Update the OTP string by replacing the character at the specified index
      const updatedOtp =
        otp.substring(0, index) + value + otp.substring(index + 1);
      setFieldValue("otp", updatedOtp);

      if (index < otp.length - 1 && value) {
        // Focus next input after entering a digit
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index, otp, setFieldValue) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // Move focus to previous input when backspace is pressed
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  return (
    <div id="emailverification-container">
      <div className="row">
        <div className="col-6 d-none d-lg-block">
          <LeftsideContainer />
        </div>
        <div className="col-lg-6 col-12">
          <div
            className="d-flex justify-content-center align-items-center "
            style={{ minHeight: "100vh" }}
          >
            <div className="usersignin-container">
              <div className="form-header mb-32">
                <h1>Email Verification</h1>
              </div>
              <div className="form">
                <Formik
                  enableReinitialize
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {(props) => {
                    const {
                      values,
                      handleChange,
                      handleSubmit,
                      setFieldValue,
                      errors,
                      touched,
                      isSubmitting,
                    } = props;

                    return (
                      <>
                        {console.log(errors, "ERRORS")}
                        <form
                          onSubmit={handleSubmit}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleSubmit();
                            }
                          }}
                        >
                          {/* Email Input */}
                          <div className="mb-24">
                            <TextInput
                              id="email"
                              name="email"
                              label="Email"
                              labelClass="pb-10"
                              value={values.email}
                              onChange={handleChange}
                              error={touched.email && errors.email}
                              placeholder="Enter your email"
                              type="email"
                            />
                          </div>

                          {isEmail && (
                            <>
                              {/* OTP Input */}
                              <div className="otp-veri d-flex align-items-center justify-content-between">
                                <div className="d-flex gap-2">
                                  {[0, 1, 2, 3].map((index) => (
                                    <input
                                      key={index}
                                      id={`otp-input-${index}`}
                                      type="text"
                                      maxLength="1"
                                      value={values.otp[index] || ""}
                                      onChange={(e) =>
                                        handleOTPChange(
                                          e,
                                          index,
                                          values.otp,
                                          setFieldValue
                                        )
                                      }
                                      onKeyDown={(e) =>
                                        handleKeyDown(
                                          e,
                                          index,
                                          values.otp,
                                          setFieldValue
                                        )
                                      }
                                      className="text-otp w-45 h-45 border text-center"
                                      style={{ borderRadius: "6px" }}
                                    />
                                  ))}
                                </div>
                                <div>
                                  <p className="text-14-500 color-113D">
                                    Resend OTP
                                  </p>
                                </div>
                              </div>
                              {touched.otp && errors.otp && (
                                <p className="text-danger">{errors.otp}</p>
                              )}
                            </>
                          )}

                          {/* Submit Button */}
                          <div className="login-btn mt-20">
                            <Button
                              btnText="Verify Email"
                              className="h-45 br-12 text-18-500"
                              onClick={handleSubmit}
                              // disabled={isSubmitting}
                            />
                          </div>

                          {/* Back to Login */}
                          <div className="mt-18 nevi-login">
                            <p className="text-center mt-8 text-16-400 color-3333">
                              Go back to{" "}
                              <span
                                className="back-login color-113D"
                                onClick={() => {
                                  navigate("/login");
                                }}
                              >
                                Login
                              </span>
                            </p>
                          </div>
                        </form>
                      </>
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

export default EmailVerification;
