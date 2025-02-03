import React, { useState } from "react";
import { useField } from "formik";
import "./ImageUpload.scss"
import { icons } from "@/utils/constants";
const ImageUpload = ({ label , error, ...props }) => {
  const [field, , helpers] = useField(props);
  const [image, setImage] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      previewImage(file);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      previewImage(file);
    }
  };

  const previewImage = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      helpers.setValue(file); 
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <div
        className="image-upload-container"
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        {image ? (
          <img src={image} alt="Preview" className="preview-image" />
        ) : (
          <div className="upload-placeholder">
            <img src={icons.uploadimg} alt="uploade-img" className="img-fluid"/>
            <p>Drag & drop to upload</p>
            <label className="browse-text">
              or <span>browse</span>
              <input type="file" onChange={handleFileChange} hidden />
            </label>
          </div>
        )}
      
      </div>
      {error && <div className="input-error">{error}</div>}
    </div>
  );
};

export default ImageUpload;
