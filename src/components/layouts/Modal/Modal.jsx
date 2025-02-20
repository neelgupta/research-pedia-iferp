import BootrsapModal from "react-bootstrap/Modal";
import "./Modal.scss";
import { icons } from "@/utils/constants";

const Modal = ({
  children,
  onHide,
  width,
  title,
  size,
  fullscreen,
  largeClose,
  hideCloseButton,
  isCloseOutside,
  textClass,
  isClose = true,
  paddingnone,
  borderRadiusnone,
}) => {
  return (
    <BootrsapModal
      className="brave-scroll modal-block-custom"
      onHide={onHide}
      size={size || ""}
      fullscreen={fullscreen}
      centered
      backdrop={isCloseOutside ? "static" : "true"}
      show
    >
      <BootrsapModal.Body
        id={`modal-container`}
        style={{
          maxWidth: width ? width : "",
          padding: paddingnone ? "0px" : "",
          paddingRight: paddingnone ? "16px" : "",
          borderRadius: borderRadiusnone ? "0px" : "",
        }}
      >
        {isClose && !hideCloseButton && (
          <>
            {largeClose ? (
              <div className="modal-close-button pointer" onClick={onHide}>
                <img src={icons.closeIcons} className="h-45" alt="close" />
              </div>
            ) : (
              <div className="modal-close-button pointer" onClick={onHide}>
                <img src={icons.closeIcons} className="h-24 w-24" alt="close" />
              </div>
            )}
          </>
        )}
        {title && (
          <div
            className={`col-md-12 ${
              textClass || "text-24-600 color-1a1a"
            }  cpb-20 cps-26 cpe-26 color-2749 bb-edf0`}
          >
            {title}
          </div>
        )}

        {children}
      </BootrsapModal.Body>
    </BootrsapModal>
  );
};

export default Modal;
