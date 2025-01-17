import UserNavbar from "./UserNavbar";
import UserSidebar from "./UserSidebar/UserSidebar";
import "./UserLayout.scss";
import RightSideBar from "./RightSideBar";
import { useDispatch, useSelector } from "react-redux";
import LeftCanvas from "./LeftCanvas";
import { useEffect, useState } from "react";
import RightCanvas from "./RightCanvas";
import Footer from "./Footer";
const UserLayout = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const reduxData = useSelector((state) => state.global);
  const { isUserSide, isRightSide } = reduxData || {};
  const dispatch = useDispatch();
  const isResponsive = windowWidth < 992;

  return (
    <>
      <div id="userlayout-container">
        <UserNavbar />
        <div className="right-body-content">
          <div className="d-flex">
            <div
              className={`${isUserSide && !isResponsive ? "left-sidebar-w d-flex" : "left-sidebar"}`}
            >
              <UserSidebar />
              {isUserSide && <LeftCanvas />}
            </div>
            <div className="body-block rearchPedia-scroll">{children}</div>

            <div
              className={`${isRightSide && !isResponsive ? "right-sidebar-w d-flex" : "right-sidebar"}`}
            >
              <RightSideBar />
              {isRightSide && <RightCanvas />}
            </div>
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default UserLayout;
