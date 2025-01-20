
import React, { useState } from 'react';
import "./Security.scss";
import Breadcrumb from '@/components/layouts/Breadcrumb';
import { Button, TextInput } from '@/components';
import { icons } from '@/utils/constants/icon';
import ReactQR from 'react-qr-code'; // Import the react-qr-code component

const Security = () => {
  const [openQr, setOpenQr] = useState(false);
  const [qrText, setQrText] = useState('hello'); // State to store the text for the QR code

  const openQrcode = () => {

    setOpenQr(true);
  };

  const handleQrTextChange = (e) => {
    setQrText(e.target.value); // Update QR text when the input changes
  };

  return (
    <div>
      <div id="Security-container">
        <div>
          <div className='mb-14'>
            <Breadcrumb
              list={[{ title: "Site Settings" }, { title: "Category & Topics" }]}
              className="text-16-400"
              isGreen
            />
          </div>
          <div className='categorytopics-title'>
            <h1>Security</h1>
          </div>
          <div className='add-rearches'>
            <div className='rearch-form border'>
              <div className='rearch-title'>
                <h1>Add Research Category & Topics</h1>
              </div>
              <div className='text-add'>
                <h1>Google Authenticator</h1>
              </div>
              {openQr ? (
                <>
                  <div className='qr-code-container'>
                  
                    {qrText && <ReactQR value={qrText}  className='ps-26'/>}
                  </div>
                  <div className='ps-26'>
                    <TextInput
                      id="qrcodetext"
                      name="qrcodetext"
                      placeholder="QR Code Text"
                      type="text"
                      value={qrText}
                      onChange={handleQrTextChange} 
                      className='w-200 bg-EBEC ps-26'
                    />
                  </div>
                  <div className='Qr-genrate d-flex mt-16 ms-26 mb-26'>
                    <Button btnText="Continue" className="BWP" />
                    <span className='ps-12 d-flex align-items-center'>Generate Code</span>
                  </div>
                </>
              ) : (
                <div className="save-button d-flex justify-content-start align-items-end">
                  <Button btnText="Save" onClick={openQrcode} className="BWP" />
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
