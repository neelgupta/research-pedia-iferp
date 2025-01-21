import { icons } from "@/utils/constants/icon";
import "./Login.scss";
import { Formik } from "formik";
import { Button, PasswordInput, TextInput } from "@/components";
import * as Yup from "yup";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LeftsideContainer from "../LeftsideContainer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  handleGoogleLogin,
  handleUserLogin,
} from "@/store/userSlice/authSlice";
import { storeLocalStorageData } from "@/utils/helpers";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const UserLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    const result = await dispatch(handleUserLogin(values));
    if (result?.status === 200) {
      storeLocalStorageData({
        ...result?.data.response,
        token: result.data.response.token,
      });
    }
  };

  const handleGoogleLoginSuccess = async (response) => {
    console.log("Google Login Success", response);
    const { credential } = response;

    // Send the Google login token to your backend for validation and handling
    const result = await dispatch(handleGoogleLogin({ token: credential }));
    if (result?.status === 200) {
      storeLocalStorageData({
        ...result?.data.response,
        token: result.data.response.token,
      });
    }
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google Login Failed", error);
  };

  return (
    <>
      <div id="usersignin-container">
        <div className="row">
          <div className="col-6  d-none d-lg-block">
            <LeftsideContainer />
          </div>
          <div className="col-lg-6 col-12">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "100vh" }}
            >
              <div className="usersignin-container">
                <div className="form-header mb-32">
                  <h1>Login</h1>
                  <p className="mt-8">
                    Stay updated on your professional world
                  </p>
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
                          <div className="mb-16">
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
                          <div>
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
                          <div
                            className="form-text"
                            onClick={() => {
                              navigate("/email-verification");
                            }}
                          >
                            <p className="mb-8 text-end text-14-500 color-113D">
                              Forgot Password?
                            </p>
                          </div>
                          <div className="login-btn mt-20">
                            <Button
                              btnText="Login"
                              className=" h-45  br-12 text-18-500"
                              onClick={handleSubmit}
                              disabled={isSubmitting}
                            />
                          </div>
                          <div className="mt-18 nav-sigup">
                            <p className="text-center mt-8 text-16-400 color-3333">
                              New to IFERP?{" "}
                              <span
                                className="color-113D sign"
                                onClick={() => navigate("/sign-up")}
                              >
                                Sign Up
                              </span>
                            </p>
                          </div>

                          {/* <div className=" mt-20">
                            <Button
                              btnText="Continue with Google"
                              className="wp-100 h-45  br-12 text-18-500"
                              onClick={handleGoogleLogin}
                              disabled={isSubmitting}
                              btnStyle="WBB"
                              leftIcon={icons.Google}
                            />
                          </div> */}

                          <GoogleOAuthProvider clientId="1036353088707-g4e7a8ud0a9lsjp8a5uubup23hvloap0.apps.googleusercontent.com">
                            <div className="mt-20">
                              <GoogleLogin
                                onSuccess={handleGoogleLoginSuccess}
                                onError={handleGoogleLoginFailure}
                                useOneTap
                                width="100%"
                                theme="outline"
                                shape="circle"
                                text="continue_with"
                              />
                            </div>
                          </GoogleOAuthProvider>
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
    </>
  );
};

export default UserLogin;
