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

import {
  getDataFromLocalStorage,
  storeLocalStorageData,
} from "@/utils/helpers";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";
// import { setIsModalOpen } from "@/store/globalSlice";
import { getProjectByTopics } from "../../../../store/userSlice/projectSlice";
import RoleSelectionModal from "./RoleSelectionModal";
const UserLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setlodding] = useState(false);

  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [googleUserData, setGoogleUserData] = useState(null);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const localData = getDataFromLocalStorage();

  const fetchProject = async () => {
    const result = await dispatch(getProjectByTopics());

    const isProjectAvailable = result?.data?.response?.some(
      (item) => item._userId === localData.id
    );

    return isProjectAvailable;
  };

  const handleSubmit = async (values) => {
    setlodding(true);
    const result = await dispatch(handleUserLogin(values));

    if (result?.status === 200) {
      storeLocalStorageData({
        ...result?.data.response,
        token: result.data.response.token,
      });
      setGoogleUserData(result.data.response);
      setIsRoleModalOpen(true); // Open the modal

      const isProjectAvailable = await fetchProject();

      // const isPersonalDetailExist = await dispatch(
      //   setIsModalOpen(result.data.response.isPersonalDetailsCompleted)
      // );

      // const isPersonalDetail = isPersonalDetailExist.payload;

      if (isProjectAvailable) {
        navigate("/feed-details");
      } else if (!isProjectAvailable) {
        navigate("/my-feed");
      }

      setlodding(false);
    }
    setlodding(false);
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
                          <div className=" d-flex align-items-end justify-content-end not-allow">
                            <p
                              className="mb-8 text-end text-14-500 color-113D d-inline-block pointer"
                              onClick={() => {
                                navigate("/email-verification");
                              }}
                            >
                              Forgot Password?
                            </p>
                          </div>
                          <div className="login-btn mt-20">
                            <Button
                              btnText="Login"
                              className=" h-45  br-12 text-18-500"
                              onClick={handleSubmit}
                              disabled={isSubmitting}
                              loading={loading}
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
