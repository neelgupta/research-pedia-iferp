import { Button, Modal } from "@/components";
import { icons } from "@/utils/constants";
import React from "react";

const Share = ({ onHide }) => {
  return (
    <Modal onHide={onHide} size="md">
      <div id="SaveTolist">
        <div>
          <p className="text-18-500">Share To</p>
        </div>
        <div className="d-flex justify-content-center gap-3 mt-32">
          <div>
            <img src={icons.linkedin} alt="linkedin" />
          </div>
          <div>
            <img src={icons.facebook} alt="linkedin" />
          </div>
          <div>
            <img src={icons.X} alt="linkedin" />
          </div>
        </div>
        <div className="d-flex justify-content-center gap-3 mt-22">
          <div>
            <img src={icons.whatsapp} alt="linkedin" />
          </div>
          <div>
            <img src={icons.emailicon} alt="linkedin" />
          </div>
          <div>
            <img src={icons.url} alt="linkedin" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Share;
