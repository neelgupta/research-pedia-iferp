import { useDispatch, useSelector } from "react-redux";
import "./RightCanvas.scss";
import { setIsRightSide, setRightSideObj } from "@/store/globalSlice";
import { Offcanvas } from "react-bootstrap";
import { icons } from "@/utils/constants";

const RightCanvas = () => {
  const reduxData = useSelector((state) => state.global);
  const { rightSideObj, isRightSide } = reduxData || {};

  const dispatch = useDispatch();
  return (
    <>
      {isRightSide && (
        <Offcanvas
          placement="end"
          show={isRightSide}
          onHide={() => {
            dispatch(setIsRightSide(false));
            dispatch(
              setRightSideObj({
                title: "",
              })
            );
          }}
          responsive="xl"
          style={{
            maxWidth: "280px",
          }}
        >
          <Offcanvas.Body>
            <div className="right-canvas-container">
              <div className="top-box mb-28">
                <div className="right-canvas-title">{rightSideObj.title}</div>
                <img
                  src={icons.closeIcons}
                  alt="close-img"
                  loading="lazy"
                  className="h-18 w-18 pointer"
                  onClick={() => {
                    dispatch(setIsRightSide(false));
                    dispatch(
                      setRightSideObj({
                        title: "",
                      })
                    );
                  }}
                />
              </div>
              {rightSideObj?.title === "My Network" && (
                <>
                  <div className="content mb-12">
                    <h6 className="f-text">Followers</h6>
                    <span className="f-count">0</span>
                  </div>
                  <div className="content mb-12">
                    <h6 className="f-text">Following</h6>
                    <span className="f-count">1</span>
                  </div>
                  <div className="content">
                    <h6 className="f-text">Suggested</h6>
                    <span className="f-count">18+</span>
                  </div>
                </>
              )}
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
};

export default RightCanvas;
