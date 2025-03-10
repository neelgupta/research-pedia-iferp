import React, { useRef, useState } from "react";
import Button from "../Button";
import "./MessageSendInput.scss";
import { icons } from "@/utils/constants";

const MessageSendInput = ({
  placeholder,
  onClick,
  onChange,
  onFileUpload,
  value,
}) => {
  const [selectedFile, setSelectedFile] = useState(null); // Track selected file
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      onFileUpload(file);
    }
  };

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onClick();
      setSelectedFile(null);
    }
  };

  return (
    <>
      <div className="selected-file-container">
        {selectedFile && (
          <div className="file-card">
            <div className="file-card-info ">
              <img
                src={icons.fileDocsIcons}
                alt="file-icon"
                className="file-card-icon"
              />
              <span>{selectedFile.name}</span>
              <div>
                <button
                  className="remove-file-btn"
                  onClick={() => setSelectedFile(null)}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="message-sendInput-container">
        {/* Text input */}
        <input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className="text-input"
          onKeyDown={handleKeyDown}
          disabled={selectedFile}
        />

        <div>
          <div className="file-upload-icon">
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png,.doc,.docx,.pdf,.mp4"
            />
            <img
              src={icons.AttachDocument}
              className="fit-content"
              height={30}
              width={30}
              alt="Attach Document"
              onClick={handleIconClick}
            />
          </div>

          <div className="btn-send">
            <Button btnStyle="og h-43" btnText="Send" onClick={onClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageSendInput;
