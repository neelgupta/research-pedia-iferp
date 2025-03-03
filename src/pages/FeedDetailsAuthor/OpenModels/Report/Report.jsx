import { Button, Modal } from "@/components";
import { icons } from "@/utils/constants";
import { Formik, Form, Field } from "formik";
import React from "react";
import "./Report.scss";
const Report = ({ onHide }) => {
  const reasons = [
    { id: "spam", text: "It's inappropriate or spam", icon: icons.importanc1 },
    {
      id: "copyright",
      text: "It's copyrighted material",
      icon: icons.copyrites1,
    },
    {
      id: "not_author",
      text: "The uploader is not an author",
      icon: icons.personupload1,
    },
    { id: "other", text: "Something else", icon: icons.question1 },
  ];

  return (
    <Modal onHide={onHide} size="md">
      <div id="Report">
        <div>
          <p className="text-18-500 color-3333">
            What’s the problem with this paper ?
          </p>
        </div>
        <div>
          <p className="text-16-400 color-3333">
            We use your feedback to show you, and other academics, only high
            quality papers.{" "}
          </p>
        </div>

        <Formik
          initialValues={{ reason: "" }}
          onSubmit={(values) => {
            console.log("Selected Reason:", values.reason);
          }}
        >
          {({ setFieldValue, values }) => (
            <Form>
              {reasons.map((reason) => (
                <div
                  key={reason.id}
                  className={`d-flex gap-3 align-items-center mt-8 ${
                    values.reason === reason.id ? "selected-reason" : ""
                  }`}
                  onClick={() => setFieldValue("reason", reason.id)}
                  style={{ cursor: "pointer" }}
                >
                  <div>
                    <img src={reason.icon} alt={reason.id} />
                  </div>
                  <div>
                    <p className="text-14-400 color-113D">{reason.text}</p>
                  </div>
                </div>
              ))}

              <div className="d-flex justify-content-end mt-3">
                <Button
                  type="submit"
                  btnText="Submit"
                  className="w-128 h-49"
                  disabled={!values.reason}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default Report;
