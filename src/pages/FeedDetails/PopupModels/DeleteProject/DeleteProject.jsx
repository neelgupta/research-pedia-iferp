import { Button, Modal, TextInput } from "@/components";
import {
  setIsDeleteProjectselectOpen,
  setIsEditProjectselectOpen,
} from "@/store/globalSlice";
import { icons } from "@/utils/constants";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
const DeleteProject = () => {
  const dispatch = useDispatch();
  const onHide = () => {
    dispatch(setIsDeleteProjectselectOpen(false));
  };
  const selectedProject = useSelector((state) => state.global.selectedProject);
  return (
    <Modal onHide={onHide} size="md">
      <div>
        <div>
          <p className="text-18-500 color-0303">Delete {selectedProject} </p>
        </div>

        <div className="mt-32 ">
          <div>
            <p className="text-16-500 color-0303 mb-16">
              Are you sure you want to delete this project?
            </p>
          </div>
          <div>
            <p className="text-16-400 color-3333">
              You can also recover the project within 7 days from the date of
              deletion
            </p>
          </div>
        </div>
        <div className="mt-16  d-flex justify-content-end">
          <Button
            btnText="Delete"
            className="w-128 h-49 br-12 "
            btnStyle="Oo"
            onClick={() => onHide()}
          />
        </div>
      </div>
    </Modal>
  );
};

export default DeleteProject;
