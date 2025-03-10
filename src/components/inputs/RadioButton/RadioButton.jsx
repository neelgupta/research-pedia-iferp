import "./RadioButton.scss";

const RadioButton = ({ checked, onChange, name }) => {
  return (
    <div className={`${"radio-button-container"}`}>
      <input
        type="radio"
        name={name}
        value="test"
        checked={checked}
        onChange={onChange}
      />
      <div className="radio-circle"></div>
    </div>
  );
};

export default RadioButton;
