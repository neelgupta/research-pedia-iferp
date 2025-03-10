import { Roundedloader } from "components";
import "./Button.scss";

const Button = ({
  btnText,
  btnStyle,
  btnType,
  onClick,
  className,
  rightIcon,
  leftIcon,
  disabled,
  loading,
  leftIconClass,
  rightIconClass,
  textClass,
  type,
  groupIcons,
}) => {
  return (
    <div id="button-container">
      <button
        className={`btn-block ${btnStyle ? btnStyle : "PD"} ${
          className ? className : ""
        }`}
        onClick={onClick}
        type={btnType || "button"}
        disabled={disabled}
      >
        <span className="d-flex align-items-center justify-content-center gap-2">
          {leftIcon && (
            <span className="h-18 f-center">
              <img
                src={leftIcon}
                alt="left-icon"
                className={`fit-image ${leftIconClass}`}
              />
            </span>
          )}
          {btnText && (
            <span className={`${textClass || "font-gilroy-sb text-14-500"}`}>
              {btnText}
            </span>
          )}
          {rightIcon && (
            <span className="h-18 f-center">
              <img
                src={rightIcon}
                alt="right-icon"
                className={`fit-image ${rightIconClass}`}
              />
            </span>
          )}
          {groupIcons && (
            <span className="d-flex align-items-center gap-2">
              {groupIcons.map((iconObj, index) => (
                <span key={index} className="h-18 f-center">
                  <img
                    src={iconObj.icon}
                    alt={`group-icon-${index}`}
                    className="fit-image"
                  />
                </span>
              ))}
            </span>
          )}

          {loading && (
            <span>
              <Roundedloader
                type={
                  type
                    ? type
                    : ["PD", "RD"].includes(btnStyle ? btnStyle : "PD")
                      ? "L"
                      : "R"
                }
              />
            </span>
          )}
        </span>
      </button>
    </div>
  );
};

export default Button;
