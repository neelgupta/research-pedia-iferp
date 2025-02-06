import { Button, PasswordInput, TextInput } from "@/components";
import "./Login.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleLogin } from "@/store/globalSlice";
import { icons } from "@/utils/constants";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [authCode, setAuthCode] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const res = await dispatch(handleLogin(values));
    console.log(res, "res");
    if (res.status === 200) {
      if (res.data?.response?.role == "admin") {
        navigate("/admin/setting/category-topic");
      }
    }
    setAuthCode(true);
    setSubmitting(false);
  };

  return (
    <div id="login-container">
      <div className="login-card">
        <div class="login-logo d-flex justify-content-center align-items-center">
          <div class="img-tag me-3">
            <img src={icons.loginicon} alt="login-img" className="img-fluid" />
          </div>
        </div>

        <div className="login-text d-flex justify-content-center align-items-center">
          <h1>Login with your email</h1>
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
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && errors.email}
                    placeholder="Email Address"
                    type="email"
                  />
                </div>
                <div>
                  <PasswordInput
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    error={touched.password && errors.password}
                    placeholder="Password"
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="remember d-flex align-items-center me-4">
                    <input type="checkbox" id="rememberMe" />
                    <span className="ms-2">Remember me?</span>
                  </div>
                  <div
                    className="forgot-password mt-16"
                    onClick={() => navigate("/admin/forgot-password")}
                  >
                    <span className="d-flex align-items-center">
                      Forgot Password?
                    </span>
                  </div>
                </div>
                {authCode && (
                  <div
                    className="two-fa-auth"
                    onClick={() => navigate("/admin/authentication-code")}
                  >
                    <span className="d-flex align-items-center">
                      Login With Authentication Code
                    </span>
                  </div>
                  // <span
                  //   className="pointer"
                  //   onClick={() => navigate("/admin/authentication-code")}
                  // >
                  //   Login With Authentication Code
                  // </span>
                )}

                <div className="login-btn mb-10">
                  <Button
                    btnText="Login"
                    className="wp-100 h-45 br-12 text-18-500"
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
  );
};

export default Login;
