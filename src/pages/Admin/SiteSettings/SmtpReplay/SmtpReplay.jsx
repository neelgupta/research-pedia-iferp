import { Button, Dropdown, PasswordInput, TextInput } from '@/components'
import Breadcrumb from '@/components/layouts/Breadcrumb'
import { Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import "./SmtpReplay.scss"

const SmtpReplay = () => {

  const initialValues = {
    mailServer: "",
    userName: "",
    password: "",
    port: "",
    authentication: "", 
  };

  const validationSchema = Yup.object({
    mailServer: Yup.string().required("Mail Server is required"),
    userName: Yup.string().required("User Name is required"),
    password: Yup.string().required("Password is required"),
    port: Yup.number()
      .typeError("Port must be a number")
      .required("Port is required"),
    authentication: Yup.string().required("Authentication is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("Submitted Values:", values);
    setSubmitting(false);
  };

  return (
    <div id="smtpreplay-conatiner">
      <div>
        <div className='mb-14'>
          <Breadcrumb
            list={[
              { title: "Site Settings" },
              { title: "Category & Topics" }
            ]}
            className="text-16-400"
            isGreen
          />
        </div>
        <div className='categorytopics-title'>
          <h1>SMTP Relay</h1>
        </div>
        <div className='add-rearches'>
          <div className='rearch-form border'>
            <div className='rearch-title'>
              <h1>SMTP Setting</h1>
            </div>

            <div className='rmtpreplay-form'>
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
                    setFieldValue
                  } = props;
                console.log(values)
                  return (
                    <form
                      onSubmit={handleSubmit}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSubmit();
                        }
                      }}
                    >
                      <div className='row'>
                        <div className='col-lg-6 col-12'>
                          <div className="mb-24 mt-16">
                            <TextInput
                              id="mailServer"
                              name="mailServer"
                              value={values.mailServer}
                              onChange={handleChange}
                              error={touched.mailServer && errors.mailServer}
                              placeholder="Mail Server"
                              type="text"
                              label="Mail Server"
                              labelClass="pb-9"
                            />
                          </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                          <div className="mb-24 mt-16">
                            <TextInput
                              id="userName"
                              name="userName"
                              labelClass="pb-9"
                              value={values.userName}
                              onChange={handleChange}
                              error={touched.userName && errors.userName}
                              placeholder="User Name"
                              label="User Name"
                            />
                          </div>
                        </div>

                        <div className='col-lg-6 col-12'>
                          <div className="mb-24 mt-16">
                            <PasswordInput
                              id="password"
                              name="password"
                              labelClass="pb-9"
                              value={values.password}
                              onChange={handleChange}
                              error={touched.password && errors.password}
                              placeholder="Password"
                              label="Password"
                            />
                          </div>
                        </div>

                        <div className='col-lg-6 col-12'>
                          <div className="mb-24 mt-16">
                            <TextInput
                              id="port"
                              name="port"
                              labelClass="pb-9"
                              value={values.port}
                              onChange={handleChange}
                              error={touched.port && errors.port}
                              placeholder="Port"
                              label="Port"
                            />
                          </div>
                        </div>

                        <div className='col-lg-6 col-12'>
                          <div className="mb-24 mt-16">
                            <Dropdown
                            id="authentication"
                              label="Authentication"
                               placeholder="Authentication"
                              name="authentication"
                              value={values.authentication}
                              onChange={(e) => setFieldValue("authentication", e.target.value)}
                        options={[
                          { id: "intermediate", label: "Intermediate" },
                          { id: "beginner", label: "Beginner" },
                          { id: "advanced", label: "Advanced" },
                        ]}
                              error={touched.authentication && errors.authentication}
                              labelClass="pb-9"
                            />
                          </div>
                        </div>

                        <div className='col-lg-6 col-12 d-flex align-items-center mb-24 mt-16'>
                          <h1 className='text-14-500 color-113D mt-26'>Send Test Email</h1>
                        </div>
                      </div>

                      <div className="mt-16 mb-26 d-flex justify-content-end">
                        <Button
                          btnText="Save"
                          className="w-100 h-45 br-12 text-18-500"
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
        </div>
      </div>
    </div>
  )
}

export default SmtpReplay;
