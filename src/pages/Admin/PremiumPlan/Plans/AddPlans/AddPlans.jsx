import React from 'react'
import "./AddPlans.scss"
import { Button, Dropdown, PasswordInput, TextInput } from "@/components";
import Breadcrumb from "@/components/layouts/Breadcrumb";
import { Formik } from "formik";

import * as Yup from "yup";
const AddPlans = () => {

     const initialValues = {
        amount: "",
        discountAmount: "",
        aiCredits :"",
        duration: "",
      };
    
      const validationSchema = Yup.object({
        amount: Yup.string().required("Amount is required"),
        discountAmount: Yup.string().required("Discount Amount is required"),
        aiCredits: Yup.string().required("AI Credits is required"),
        duration: Yup.string().required("Duration is required"),
      });
    
      const handleSubmit = async (values, { setSubmitting }) => {
        console.log("values" , values)
        setSubmitting(false);
      };

  return (
    <div id="addplans-conatiner">
    <div>
      <div className="mb-14">
        <Breadcrumb
          list={[{ title: "Premium Plan" }, { title: "Plan" } ,{ title: "Add New Plan" }]}
          className="text-16-400"
          isGreen
        />
      </div>
      <div className="categorytopics-title">
        <h1>Add New Plan</h1>
      </div>
      <div className="add-rearches">
        <div className="rearch-form border">
          <div className="rearch-title">
            <h1>Add New Plan</h1>
          </div>

          <div className="rmtpreplay-form">
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
                          <Dropdown
                            id="duration"
                            label="Duration"
                            placeholder="Duration"
                            name="duration"
                            value={values.duration}
                            onChange={(e) =>
                              setFieldValue("duration", e.target.value)
                            }
                            options={[
                              { id: "intermediate", label: "Intermediate" },
                              { id: "beginner", label: "Beginner" },
                              { id: "advanced", label: "Advanced" },
                            ]}
                            error={
                              touched.duration && errors.duration
                            }
                            labelClass="pb-9"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-12">
                        <div className="mb-24 mt-16">
                          <TextInput
                            id="amount"
                            name="amount"
                            value={values.amount}
                            onChange={handleChange}
                            error={touched.amount && errors.amount}
                            placeholder="Enter amount"
                            type="number"
                            label="Amount"
                            labelClass="pb-9"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="mb-24 mt-16">
                          <TextInput
                            id="discountAmount"
                            name="discountAmount"
                            value={values.discountAmount}
                            onChange={handleChange}
                            error={touched.discountAmount && errors.discountAmount}
                            placeholder="Enter discount amount"
                            type="number"
                            label="Discount Amount"
                            labelClass="pb-9"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-12">
                        <div className="mb-24 mt-16">
                          <TextInput
                            id="aiCredits"
                            name="aiCredits"
                            value={values.aiCredits}
                            onChange={handleChange}
                            error={touched.aiCredits && errors.aiCredits}
                            placeholder="Enter AI credits"
                            type="number"
                            label="AI Credits"
                            labelClass="pb-9"
                          />
                        </div>
                      </div>
                    

                     
                    </div>

                    <div className="mt-16 mb-26 d-flex justify-content-end">
                      <Button
                        btnText="Add Plan"
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

export default AddPlans
