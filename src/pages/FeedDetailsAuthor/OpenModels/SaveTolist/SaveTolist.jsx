import { Button, CheckBox, Modal, TextInput } from "@/components";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import "./SaveTolist.scss";

const SaveTolist = ({ onHide }) => {
  const [isCreatingProject, setIsCreatingProject] = useState(false);

  const initialValues = {
    listName: "",
  };

  const validationSchema = Yup.object({
    listName: Yup.string().required("Project Name is required"),
  });

  const handleSubmit = async (values) => {
    setIsCreatingProject(false);
  };

  return (
    <Modal onHide={onHide} size="md">
      <div id="SaveTolist">
        {isCreatingProject ? (
          <div>
            <p className="text-18-500 color-0303">Add List</p>

            <Formik
              enableReinitialize
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {(props) => {
                const { values, handleChange, handleSubmit, errors, touched } =
                  props;
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
                          id="listName"
                          name="listName"
                          value={values.listName}
                          onChange={handleChange}
                          error={touched.listName && errors.listName}
                          placeholder="Enter your list name"
                          type="text"
                          label="List name"
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
        ) : (
          <div>
            <p className="text-18-500">Save To List</p>
            <div className="d-flex justify-content-between mt-32 mb-24">
              <div>
                <p className="text-16-500 color-3333">Your list</p>
              </div>
              <div className="" onClick={() => setIsCreatingProject(true)}>
                <p className="text-14-400 color-113D">+ Add List</p>
              </div>
            </div>

            <div className="d-flex gap-2 align-items-center">
              <div>
                <CheckBox className="s-22" />
              </div>
              <div>
                <p className="text-14-400 color-3333">My New Bookmarks</p>
              </div>
            </div>

            <div className="d-flex gap-2 mt-19 align-items-center">
              <div>
                <CheckBox className="s-22" />
              </div>
              <div>
                <p className="text-14-400 color-3333">My New Bookmarks</p>
              </div>
            </div>

            <div className="d-flex justify-content-end mt-32">
              <Button btnText="Add" className="w-128 h-49" />
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default SaveTolist;
