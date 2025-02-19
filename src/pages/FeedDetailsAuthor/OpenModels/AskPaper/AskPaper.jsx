import React from "react";
import "./AskPaper.scss";
import { Modal, TextInput } from "@/components";
import { icons } from "@/utils/constants";

import "@react-pdf-viewer/core/lib/styles/index.css";
import pdf from "../../../../assets/pdf.pdf";
const AskPaper = ({ onHide }) => {
  console.log("pdf", pdf);
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

  return (
    <Modal onHide={onHide} size="md" fullscreen>
      <div id="AskPaper" style={{ padding: "0px" }}>
        <div className="row">
          <div className="col-8" style={{ height: "95vh", padding: 0 }}>
            <div style={{ height: "100%" }}>
              <iframe
                src="https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf"
                width="100%"
                height="100%"
                style={{ border: "none" }}
                title="PDF Viewer"
              />
            </div>
          </div>

          <div className="col-4">
            <div className="right-side-conatiner d-flex flex-column justify-content-between">
              <div className="d-flex gap-1">
                <div>
                  <img src={icons.pdf} alt="pdf" className="img-fluid" />
                </div>
                <div>
                  <p className="text-18-500 color-0c0c">Ask this paper</p>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <p className="text-16-400 color-3333 text-center">
                  What would you like to know <br></br>about this paper ?
                </p>
              </div>
              <div className="ask-que">
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

                <div className="d-flex align-items-center custom-input-group mt-28">
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Ask this paper..."
                  />
                  <button className="custom-button">
                    <img
                      src={icons.whiterightarrow}
                      alt="rightsidearrow"
                      className="img-fluid"
                    />
                  </button>
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
