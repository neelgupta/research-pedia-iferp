import { Button, Dropdown, PasswordInput, TextInput } from "@/components";
import Breadcrumb from "@/components/layouts/Breadcrumb";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import "./SmtpReplay.scss";
import { useDispatch } from "react-redux";
import {
  handleCreateSmtpDetails,
  handleGetSmtpDetails,
  handleTestSmtpAction,
} from "@/store/adminSlice/smtpRekay";

const SmtpReplay = () => {
  const initialValues = {
    smtpHost: "",
    smtpUser: "",
    smtpPass: "",
    smtpPort: "",
    authentication: "",
  };
  const [isSmtp, setIsSmtp] = useState(true);
  const [isSmtpDetails, setIsSmtpDetails] = useState({});

  const validationSchema = Yup.object({
    smtpHost: Yup.string().required("Mail Server is required"),
    smtpUser: Yup.string().required("User Name is required"),
    smtpPass: Yup.string().required("Password is required"),
    smtpPort: Yup.number()
      .typeError("Port must be a number")
      .required("Port is required"),
    authentication: Yup.string().required("Authentication is required"),
  });

  const fetchSmtpDetails = async () => {
    const result = await dispatch(handleGetSmtpDetails());
    if (result.status === 200) {
      setIsSmtpDetails(result.data.response);
    }
  };



  const dispatch = useDispatch();

  const handleTestSmtp = async (values) => {
    try {
      // Dispatch the correct action, not the function itself
      const result = await dispatch(handleTestSmtpAction(values));
      if (result?.status === 200) {
        setIsSmtp(false);
      }
    } catch (error) {
      console.error("Error testing SMTP:", error);
    }
  };

  const handleSubmit = async (values) => {
    await dispatch(handleCreateSmtpDetails(values));
  };

  useEffect(() => {
    fetchSmtpDetails();
  }, []);

  return (
    <div id="smtpreplay-conatiner">
      <div>
        <div className="mb-14">
          <Breadcrumb
            list={[{ title: "Site Settings" }, { title: "Category & Topics" }]}
            className="text-16-400"
            isGreen
          />
        </div>
        <div className="categorytopics-title">
          <h1>SMTP Relay</h1>
        </div>
        <div className="add-rearches">
          <div className="rearch-form border">
            <div className="rearch-title">
              <h1>SMTP Setting</h1>
            </div>

            <div className="rmtpreplay-form">
              <Formik
                enableReinitialize
                initialValues={isSmtpDetails || initialValues}
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
                      <div className="row">
                        <div className="col-lg-6 col-12">
                          <div className="mb-24 mt-16">
                            <TextInput
                              id="smtpHost"
                              name="smtpHost"
                              value={values.smtpHost}
                              onChange={handleChange}
                              error={touched.smtpHost && errors.smtpHost}
                              placeholder="Mail Server"
                              type="text"
                              label="Mail Server"
                              labelClass="pb-9"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="mb-24 mt-16">
                            <TextInput
                              id="smtpUser"
                              name="smtpUser"
                              labelClass="pb-9"
                              value={values.smtpUser}
                              onChange={handleChange}
                              error={touched.smtpUser && errors.smtpUser}
                              placeholder="User Name"
                              label="User Name"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-12">
                          <div className="mb-24 mt-16">
                            <PasswordInput
                              id="smtpPass"
                              name="smtpPass"
                              labelClass="pb-9"
                              value={values.smtpPass}
                              onChange={handleChange}
                              error={touched.smtpPass && errors.smtpPass}
                              placeholder="Password"
                              label="Password"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-12">
                          <div className="mb-24 mt-16">
                            <TextInput
                              id="smtpPort"
                              name="smtpPort"
                              labelClass="pb-9"
                              value={values.smtpPort}
                              onChange={handleChange}
                              error={touched.smtpPort && errors.smtpPort}
                              placeholder="Port"
                              label="Port"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-12">
                          <div className="mb-24 mt-16">
                            <Dropdown
                              id="authentication"
                              label="Authentication"
                              placeholder="Authentication"
                              name="authentication"
                              value={values.authentication}
                              onChange={(e) =>
                                setFieldValue("authentication", e.target.value)
                              }
                              options={[
                                { id: "tsl", label: "TSL", value: "tsl" },
                                { id: "ssl", label: "SSL", value: "ssl" },
                              ]}
                              error={
                                touched.authentication && errors.authentication
                              }
                              labelClass="pb-9"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-12 d-flex align-items-center mb-24 mt-16">
                          <h1
                            className="text-14-500 color-113D mt-26 pointer"
                            onClick={() => handleTestSmtp(values)}
                          >
                            Send Test Email
                          </h1>
                        </div>
                      </div>

                      <div className="mt-16 mb-26 d-flex justify-content-end">
                        <Button
                          btnText="Save"
                          className="w-100 h-45 br-12 text-18-500"
                          onClick={handleSubmit}
                          disabled={isSmtp}
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
  );
};

export default SmtpReplay;
