import { Label } from "components";
import Select from "react-select";
import "./Dropdown.scss";

const Dropdown = ({
  label,
  required,
  optionKey,
  optionLabel,
  value,
  options,
  onChange,
  id,
  name,
  placeholder,
  disabled,
  isLoading,
  isClearable,
  isSearchable,
  onMenuScrollToBottom,
  onInputChange,
  error,
  info,
  startClass,
  labelClass,
  className,
  onlyone,
}) => {
  const optId = optionKey || "id";
  const optVal = optionLabel || "label";

  let fillValue = options?.find((o) => `${o?.[optId]}` === `${value}`);

  if (onlyone && fillValue) {
    const pTagChildren = fillValue[optVal]?.props?.children?.[0];
    fillValue = {
      ...fillValue,
      [optVal]: pTagChildren || fillValue[optVal],
    };
  }

  if (!fillValue) {
    fillValue = null;
  }

  return (
    <div id={`dropdown-container`}>
      {label && (
        <Label
          label={label}
          required={required}
          info={info}
          startClass={startClass}
          labelClass={labelClass}
        />
      )}
      <div className="select-input-container">
        <Select
          getOptionValue={(option) => option[optId]}
          placeholder={placeholder || ""}
          className={`basic-single ${
            value ? "" : "placehoder-val"
          } ${className}`}
          classNamePrefix="select"
          value={fillValue}
          isDisabled={disabled}
          isLoading={isLoading}
          name={name}
          options={options}
          isClearable={isClearable}
          isSearchable={isSearchable}
          onMenuScrollToBottom={onMenuScrollToBottom}
          getOptionLabel={(option) => {
            return option[optVal];
          }}
          onInputChange={(text, event) => {
            if (onInputChange && event?.action === "input-change") {
              onInputChange(text);
            }
          }}
          onChange={(e) => {
            onChange({
              target: {
                id: id,
                value: e ? e[optId] : "",
                data: e,
              },
            });
          }}
          
          styles={{
            option: (base, { data }) => ({
              ...base,
              color:
                data.value === "high"
                  ? "#FA4520"
                  : data.value === "medium"
                    ? "#B89137"
                    : data.value === "low"
                      ? "#178368"
                      : "var(--0000)",
              backgroundColor: "transparent",

              "&:hover": {
                backgroundColor: "transparent",
              },
            }),
            singleValue: (base) => ({
              ...base,
              color: className,
            }),
          }}
          inputProps={{ autoComplete: "off" }}
        />
        {error && <div className="input-error">{error}</div>}
      </div>
    </div>
  );
};

export default Dropdown;
