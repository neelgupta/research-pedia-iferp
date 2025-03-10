import { Button, Modal } from "@/components";
import { icons } from "@/utils/constants";
import React, { useState } from "react";
import "./SelectProject.scss";
import {
  setIsCreateProjectselectOpen,
  setIsDeleteProjectselectOpen,
  setIsEditProjectselectOpen,
  setIsProjectselectOpen,
  setSelectedProject,
} from "@/store/globalSlice";
import { useDispatch, useSelector } from "react-redux";

const SelectProject = ({ onHide }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  const project = [
    { title: "Project 1" },
    { title: "Project 2" },
    { title: "Project 3" },
    { title: "Project 4" },
  ];

  const dispatch = useDispatch();

  const handleBtn = () => {
    dispatch(setIsCreateProjectselectOpen(true));
    onHide();
  };

  const handleeditopen = (project) => {
    dispatch(setSelectedProject(project));
    dispatch(setIsEditProjectselectOpen(true));
    onHide();
  };
  const handledeleteopen = () => {
    dispatch(setIsDeleteProjectselectOpen(true));
    onHide();
  };
  return (
    <Modal size="md" onHide={onHide}>
      <div id="selectproject-conatiner">
        <div>
          <p className="text-18-500 color-0303">Select Project</p>
        </div>

        <div className="selectproject brave-scroll-gry">
          {project.map((item, index) => {
            const isActive = activeProjectIndex === index;

            return (
              <div
                key={index}
                className={`project ${isActive ? "activeproject" : ""} mt-12`}
                onClick={() => setActiveProjectIndex(index)}
              >
                <div className="d-flex justify-content-between">
                  <div
                    className={`text-16-400 project-text ${isActive ? "activeproject-text" : ""}`}
                  >
                    {item.title}
                  </div>
                  <div className="d-flex gap-2">
                    <div
                      onClick={() => handleeditopen(item.title)}
                      style={{ cursor: "pointer" }}
                    >
                      <img src={icons.activeedit} className="flex-fluid" />
                    </div>
                    <div>
                      {isActive ? (
                        <img
                          src={icons.activedelete}
                          className="flex-fluid"
                          onClick={() => handledeleteopen()}
                          style={{ cursor: "pointer" }}
                        />
                      ) : (
                        <img
                          src={icons.disactivedelete}
                          className="flex-fluid"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-32 d-flex justify-content-end">
          <Button
            btnText="Add New"
            className="w-128 h-49"
            onClick={() => handleBtn()}
          />
        </div>
      </div>
    </Modal>
  );
};

export default SelectProject;
