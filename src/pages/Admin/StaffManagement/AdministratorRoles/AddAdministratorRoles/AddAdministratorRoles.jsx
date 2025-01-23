import { Button, TextInput } from '@/components';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import { Formik } from 'formik';
import React from 'react';
import "./AddAdministratorRoles.scss";

const AddAdministratorRoles = () => {
  const initialValues = {
    departmentName: "",
    tableform: [
      {
        formheader: {
          title: "Manage Users",
          ischeck : false,
          view: false,
          edit: false,
          delete: false,
          childrenoption: [
            { title: "List Users", view: false, edit: false, delete: false }
          ],
        },
      },
      {
        formheader: {
          title: "Staff Management",
          ischeck : false,
          view: false,
          edit: false,
          delete: false,
          childrenoption: [
            { title: "Administrator User", view: false, edit: false, delete: false },
            { title: "Administrator Roles", view: false, edit: false, delete: false }
          ],
        },
      },
      {
        formheader: {
          title: "Site Settings",
          ischeck : false,
          view: false,
          edit: false,
          delete: false,
          childrenoption: [
            { title: "Category & Topics", view: false, edit: false, delete: false },
            { title: "Security", view: false, edit: false, delete: false },
            { title: "SMTP Relay", view: false, edit: false, delete: false },
            { title: "Header/Footer Code", view: false, edit: false, delete: false },
          ],
        },
      },
      {
        formheader: {
          title: "Feedback",
          ischeck : false,
          view: false,
          edit: false,
          delete: false,
          childrenoption: [],
        },
      },
      {
        formheader: {
          title: "Banner Ads",
          ischeck : false,
          view: false,
          edit: false,
          delete: false,
          childrenoption: [
            { title: "Header Banner", view: false, edit: false, delete: false },
            { title: "Footer Banner", view: false, edit: false, delete: false },
            { title: "Modal Popup", view: false, edit: false, delete: false },
            { title: "On Scroll Display", view: false, edit: false, delete: false },
            { title: "Full Screen", view: false, edit: false, delete: false },
          ],
        },
      },
    ],
  };

  const handleSubmit = async (values, { setSubmitting }) => {
     console.log("Form submitted with values: ", values);
    // setSubmitting(false);
  };



  return (
    <div id="addAdministratorRoles-conatiner">
      <div>
        <div className='mb-14'>
          <Breadcrumb
            list={[{ title: "Staff Management" }, { title: "Administrator Roles" }, { title: "Add New Department" }]}
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
                {({ values, handleChange, handleSubmit, setFieldValue, isSubmitting }) => {
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
                                placeholder="Department Name"
                                type="text"
                                label="Department Name"
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

                      <div style={{ overflowX: "auto" }}>
                        {values.tableform.map((section, index) => (
                          <div key={index}>
                            <table className="table"  style={{
                                marginBottom: "20px",
                                marginTop: "20px",
                                minWidth: "500px",
                                borderRadius: "16px", 
                                borderCollapse: "separate", 
                                overflow: "hidden", 
                                border: "1px solid #E7EAEE"
                              }}>
                              <tbody>
                                <tr style={{ backgroundColor: "#ffffff" }}>
                                  <td className="d-flex justify-content-between align-items-center h-77">
                                    <div className='ms-26'>
                                      <input
                                        type="checkbox"
                                      
                                      />
                                      <span className='text-16-600 color-1D26 ms-12'>{section.formheader.title}</span>
                                    </div>
                                    <div className="d-flex gap-2 me-26">
                                      {['view', 'edit', 'delete'].map(permissionType => (
                                        <div className='ms-16' key={permissionType}>
                                          <input
                                            type="checkbox"
                                         
                                          />
                                          <span className='text-14-400 color-1D26 ms-6'>{permissionType.charAt(0).toUpperCase() + permissionType.slice(1)}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </td>
                                </tr>

                                {/* Child Options */}
                                {Array.isArray(section.formheader.childrenoption) && section.formheader.childrenoption.map((child, childIndex) => (
                                  <tr
                                    key={childIndex}
                                    style={{
                                      backgroundColor: childIndex % 2 === 0 ? "#F3F5F7" : "#ffffff",
                                    }}
                                  >
                                    <td className="d-flex justify-content-between align-items-center h-56">
                                      <div className='ms-26'>
                                        <input
                                          type="checkbox"
                                          
                                        />
                                        <span className='text-14-400 color-1D26 ms-12'>{child.title}</span>
                                      </div>
                                      <div className="d-flex gap-2 me-26">
                                        {['view', 'edit', 'delete'].map(permissionType => (
                                          <div className='ms-16' key={permissionType}>
                                            <input
                                              type="checkbox"
                                      
                                            />
                                            <span className='text-14-400 color-1D26 ms-6'>{permissionType.charAt(0).toUpperCase() + permissionType.slice(1)}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ))}
                      </div>

                      <div className="mt-16 mb-26 d-flex justify-content-end gap-3 align-items-center">
                        <div>
                          <span className='text-14-700 color-113D'>Check All</span>
                        </div>
                        <div>
                          <span className='text-14-700 color-113D'>Uncheck All</span>
                        </div>
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
  );
};

export default AddAdministratorRoles;
