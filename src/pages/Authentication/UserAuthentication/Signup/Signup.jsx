import LeftsideContainer from "../LeftsideContainer";
import { Field, Formik } from "formik";
import { Button, Dropdown, PasswordInput, TextInput } from "@/components";
import "./Signup.scss";
import { icons } from "@/utils/constants/icon";
import PhoneInput from "react-phone-input-2";
import TextInputwithDropdown from "@/components/inputs/TextInputwithDropdown/TextInputwithDropdown";
import { dialCode } from "@/utils/constants";
import * as Yup from "yup";  // Import Yup for validation

// Define the validation schema
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone number is required"),
  joinus: Yup.string().required("Please select a membership type"),
});

const UserSignup = () => {
  const initialValues = {
    email: "",
    password: "",
    joinus: "",
    phone: "",
    name: "",
  };

  const handleSubmit = (values) => {
    // Log the values to the console
    console.log("Form Values:", values);

    // Perform your submit logic here, such as sending the data to the server
    // For example: axios.post("/signup", values);
  };

  return (
    <div id="usersignup-container">
      <div className="row">
        <div className="col-6 d-none d-lg-block" >
          <LeftsideContainer/>
        </div>
        <div className="col-lg-6 col-12">
          <div className="d-flex justify-content-center align-items-center " style={{minHeight : "100vh"}}>
            <div className="usersignin-container">
              <div className="form-header mb-14">
                <h1>Sign Up</h1>
                <p className="mt-8">Stay updated on your professional world</p>
              </div>
              <div className="form ">
                <Formik
                  enableReinitialize
                  initialValues={initialValues}
                  validationSchema={validationSchema}  // Add validation schema
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
                        <div className="">
                          <Dropdown
                            id="joinus"
                            label="Join As"
                            placeholder="Select"
                            name="joinus"
                            value={values.joinus}
                            onChange={(e) => setFieldValue("joinus", e.target.value)}
                            options={[
                              { id: "Professional Member", label: <div><p>Professional Member</p><span>Academicians, Researchers, Corporate Individuals</span></div> },
                              { id: "Student Member", label: <div><p>Student Member</p><span>UG, PG Students</span></div> },
                              { id: "Institutional Member", label: <div><p>Institutional Member</p><span>Universities / Colleges / Institutions</span></div> },
                            ]}
                            error={touched.joinus && errors.joinus}
                            labelClass="pb-9"
                          />
                        </div>

                        <div className=" mt-16">
                          <TextInputwithDropdown
                            isname
                            id="name"
                            name="name"
                            label="Name"
                            labelClass= "pb-8"
                            value={values.name}
                            onChange={(e) => setFieldValue("name", e.target.value)}
                            placeholder="Enter name"
                            dropdownOptions={[
                              { value: "Dr.", label: "Dr." },
                              { value: "Prof.", label: "Prof." },
                              { value: "Mr.", label: "Mr." },
                              { value: "Mrs.", label: "Mrs." },
                              { value: "Ms.", label: "Ms." },
                            ]}
                            onDropdownChange={(selected) => console.log("Selected:", selected)}
                            error={touched.name && errors.name}
                          />
                        </div>

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

                        <div className="mt-16">
                          <TextInputwithDropdown
                            isphone
                            id="phone"
                            name="phone"
                            label="Phone Number"
                             labelClass= "pb-8"
                            value={values.phone}
                            onChange={(e) => setFieldValue("phone", e.target.value)}
                            placeholder="Enter phone number"
                            dropdownOptions={dialCode.map((item) => ({
                              value: item.dial_code,
                              label: `${item.flag} ${item.dial_code}`,
                            }))}
                            onDropdownChange={(selected) => console.log("Selected:", selected)}
                            error={touched.phone && errors.phone}
                          />
                        </div>

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

                        <div className="remember d-flex align-items-start me-4">
                          <input type="checkbox" id="rememberMe" className="mt-9" />
                          <span className="ms-8">
                            I have read and agree to <span className="color-113D"> privacy policy </span> and{" "}
                            <span className="color-113D"> terms of use. </span>
                          </span>
                        </div>

                        <div className="remember d-flex align-items-start me-4 mt-9">
                          <input type="checkbox" id="rememberMe" className="mt-9" />
                          <span className="ms-8">
                            I would like to receive special offers, promotions, and insightful content from IFERP
                            which would help with my publication
                          </span>
                        </div>

                        <div className="login-btn mt-20">
                          <Button
                            btnText="Sign Up"
                            className="h-45 br-12 text-18-500"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                          />
                        </div>

                        <div className="mt-18">
                          <p className="text-center mt-8 text-16-400 color-3333">
                            Already on IFERP? <span className="color-113D">Login</span>
                          </p>
                        </div>

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
