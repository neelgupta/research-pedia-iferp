import React, { useEffect, useState } from "react";
import "./Security.scss";
import Breadcrumb from "@/components/layouts/Breadcrumb";
import { Button, TextInput } from "@/components";
import { icons } from "@/utils/constants/icon";
import ReactQR from "react-qr-code";
import { useDispatch } from "react-redux";
import {
  getGeneratedCode,
  handleDownLoadExcelSheet,
  handleGenerateCode,
} from "@/store/adminSlice/twoFASlice";
import { getDataFromLocalStorage, handleCopy } from "@/utils/helpers";

const Security = () => {
  const dispatch = useDispatch();
  const [openQr, setOpenQr] = useState(false);
  const [qrText, setQrText] = useState("");

  const openQrcode = async () => {
    const result = await dispatch(handleGenerateCode());
    if (result?.status === 201) {
      setOpenQr(true);
      const twoFaCode = result?.data?.response?.authCode;
      setQrText(twoFaCode);
    }
  };

  const fetchGeneratedCode = async()=>{
    const result = await dispatch(getGeneratedCode());
    setQrText(result.data.response.twoFACode)
    setOpenQr(result.data.response.isGenerated)
  }

  useEffect(() => {
    fetchGeneratedCode()
  }, []);

  const handleDownloadExcel = async () => {
    try {
      const response = await dispatch(handleDownLoadExcelSheet());

      if (response && response.data) {
        const blob = new Blob([response.data], {
          type: "text/csv",
        });

        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Securitycode.csv");

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        console.error("No file data received");
      }
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <div>
      <div id="Security-container">
        <div>
          <div className="mb-14">
            <Breadcrumb
              list={[
                { title: "Site Settings" },
                { title: "Category & Topics" },
              ]}
              className="text-16-400"
              isGreen
            />
          </div>
          <div className="categorytopics-title">
            <h1>Security</h1>
          </div>
          <div className="add-rearches">
            <div className="rearch-form border">
              <div className="rearch-title">
                <h1>Add Research Category & Topics</h1>
              </div>
              <div className="text-add">
                <h1>Google Authenticator</h1>
              </div>
              {openQr ? (
                <>
                  <div className="qr-code-container">
                    {qrText && <ReactQR value={qrText} className="ps-26" />}
                  </div>
                  <div className="ps-26 d-flex gap-4">
                    <TextInput
                      id="qrcodetext"
                      name="qrcodetext"
                      placeholder="QR Code Text"
                      type="text"
                      value={qrText}
                      className="w-200 bg-EBEC ps-26"
                      disabled={true}
                    />
                    <div
                      className="fa-center gap-2 pointer"
                      onClick={() => {
                        dispatch(handleCopy(qrText));
                      }}
                    >
                    
                      <img src={icons?.copyIcons} alt="copy-icons" />
                    </div>
                  </div>
                  <div className="Qr-genrate d-flex mt-16 ms-26 mb-26">
                    <Button
                      btnText="Download CSV File"
                      className="BWP"
                      onClick={handleDownloadExcel}
                    />
                    <span
                      className="ps-12 d-flex align-items-center pointer"
                      onClick={openQrcode}
                    >
                      Generate Code
                    </span>
                  </div>
                </>
              ) : (
                <div className="save-button d-flex justify-content-start align-items-end">
                  <Button
                    btnText="Activate"
                    onClick={openQrcode}
                    className="BWP"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
