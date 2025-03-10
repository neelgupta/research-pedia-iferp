import React, { useState } from "react";
import LeftsideContainer from "../LeftsideContainer";
import { Field, Formik } from "formik";
import { Button, Dropdown, PasswordInput, TextInput } from "@/components";
import "./Signup.scss";
import PhoneInput from "react-phone-input-2";
import TextInputwithDropdown from "@/components/inputs/TextInputwithDropdown/TextInputwithDropdown";
import { dialCode, icons } from "@/utils/constants";
import * as Yup from "yup"; // Import Yup for validation
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  handleGoogleLogin,
  handleUserSignUp,
} from "@/store/userSlice/authSlice";
import { storeLocalStorageData } from "@/utils/helpers";
import { getProjectByTopics } from "@/store/userSlice/projectSlice";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

// Define the validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/, "Invalid Email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  name: Yup.string().required("Name is required"),
  // phoneNumber: Yup.number().required("Phone number is required"),
  phoneNumber: Yup.string()
    .matches(/^\d+$/, "Phone number should be in numbers only")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number can't be more than 15 digits")
    .required("Phone number is required"),
  role: Yup.string().required("Please select a membership type"),
});

const UserSignup = () => {
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [isOffersChecked, setIsOffersChecked] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePrivacyChange = (e) => {
    setIsPrivacyChecked(e.target.checked);
  };

  const handleOffersChange = (e) => {
    setIsOffersChecked(e.target.checked);
  };

  const isFormValid = isPrivacyChecked;
  const [namedropdown, setnamedropdown] = useState("Dr.");
  const [phonedropdown, setphonedropdown] = useState("+91");
  const [Signloading, setlodding] = useState(false);
  const initialValues = {
    email: "",
    password: "",
    role: "",
    phoneNumber: "",
    namePrefix: "",
    name: "",
    countryCode: "",
  };

  const fetchProject = async () => {
    const result = await dispatch(getProjectByTopics());

    const isProjectAvailable = result?.data?.response?.some(
      (item) => item._userId === localData.id
    );

    return isProjectAvailable;
  };

  const handleSubmit = async (values) => {
    setlodding(true);

    const Name = values.name;
    const Phone = values.phoneNumber;

    const finalvalue = {
      ...values,
      name: Name,
      phoneNumber: Phone,
      namePrefix: namedropdown,
      countryCode: phonedropdown,
      role: values.role,
    };
    try {
      console.log(finalvalue, "final values");
      const result = await dispatch(handleUserSignUp(finalvalue));
      console.log("Signup Response:", result);

      if (result?.status === 200) {
        console.log("hello");

        storeLocalStorageData({
          ...result?.data.response,
          token: result.data.response.token,
        });
        const isProjectAvailable = await fetchProject();
        if (isProjectAvailable) {
          navigate("/feed-details");
        } else if (!isProjectAvailable) {
          navigate("/my-feed");
        }
      }
    } catch (error) {
      console.error("Signup Error:", error);
    } finally {
      setlodding(false);
    }
  };

  const handleGoogleLoginSuccess = async (response) => {
    const credential = response.credential;

    try {
      const result = await dispatch(
        handleGoogleLogin({ credential: credential })
      );
      if (result?.status === 200) {
        storeLocalStorageData({
          ...result?.data.response,
          token: result.data.response.token,
        });

        const isProjectAvailable = await fetchProject();

        if (isProjectAvailable) {
          navigate("/feed-details");
        } else if (!isProjectAvailable) {
          navigate("/my-feed");
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google Login Failed", error);
  };

  return (
    <div id="usersignup-container">
      <div className="row">
        <div className="col-6 d-none d-lg-block">
          <LeftsideContainer />
        </div>
        <div className="col-lg-6 col-12">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="usersignin-container">
              <div className="form-header mb-14">
                <h1>Sign Up</h1>
                <p className="mt-8">Stay updated on your professional world</p>
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
                      errors,
                      touched,
                      isSubmitting,
                      setFieldValue,
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
                        {/* Membership Type Dropdown */}
                        <div className="">
                          <Dropdown
                            id="role"
                            label="Join As"
                            placeholder="Select"
                            name="role"
                            value={values.role}
                            onChange={(e) =>
                              setFieldValue("role", e.target.value)
                            }
                            onlyone
                            options={[
                              {
                                id: "professional",
                                label: (
                                  <div>
                                    <p className="text-14-400 color-3333">
                                      Professional Member
                                    </p>
                                    <span className="text-12-400 color-6B74">
                                      Academicians, Researchers, Corporate
                                      Individuals
                                    </span>
                                  </div>
                                ),
                              },
                              {
                                id: "student",
                                label: (
                                  <div>
                                    <p className="text-14-400 color-3333">
                                      Student Member
                                    </p>
                                    <span className="text-12-400 color-6B74">
                                      UG, PG Students
                                    </span>
                                  </div>
                                ),
                              },
                              {
                                id: "institutional",
                                label: (
                                  <div>
                                    <p className="text-14-400 color-3333">
                                      Institutional Member
                                    </p>
                                    <span className="text-12-400 color-6B74">
                                      Universities / Colleges / Institutions
                                    </span>
                                  </div>
                                ),
                              },
                            ]}
                            error={touched.role && errors.role}
                            labelClass="pb-9"
                          />
                        </div>

                        {/* Name Field with Dropdown */}
                        <div className="mt-16">
                          <TextInputwithDropdown
                            isname
                            id="name"
                            name="name"
                            label="Name"
                            labelClass="pb-8"
                            value={values.name}
                            onChange={(e) =>
                              setFieldValue("name", e.target.value)
                            }
                            placeholder="Enter name"
                            dropdownOptions={[
                              { value: "Dr.", label: "Dr." },
                              { value: "Prof.", label: "Prof." },
                              { value: "Mr.", label: "Mr." },
                              { value: "Mrs.", label: "Mrs." },
                              { value: "Ms.", label: "Ms." },
                            ]}
                            onDropdownChange={(selected) =>
                              setnamedropdown(selected)
                            }
                            error={touched.name && errors.name}
                          />
                        </div>

                        {/* Email Field */}
                        <div className="mt-16">
                          <TextInput
                            id="email"
                            name="email"
                            label="Email"
                            labelClass="pb-10"
                            value={values.email}
                            onChange={handleChange}
                            error={touched.email && errors.email}
                            placeholder="Email"
                            type="email"
                          />
                        </div>

                        {/* Phone Number Field with Dropdown */}
                        <div className="mt-16">
                          <TextInputwithDropdown
                            isphone
                            id="phoneNumber"
                            name="phoneNumber"
                            label="Phone Number"
                            labelClass="pb-8"
                            value={values.phoneNumber}
                            onChange={(e) =>
                              setFieldValue("phoneNumber", e.target.value)
                            }
                            placeholder="Enter phone number"
                            dropdownOptions={dialCode.map((item) => ({
                              value: item.dial_code,
                              label: `${item.dial_code}`,
                            }))}
                            onDropdownChange={(selected) =>
                              setphonedropdown(selected)
                            }
                            error={touched.phoneNumber && errors.phoneNumber}
                            type="text"
                            maxLength={15}
                          />
                        </div>

                        {/* Password Field */}
                        <div className="mt-16">
                          <PasswordInput
                            id="password"
                            name="password"
                            label="Password"
                            labelClass="pb-9"
                            value={values.password}
                            onChange={handleChange}
                            error={touched.password && errors.password}
                            placeholder="Password"
                          />
                        </div>

                        {/* Privacy Policy & Terms Checkboxes */}
                        <div className="remember d-flex align-items-start me-4">
                          <input
                            type="checkbox"
                            id="privacyPolicy"
                            className="mt-9"
                            checked={isPrivacyChecked}
                            onChange={handlePrivacyChange}
                          />
                          <span className="ms-8">
                            I have read and agree to{" "}
                            <span className="color-113D"> privacy policy </span>{" "}
                            and{" "}
                            <span className="color-113D"> terms of use. </span>
                          </span>
                        </div>

                        <div className="remember d-flex align-items-start me-4 mt-9">
                          <input
                            type="checkbox"
                            id="receiveOffers"
                            className="mt-9"
                            checked={isOffersChecked}
                            onChange={handleOffersChange}
                          />
                          <span className="ms-8">
                            I would like to receive special offers, promotions,
                            and insightful content from IFERP which would help
                            with my publication
                          </span>
                        </div>

                        {/* Sign Up Button */}
                        <div className="login-btn mt-20">
                          <Button
                            btnText="Sign Up"
                            className="h-45 br-12 text-18-500"
                            onClick={handleSubmit}
                            disabled={isSubmitting || !isFormValid}
                            loading={Signloading}
                          />
                        </div>

                        {/* Login Link */}
                        <div className="mt-18">
                          <p className="text-center mt-8 text-16-400 color-3333">
                            Already on IFERP?{" "}
                            <span
                              className="color-113D"
                              style={{ cursor: "pointer" }}
                              onClick={() => navigate("/login")}
                            >
                              Login
                            </span>
                          </p>
                        </div>
                        <GoogleOAuthProvider
                          clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
                        >
                          <div className="mt-20">
                            <GoogleLogin
                              onSuccess={handleGoogleLoginSuccess}
                              onError={handleGoogleLoginFailure}
                              useOneTap
                              width="100%"
                              theme="outline"
                              shape="circle"
                              text="continue_with"
                              cookiePolicy={"single_host_origin"}
                            />
                          </div>
                        </GoogleOAuthProvider>

                        {/* Continue with Google Button */}
                        {/* <div className="mt-20">
                          <Button
                            btnText="Continue with Google"
                            className="wp-100 h-45 br-12 text-18-500"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            btnStyle="WBB"
                            leftIcon={icons.Google}
                          />
                        </div> */}
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

export default UserSignup;
