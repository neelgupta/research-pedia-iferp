import { Button, Dropdown, PasswordInput, TextInput } from '@/components'
import Breadcrumb from '@/components/layouts/Breadcrumb'
import { Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import "./AddAdministratorRoles.scss"
import { times } from 'lodash';

const AddAdministratorRoles = () => {

    const initialValues = {
        departmentName: "",

    };




    const handleSubmit = async (values, { setSubmitting }) => {

        setSubmitting(false);
    };

    const tableform = [
        {
            formheader: {
                title: "Staff Management",
                childrenoption: [{ title: "Administrator User" }],
            },
        },
        {
            formheader: {
                title: "Site Settings",
                childrenoption: [
                    { title: "Category & Topics" },
                    { title: "Security" },
                    { title: "SMTP Relay" },
                    { title: "Header/Footer Code" },
                ],
            },
        },
    ];


    return (
        <div id="addAdministratorRoles-conatiner">
            <div>
                <div className='mb-14'>
                    <Breadcrumb
                        list={[
                            { title: "Staff Management" },
                            { title: "Administrator Roles" },
                            { title: "Add New Department" }
                        ]}
                        className="text-16-400"

                    />
                </div>
                <div className='categorytopics-title'>
                    <h1>New Department</h1>
                </div>
                <div className='add-rearches'>
                    <div className='rearch-form'>
                       

                        <div className='rmtpreplay-form'>
                            <Formik
                                enableReinitialize
                                initialValues={initialValues}
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
                                            <div className='above-form'>
                                             <div className='rearch-title'>
                            <h1>Administrator Roles Group</h1>
                        </div>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <div className="mb-24 mt-16 ms-26 me-26">
                                                        <TextInput
                                                            id="departmentName"
                                                            name="departmentName"
                                                            value={values.departmentName}
                                                            onChange={handleChange}
                                                            error={touched.departmentName && errors.departmentName}
                                                            placeholder="Department Name"
                                                            type="text"
                                                            label="Department Name"
                                                            labelClass="pb-9"
                                                        />
                                                    </div>

                                                    <div className='ms-32'>
                                                    <h6 className="mb-2 text-14-600"><input
                    type="checkbox"
                    id="rememberMe"
                    className="mt-9 me-10"
                  /> Mask Data</h6>
                  <p className='text-12-400 color-2125 pt-6 pb-10'>e.g. Us*******34@gmail.com, +91 9xxxxxx890</p>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div style={{ overflowX: "auto"}}>
      {tableform.map((section, index) => (
        <div>
        <table
          className="table"
          style={{
            borderRadius: "12px",
            backgroundColor: "#ffffff",
            marginBottom: "20px",
            marginTop :"20px",
            border: "1px solid #ddd",
            minWidth : "500px",
        
         
          }}
          key={index}
        >
          <tbody style={{ backgroundColor: "#ffffff" , borderRadius :"12px" }}>
          
            <tr style={{ backgroundColor: "#ffffff" , borderRadius :"12px" }}>
              <td className="d-flex justify-content-between align-items-center h-77">
                <div>
                  <input type="checkbox" /> {section.formheader.title}
                </div>
                <div className="d-flex gap-2">
                  <div>
                    <input type="checkbox" /> View
                  </div>
                  <div>
                    <input type="checkbox" /> Edit
                  </div>
                  <div>
                    <input type="checkbox" /> Delete
                  </div>
                </div>
              </td>
            </tr>

            {/* Child Options */}
            {section.formheader.childrenoption.map((child, childIndex) => (
              <tr
                key={childIndex}
                style={{
                  backgroundColor: childIndex % 2 === 0 ? "#F3F5F7" : "#ffffff",
                }}
              >
                <td className="d-flex justify-content-between align-items-center h-56">
                  <div>
                    <input type="checkbox" /> {child.title}
                  </div>
                  <div className="d-flex gap-2">
                    <div>
                      <input type="checkbox" /> View
                    </div>
                    <div>
                      <input type="checkbox" /> Edit
                    </div>
                    <div>
                      <input type="checkbox" /> Delete
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      ))}
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

export default AddAdministratorRoles;