import { Button, SearchInput } from "@/components";
import React, { useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/store/globalSlice";
import { icons } from "@/utils/constants";
const Navbar = () => {
  const dispatch = useDispatch();
  const reduxdata = useSelector((state) => state.global.sidebarOpen);

  const dropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("authData");
    window.location.reload();
  };

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
        <div className="d-flex align-items-center gap-2">
          <div>
            <img src={icons.chaticon} alt="img" className="img-fluid" />
          </div>
          <div>
            <img src={icons.notifcation} alt="img" className="img-fluid" />
          </div>
          <div className="dropdown">
            <img
              src={icons.avatar}
              alt="img"
              className="img-fluid w-40 h-40"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setDropdownOpen(!dropdownOpen);
              }}
            />
            {dropdownOpen && (
              <div className="dropdown-menus" ref={dropdownRef}>
                <div className="dropdown-item-f">
                  <img
                    src={icons.profileIcons}
                    alt="notification-icon"
                    className="h-22 w-22 object-fit-contain"
                  />
                  <p className="notification-name">
                    {/* {localData.name} */}
                    Test
                  </p>
                </div>

                <div
                  className="dropdown-item-p pointer"
                  onClick={() => {
                    // setDropdownOpen(false);
                  }}
                >
                  <div className="w-188 text-l" onClick={handleLogOut}>
                    Log Out
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* {dropdownOpen && ( */}

        {/* )} */}
      </div>
    </div>
  );
};

export default Navbar;
