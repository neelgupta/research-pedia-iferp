import { Button } from "@/components";
import { icons } from "@/utils/constants";
import React, { useState } from "react";
import AskPaper from "../FeedDetailsAuthor/OpenModels/AskPaper";

const UploadAskPdf = () => {
  const [model, setmodel] = useState(false);
  const onHide = () => {
    setmodel(false);
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div className="p-4 text-center">
          <div
            className=""
            style={{ borderBottom: "1px solid #E0E9F4", width: "500px" }}
          >
            <p className="text-24-600 color-0303 pb-18">Ask Paper</p>
          </div>
          <img src={icons.Askpaper} alt="Askpaper" className="fluid-img" />
          <div className="d-flex justify-content-center">
            <Button
              btnText="Upload PDF"
              leftIcon={icons.whitepdf}
              rightIcon={icons.whiteAdd}
              className="w-199 h-49"
              onClick={() => setmodel(true)}
            />
          </div>
        </div>
      </div>

      {model && <AskPaper onHide={onHide} />}
    </>
  );
};

export default UploadAskPdf;
