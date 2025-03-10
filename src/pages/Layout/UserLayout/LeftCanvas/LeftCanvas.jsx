import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./LeftCanvas.scss";
import { setIsUserSide } from "@/store/globalSlice";
import { CheckBox } from "@/components";
import { icons } from "@/utils/constants";

const LeftCanvas = () => {
  const reduxData = useSelector((state) => state.global);
  const { isUserSide } = reduxData || {};
  const dispatch = useDispatch();

  const list = [
    {
      id: 1,
      name: "Last 6 months",
    },
    {
      id: 2,
      name: "Last 2 years",
    },
    {
      id: 3,
      name: "Last 5 years",
    },
    {
      id: 4,
      name: "Custom date range",
    },
  ];
  return (
    <>
      {isUserSide && (
        <Offcanvas
          show={isUserSide}
          onHide={() => {
            dispatch(setIsUserSide(false));
          }}
          responsive="xl"
          style={{
            maxWidth: "280px",
          }}
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <div className="left-canvas-container">
              <div className="top-box">
                <h5 className="box-title">Filter</h5>
                <h6 className="box-all">Reset All</h6>
              </div>
              <div className="b-b-point">
                <div className="point-text">
                  {" "}
                  <span>Publication Date</span>
                </div>

                {list?.map((ele, index) => {
                  return (
                    <div
                      className="mb-12 d-flex align-content-center gap-2"
                      key={index}
                    >
                      <CheckBox />
                      <p>{ele?.name}</p>
                    </div>
                  );
                })}
              </div>
              <div className="point-text b-b-point">
                {" "}
                <span>Topics</span>
                <img src={icons?.pulseIcons} />
              </div>
              <div className="point-text b-b-point">
                {" "}
                <span>Author</span>
                <img src={icons?.pulseIcons} />
              </div>
              <div className="point-text b-b-point">
                {" "}
                <span>Paper Type</span>
                <img src={icons?.pulseIcons} />
              </div>
              <div className="point-text b-b-point">
                {" "}
                <span>Article Type</span>
                <img src={icons?.pulseIcons} />
              </div>
              <div className="point-text b-b-point">
                {" "}
                <span>Country</span>
                <img src={icons?.pulseIcons} />
              </div>
              <div className="point-text b-b-point">
                {" "}
                <span>Language</span>
                <img src={icons?.pulseIcons} />
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
};

export default LeftCanvas;
