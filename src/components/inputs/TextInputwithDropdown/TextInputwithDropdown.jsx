import { useEffect, useState } from "react";
import { Label } from "components";
import { trimLeftSpace } from "utils/helpers";
import "./TextInputwithDropdown.scss";

const TextInputwithDropdown = ({
  id,
  name,
  error,
  label,
  value,
  onBlur,
  disabled,
  onChange,
  required,
  placeholder,
  type,
  labelClass,
  numeric,
  maxLength,
  className,
  startClass,
  isShowPass,
  dropdownOptions = [],
  onDropdownChange,
  isphone,
  isname,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedOption, setSelectedOption] = useState("+91");

  useEffect(() => {
    setSelectedOption("+91");
  }, []);

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
    onDropdownChange && onDropdownChange(event.target.value);
  };

  return (
    <div id="textInputwithDropdown-container">
      {label && (
        <Label
          label={label}
          required={required}
          labelClass={labelClass}
          startClass={startClass}
        />
      )}
      <div className="text-input-container">
        <div className="text-input-block">
          <select
            className="dropdown-select"
            onChange={handleDropdownChange}
            value={selectedOption}
          >
            <option value="" disabled>
              <span className="text-14-400 color-3333">
                {" "}
                {isphone && "+ 91"} {isname && "Dr"}{" "}
              </span>
            </option>
            {dropdownOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.dial_code}
              </option>
            ))}
          </select>
          <input
            id={id}
            name={name}
            className={className}
            type={isShowPass && showPassword ? "text" : type || "text"}
            value={value}
            onBlur={onBlur}
            autoComplete="new-password"
            onChange={(e) => {
              if (numeric) {
                e.target.value = e.target.value.replace(
                  /^(0|[^1-9][0-9]*)$/,
                  ""
                );
              }
              onChange({
                target: {
                  id: id,
                  value: trimLeftSpace(e.target.value),
                },
              });
            }}
            disabled={disabled}
            placeholder={placeholder}
            inputMode={numeric ? "numeric" : undefined}
            pattern={numeric ? "[0-9]*" : undefined}
            maxLength={maxLength}
          />

          {/* Dropdown Menu */}
        </div>
        {error && <div className="input-error">{error}</div>}
      </div>
    </div>
  );
};

export default TextInputwithDropdown;
