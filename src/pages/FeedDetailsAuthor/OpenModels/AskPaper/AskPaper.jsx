import React, { useState } from "react";
import "./AskPaper.scss";
import { Modal, TextInput } from "@/components";
import { icons } from "@/utils/constants";

import "@react-pdf-viewer/core/lib/styles/index.css";
import pdf from "../../../../assets/pdf.pdf";
import { Formik, Field, Form } from "formik";
import MultipleDropdown from "@/components/inputs/MultipleDropdown";
import { Spinner } from "react-bootstrap";
const AskPaper = ({ onHide }) => {
  const Askpaper = [
    {
      title: "Summarize the paper in a few sentences ",
    },
    {
      title: "Summarize the paper in a few sentences ",
    },
    {
      title: "Summarize the paper in a few sentences ",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal onHide={onHide} size="md" fullscreen paddingnone borderRadiusnone>
      <div id="AskPaper">
        <div className="row">
          <div className="col-8" style={{ height: "99vh" }}>
            <div className="" style={{ height: "100%" }}>
              {isLoading ? (
                <div
                  className="loader-container d-flex justify-content-center align-items-center"
                  style={{ height: "100%" }}
                >
                  <Spinner animation="border" variant="primary" />
                </div>
              ) : (
                <iframe
                  src="https://doc.rero.ch/record/294716/files/86-6-485.pdf"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  title="PDF Viewer"
                />
              )}
            </div>
          </div>

          <div className="col-4">
            <div className="right-side-conatiner d-flex flex-column justify-content-between">
              <div
                className="d-flex gap-1 mt-16"
                style={{
                  borderBottom: "1px solid #E0E9F4",
                  paddingBottom: "25px",
                }}
              >
                <div>
                  <img src={icons.pdf} alt="pdf" className="img-fluid" />
                </div>
                <div>
                  <p className="text-18-500 color-0c0c ">Ask this paper</p>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <p className="text-16-400 color-3333 text-center">
                  What would you like to know <br></br>about this paper ?
                </p>
              </div>

              <div className="ask-que">
                <div className="qua-container brave-scroll-gry">
                  {Askpaper.map((item, index) => {
                    return (
                      <div
                        className="qua d-flex justify-content-between align-items-center mt-12"
                        key={index}
                      >
                        <div>
                          <p className="text-16-400 color-3333">{item.title}</p>
                        </div>
                        <div>
                          <img
                            src={icons.rightsidearrow}
                            alt="rightsidearrow"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="">
                  <Formik
                    initialValues={{ question: "" }}
                    onSubmit={(values) => {}}
                  >
                    {({ setFieldValue }) => (
                      <Form className="d-flex align-items-center custom-input-group mt-28 mb-28 ">
                        <Field
                          type="text"
                          name="question"
                          className="form-control custom-input"
                          placeholder="Ask this paper..."
                          onChange={(e) =>
                            setFieldValue("question", e.target.value)
                          }
                        />

                        <button type="submit" className="custom-button">
                          <img
                            src={icons.whiterightarrow}
                            alt="rightsidearrow"
                            className="img-fluid"
                          />
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AskPaper;
