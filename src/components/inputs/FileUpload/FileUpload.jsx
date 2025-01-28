import { useEffect, useState } from "react";
import Label from "../Label";
import { icons } from "utils/constants";
import { useDispatch } from "react-redux";
import { getDataFromLocalStorage } from "utils/helpers";
import "./FileUpload.scss";
import { throwError } from "@/store/globalSlice";
import { handleUploadImage } from "@/store/commonSlice/imageUploderSlice";

const FileUpload = ({
  error,
  onChange,
  id,
  fileText, 
  fileType,
  disabled,
  label,
  isRequired,
  labelClass,
  acceptType,
  placeholder,
  text,
  value
}) => {
  const dispatch = useDispatch();
  const [fileName, setFileName] = useState("");
  
  const getBase64 = (file, res) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      res(reader.result);
    };
    reader.onerror = function (error) {};
  };

  const handelOnChange = async(e) => {
    const file = e.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      const uploadFile = await dispatch(handleUploadImage(formData));
      const imageUrl = uploadFile?.data?.response?.imageUrl;
      if (imageUrl) {
        onChange(imageUrl);
      }
      setIsUploading(false);
    }
    // if (file) {
    //   let fileName = file["name"];
    //   let fileType = file["type"]?.split("/")?.pop();
    //   let isVideo = ["mp4"].includes(fileType);
    //   let maxVideoSize =
    //     getDataFromLocalStorage("user_type") === "0" ? 100000000 : 30000000;
    //   let maxFileSize = 10000000;
    //   let isInvalidaFileSize = isVideo
    //     ? file?.size > maxVideoSize
    //     : file?.size > maxFileSize;
    //   if (acceptType) {
    //     if (!acceptType.includes(fileType)) {
    //       dispatch(
    //         throwError({
    //           message: "Invalid file selected",
    //         })
    //       );
    //       onChange({
    //         target: { id: id, value: "", fileName: "" },
    //       });
    //       return;
    //     }
    //   }
    //   if (isInvalidaFileSize) {
    //     dispatch(
    //       throwError({
    //         message: "File size is too large.",
    //       })
    //     );
    //     onChange({
    //       target: { id: id, value: "", fileName: "" },
    //     });
    //     return;
    //   }
    //   getBase64(file, (result) => {
    //     setFileName(fileName);
    //     onChange({
    //       target: { id: id, value: result, fileName: fileName, file: file },
    //     });
    //   });
    // }
  };
  useEffect(() => {
    setFileName(fileText);
  }, [fileText]);

  const acceptFileType = (fileType) => {
    let returnValue = "";
    switch (fileType) {
      case "image":
        returnValue = "image/png, image/jpeg, image/jpg";
        break;
      case "file":
        returnValue = "";
        break;
      case "all":
        returnValue = "";
        break;

      default:
        returnValue = "";
        break;
    }
    return returnValue;
  };
  const inputFileType = acceptFileType(fileType || "");
  return (
    <div id="file-upload-container">
      {label && (
        <Label label={label} required={isRequired} className={labelClass} />
      )}
      <div
        className={`file-upload-data ${disabled ? " disabled-file-block" : ""}`}
      >
        <div className="file-upload-block">
          <span
            className={text ? "new-file-upload-input" : "file-upload-input"}
          >
            <div className="choose_file">
              <span className="btn-block">
                <img src={icons.uploadIcons}  alt="upload" />
              </span>
            </div>
          </span>
          <span className={"new-file-upload-name"}>
            {fileName ? fileName : "Profile photo"}
          </span>
        </div>

        <input
          placeholder={placeholder}
          name="Select File"
          type="file"
          onChange={handelOnChange}
          accept={inputFileType}
        />
      </div>
      {error && (
        <div className="text-13-400 pt-1">
          <span style={{ color: "red" }}>{error}</span>
        </div>
      )}
    </div>
  );
};
export default FileUpload;
