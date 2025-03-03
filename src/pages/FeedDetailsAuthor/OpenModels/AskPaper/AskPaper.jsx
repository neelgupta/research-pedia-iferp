import React, { useEffect, useState } from "react";
import "./AskPaper.scss";
import { Modal } from "@/components";
import { icons } from "@/utils/constants";

import "@react-pdf-viewer/core/lib/styles/index.css";
import pdf from "../../../../assets/pdf.pdf";
import { Formik, Field, Form } from "formik";
import { Spinner } from "react-bootstrap";
import { chatwithdoc, padfilelink } from "@/store/userSlice/projectSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const AskPaper = ({ onHide, pdfUrl }) => {
  const Askpaper = [
    {
      title: "Summarize the paper in a few sentences ",
    },
    {
      title: "Where there any conflicts of interest? ",
    },
    {
      title: "Did the authors mention any limitation?  ",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [onchangeQuestion, setonchangeQuestion] = useState("");
  const [question, setQuestion] = useState("");

  const dispatch = useDispatch();
  const fetchrespos = async (Question) => {
    try {
      const res = await dispatch(chatwithdoc(Question));
      console.log("101 res", res?.data?.response);
      // setrecentSearches(res?.data?.response);
    } catch (error) {
      console.error("Error fetching audio:", error);
    }
  };

  return (
    <Modal onHide={onHide} size="md" fullscreen paddingnone borderRadiusnone>
      <div id="AskPaper">
        <div className="row">
          <div className="col-8" style={{ height: "99vh" }}>
            <div style={{ height: "100%" }}>
              {isLoading ? (
                <div
                  className="loader-container d-flex justify-content-center align-items-center "
                  style={{ height: "100%" }}
                >
                  <Spinner animation="border" variant="primary" />
                </div>
              ) : (
                <iframe
                  // src="https://doc.rero.ch/record/294716/files/86-6-485.pdf"
                  src={pdfUrl}
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
                  What would you like to know <br></br>about this paper?
                </p>
              </div>

              <div className="ask-que">
                <div className="qua-container brave-scroll-gry">
                  {!onchangeQuestion &&
                    !question &&
                    Askpaper.map((item, index) => {
                      return (
                        <div
                          className="qua d-flex justify-content-between align-items-center mt-12"
                          key={index}
                          onClick={() => {
                            fetchrespos(item.title);
                            setQuestion(item.title);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <div>
                            <p className="text-16-400 color-3333">
                              {item.title}
                            </p>
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

                {/* <div className="response d-flex justify-content-start">
                  <p className="text">response data</p>
                </div> */}

                <div className="response d-flex justify-content-end">
                  <p className="text">{question}</p>
                </div>

                <div className="">
                  <Formik
                    initialValues={{ question: question || "" }}
                    onSubmit={(values, { resetForm }) => {
                      setQuestion(values.question);
                      resetForm();
                      fetchrespos(values.question);
                    }}
                  >
                    {({ setFieldValue, values }) => (
                      <Form className="d-flex align-items-center custom-input-group mt-28 mb-28 ">
                        <Field
                          type="text"
                          name="question"
                          className="form-control custom-input"
                          placeholder="Ask this paper..."
                          onChange={(e) => {
                            setFieldValue("question", e.target.value);
                            setonchangeQuestion(e.target.value);
                          }}
                          value={values.question}
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
