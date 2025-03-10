import { Label } from "components";
import { trimLeftSpace } from "utils/helpers";
import "./TextArea.scss";

const TextArea = ({
  label,
  required,
  labelClass,
  placeholder,
  onChange,
  id,
  rows,
  name,
  error,
  value,
  onBlur,
  disabled,
  type,
  numeric,
  maxLength,
  className,
  startClass,
  isEdit,
  resize,
}) => {
  const textareaStyles = resize ? { resize: "none" } : {};
  return (
    <div id="textarea-container">
      {label && (
        <Label label={label} required={required} labelClass={labelClass} />
      )}
      <div className={`text-area-container ${className}`}>
        <div className="text-area-block">
          <textarea
            value={value}
            className="text-area brave-scroll"
            rows={rows || "3"}
            placeholder={placeholder}
            onChange={(e) => {
              onChange({
                target: {
                  id: id,
                  value: trimLeftSpace(e.target.value),
                },
              });
            }}
            style={textareaStyles}
          />
        </div>
        {error && <div className="input-error">{error}</div>}
      </div>
    </div>
  );
};

export default TextArea;
