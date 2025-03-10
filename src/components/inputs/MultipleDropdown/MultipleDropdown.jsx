import Select from "react-select";
import Label from "../Label";
import "./MultipleDropdown.scss";

const MultipleDropdown = ({
  options,
  placeholder,
  label,
  required,
  labelClass,
  value,
  id,
  onChange,
  customStyles,
  error,
}) => {
  const handleChange = (selectedOptions) => {
    const values = selectedOptions ? selectedOptions.map((opt) => opt.value) : [];
    onChange({ target: { id, value: values } }); // Update Formik values correctly
  };

  const selectedValues = options?.filter((opt) => value?.includes(opt.value));

  return (
    <div id="multipledropdown-container">
      {label && <Label label={label} required={required} labelClass={labelClass} />}
      <div>
        <Select
          id={id}
          classNamePrefix="multi-select"
          options={options}
          placeholder={placeholder || "Select"}
          value={selectedValues}
          onChange={handleChange}
          styles={customStyles || {}}
          isClearable={false}
          isMulti
        />
        {error && <div className="input-error">{error}</div>}
      </div>
    </div>
  );
};

export default MultipleDropdown;
