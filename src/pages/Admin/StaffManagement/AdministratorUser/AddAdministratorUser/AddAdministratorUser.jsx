import { Button, Dropdown, PasswordInput, TextInput } from '@/components'
import Breadcrumb from '@/components/layouts/Breadcrumb'
import { Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import "./AddAdministratorUser.scss"

const AddAdministratorUser = () => {

  const initialValues = {
    name: "",
    email: "",
    username: "",
    role: "",
    departments: "", 
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    username: Yup.string().min(3, "Username must be at least 3 characters").required("Username is required"),
    role: Yup.string().required("Admin Role is required"),
    departments: Yup.string().required("Assigned Departments is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    
    setSubmitting(false);
  };

  return (
    <div id="adddministratorUser-conatiner">
      <div>
        <div className='mb-14'>
          <Breadcrumb
            list={[
              { title: "Staff Management" },
              { title: "Administrator User" },
              { title: "Add New Administrator" }
            ]}
            className="text-16-400"
            isGreen
          />
        </div>
        <div className='categorytopics-title'>
          <h1>New Administrator</h1>
        </div>
        <div className='add-rearches'>
          <div className='rearch-form border'>
            <div className='rearch-title'>
              <h1>New Administrator</h1>
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
                              id="name"
                              name="name"
                              value={values.name}
                              onChange={handleChange}
                              error={touched.name && errors.name}
                              placeholder="Name"
                              type="text"
                              label="Name"
                              labelClass="pb-9"
                            />
                          </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                          <div className="mb-24 mt-16">
                            <TextInput
                              id="email"
                              name="email"
                              labelClass="pb-9"
                              value={values.email}
                              onChange={handleChange}
                              error={touched.email && errors.email}
                              placeholder="Enter email address"
                              label="Email Address"
                            />
                          </div>
                        </div>

                        <div className='col-lg-6 col-12'>
                          <div className="mb-24 mt-16">
                            <TextInput
                              id="username"
                              name="username"
                              labelClass="pb-9"
                              value={values.username}
                              onChange={handleChange}
                              error={touched.username && errors.username}
                              placeholder="Enter user name"
                              label="User name"
                            />
                          </div>
                        </div>

                        <div className='col-lg-6 col-12'>
                          <div className="mb-24 mt-16">
                            <Dropdown
                            id="role"
                              label="Admin Role"
                               placeholder="Select admin role"
                              name="role"
                              value={values.role}
                              onChange={(e) => setFieldValue("role", e.target.value)}
                        options={[
                          { id: "intermediate", label: "Intermediate" },
                          { id: "beginner", label: "Beginner" },
                          { id: "advanced", label: "Advanced" },
                        ]}
                              error={touched.role && errors.role}
                              labelClass="pb-9"
                              className="bg-ffff"
                            />
                          </div>
                        </div>


                        <div className='col-lg-6 col-12'>
                          <div className="mb-24 mt-16">
                            <Dropdown
                            id="departments"
                              label="Assigned Departments"
                               placeholder="Select assigned departments"
                              name="departments"
                              value={values.departments}
                              onChange={(e) => setFieldValue("departments", e.target.value)}
                        options={[
                          { id: "intermediate", label: "Intermediate" },
                          { id: "beginner", label: "Beginner" },
                          { id: "advanced", label: "Advanced" },
                        ]}
                              error={touched.departments && errors.departments}
                              labelClass="pb-9"
                            />
                          </div>
                        </div>

                       
                      </div>

                      <div className="mt-16 mb-26 d-flex justify-content-end">
                        <Button
                          btnText="Add"
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

export default AddAdministratorUser;