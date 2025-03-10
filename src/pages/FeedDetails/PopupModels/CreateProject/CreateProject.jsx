import { Button, Modal, TextInput } from "@/components";
import { setIsCreateProjectselectOpen } from "@/store/globalSlice";
import { icons } from "@/utils/constants";
import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const CreateProject = () => {
  const dispatch = useDispatch();
  const onHide = () => {
    dispatch(setIsCreateProjectselectOpen(false));
  };

  const navigation = useNavigate();
  const initialValues = {
    projectname: "",
  };
  const validationSchema = Yup.object({
    projectname: Yup.string().required("Project Name is required"),
  });

  const handleSubmit = async (values) => {
    dispatch(setIsCreateProjectselectOpen(false));
    navigation("/my-feed");
  };

  return (
    <Modal onHide={onHide} size="md">
      <div>
        <div>
          <p className="text-18-500 color-0303">Name Your Project</p>
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
                        id="projectname"
                        name="projectname"
                        value={values.projectname}
                        onChange={handleChange}
                        error={touched.projectname && errors.projectname}
                        placeholder="Enter your project name"
                        type="text"
                        label="Project Name"
                        labelClass="pb-9"
                      />
                    </div>
                  </div>

                  <div className="mt-16  d-flex justify-content-end">
                    <Button
                      btnText="Create"
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

export default CreateProject;
