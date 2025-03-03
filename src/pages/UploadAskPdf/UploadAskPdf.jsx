import { Button } from "@/components";
import { icons } from "@/utils/constants";
import React, { useState } from "react";
import AskPaper from "../FeedDetailsAuthor/OpenModels/AskPaper";
import { chatwithdoc, uploadfile } from "@/store/userSlice/projectSlice";
import { useDispatch } from "react-redux";

const UploadAskPdf = () => {
  const [model, setModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const dispatch = useDispatch();

  console.log(pdfUrl, "pdfUrl");

  const uploadPdf = async (file) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await dispatch(uploadfile(formData));
      console.log(res, "response");
      if (res?.data) {
        const url = URL.createObjectURL(file);
        setPdfUrl(url);
        setModel(true);
      }
    } catch (error) {
      console.error("Error uploading PDF:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadPdf(file);
      event.target.value = ""; // Reset input after selecting file
    }
  };

  const onHide = () => {
    setModel(false);
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div className="p-4 text-center">
          <div style={{ borderBottom: "1px solid #E0E9F4", width: "500px" }}>
            <p className="text-24-600 color-0303 pb-18">Ask Paper</p>
          </div>
          <img src={icons.Askpaper} alt="Askpaper" className="fluid-img" />
          <div className="d-flex justify-content-center">
            <Button
              btnText="Upload PDF"
              leftIcon={icons.whitepdf}
              rightIcon={icons.whiteAdd}
              className="w-199 h-49"
              onClick={() => document.getElementById("fileInput").click()}
              loading={loading}
            />
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              accept="application/pdf"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>

      {model && <AskPaper onHide={onHide} pdfUrl={pdfUrl} />}
    </>
  );
};

export default UploadAskPdf;
