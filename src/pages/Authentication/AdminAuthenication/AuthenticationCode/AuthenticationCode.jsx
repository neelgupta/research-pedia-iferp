import { Button, TextInput } from "@/components";
import { Formik } from "formik";
import "./AuthenticationCode.scss";
import * as Yup from "yup";
import { icons } from "@/utils/constants";
import { useDispatch } from "react-redux";
import { loginWithTwoFacorAuth } from "@/store/adminSlice/twoFASlice";
import { storeLocalStorageData } from "@/utils/helpers";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AuthenticationCode = () => {
  const location = useLocation();

  const initialValues = {
    twoFactorCode: "",
  };

  const dispatch = useDispatch();
  const [loading, stloading] = useState(false);

  const validationSchema = Yup.object({
    twoFactorCode: Yup.number().required("Code is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    stloading(true);
    const payload = {
      userId: location?.state.id,
      token: values.twoFactorCode,
    };
    const result = await dispatch(loginWithTwoFacorAuth(payload));

    if (result?.data?.verified === true) {
      storeLocalStorageData({
        ...result?.data,
        token: location.state.loginToken,
        role:"admin"
      });
      stloading(false);
    }
    stloading(false);
  };
  return (
    <>
      <div id="authenticationCode-container">
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
            <h1>Authentication Code</h1>
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
                      id="twoFactorCode"
                      name="twoFactorCode"
                      value={values.twoFactorCode}
                      onChange={handleChange}
                      error={touched.twoFactorCode && errors.twoFactorCode}
                      placeholder="Enter code"
                      type="text"
                    />
                  </div>
                  <div className="login-btn">
                    <Button
                      btnText="Verify"
                      className="wp-100 h-45  br-12 text-18-500"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      loading={loading}
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

export default AuthenticationCode;
