import React from "react";
import "./ReferenceManager.scss";
import { icons } from "@/utils/constants";
import { Modal } from "@/components";
const ReferenceManager = ({ onHide }) => {
  return (
    <Modal onHide={onHide} size="md">
      <div id="ReferenceManager">
        <div>
          <p className="text-18-500 color-0303">Export To Reference Manager</p>
        </div>
        <div className="h-222">
          <div>
            <p className="text-16-400 color-3333">
              Integrate your reference manager account to export papers from
              Research Pedia
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <div className="border d-flex justify-content-center align-items-center px-14 py-31">
              <img
                src={icons.referenceimg1}
                alt="referenceimg1"
                className="img-fluid"
              />
            </div>
            <div className="border d-flex justify-content-center align-items-center px-14 py-16">
              <img
                src={icons.referenceimg2}
                alt="referenceimg1"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ReferenceManager;
