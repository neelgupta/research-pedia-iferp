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
import { handleUserSignUp } from "@/store/userSlice/authSlice";

// Define the validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  name: Yup.string().required("Name is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  role: Yup.string().required("Please select a membership type"),
});

const UserSignup = () => {
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [isOffersChecked, setIsOffersChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePrivacyChange = (e) => {
    setIsPrivacyChecked(e.target.checked);
  };

  const handleOffersChange = (e) => {
    setIsOffersChecked(e.target.checked);
  };

  const isFormValid = isPrivacyChecked && isOffersChecked;
  const [namedropdown, setnamedropdown] = useState("Dr.");
  const [phonedropdown, setphonedropdown] = useState("+91");
  const [Signloading, setlodding] = useState(false);
  const initialValues = {
    email: "",
    password: "",
    role: "",
    phoneNumber: "",
    name: "",
  };

  const handleSubmit = async (values) => {
    setlodding(true);
    const Name = namedropdown + values.name;
    const Phone = values.phoneNumber;

    const finalvalue = {
      ...values,
      name: Name,
      phoneNumber: Phone,
      role: values.role,
    };

    const result = await dispatch(handleUserSignUp(finalvalue));

    if (result?.status === 200) {
      navigate("/login");
      setlodding(false);
    }
    setlodding(false);
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
                        {console.log(errors, "errors")}
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
                            type="text"
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

                        {/* Continue with Google Button */}
                        <div className="mt-20">
                          <Button
                            btnText="Continue with Google"
                            className="wp-100 h-45 br-12 text-18-500"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            btnStyle="WBB"
                            leftIcon={icons.Google}
                          />
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

export default UserSignup;
