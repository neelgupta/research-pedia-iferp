import { SearchInput } from "@/components";
import React from "react";
import "./Navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/store/globalSlice";
import { icons } from "@/utils/constants";
const Navbar = () => {
  const dispatch = useDispatch();
  const reduxdata = useSelector((state) => state.global.sidebarOpen);
  return (
    <div id="Navbar-container" className="">
      <div className="d-flex justify-content-between align-items-center mt-20">
        <div className="d-flex">
          <div className="click-icon d-flex align-items-center">
            <img
              src={icons.humbarger}
              alt="clickicon"
              className="img-fluid"
              onClick={() => dispatch(toggleSidebar(!reduxdata))}
            />
          </div>
          <div className="search-bar">
            <SearchInput placeholder="Ctrl + K" />
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div>
            <img src={icons.chaticon} alt="img" className="img-fluid w-40 h-40" />
          </div>
          <div className="position-relative d-inline-block " style={{marginLeft : "-10px"}}>
      <img
        src={icons.notifcation}
        alt="Notification"
        className="img-fluid w-30 h-30"
    
      />
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-success"
        style={{ fontSize: "12px" }}
      >
        3
      </span>
    </div>
          <div>
            <img src={icons.avatar} alt="img" className="img-fluid w-40 h-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
