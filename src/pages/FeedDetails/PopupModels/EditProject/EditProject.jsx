import { Button, Modal, TextInput } from "@/components";
import { setIsEditProjectselectOpen } from "@/store/globalSlice";
import { icons } from "@/utils/constants";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const EditProject = () => {
  const dispatch = useDispatch();
  const selectedProject = useSelector((state) => state.global.selectedProject);
  const navigation = useNavigate();

  const onHide = () => {
    dispatch(setIsEditProjectselectOpen(false));
  };

  const initialValues = {
    editprojectname: selectedProject || "",
  };
  const validationSchema = Yup.object({
    editprojectname: Yup.string().required("Project Name is required"),
  });

  const handleSubmit = async (values) => {
    dispatch(setIsEditProjectselectOpen(false));

    navigation("/feed-details-author");
  };

  return (
    <Modal onHide={onHide} size="md">
      <div>
        <div>
          <p className="text-18-500 color-0303">Edit Project Name</p>
        </div>

        <div>
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
                    <div className="mb-8 mt-16">
                      <TextInput
                        id="editprojectname"
                        name="editprojectname"
                        value={values.editprojectname}
                        onChange={handleChange}
                        error={
                          touched.editprojectname && errors.editprojectname
                        }
                        placeholder="Enter your project name"
                        type="text"
                        label="Project Name"
                        labelClass="pb-9"
                      />
                    </div>
                  </div>

                  <div className="mt-16  d-flex justify-content-end">
                    <Button
                      btnText="Save"
                      className="w-128 h-49 br-12 text-18-500"
                      onClick={handleSubmit}
                    />
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default EditProject;
