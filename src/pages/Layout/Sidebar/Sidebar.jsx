import { icons } from "@/utils/constants";
import React, { useState, useEffect } from "react";
import { Offcanvas } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Sidebar.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/store/globalSlice";
import { IoMdClose } from "react-icons/io";
const Sidebar = ({ isResponsive, show, setShow }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [activeChild, setActiveChild] = useState(null); // Track active child
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxdata = useSelector((state) => state.global.sidebarOpen);
  const admin = [
    {
      title: "Manage Users",
      url: "/admin/manage-users",
      icon: icons.inactivegroup,
      activeIcons: icons.group,
      childoption: [
        { title: "List Users", url: "/admin/manage-users/list-user" },
        { title: "User Reports", url: "/admin/manageusers/reports" },
      ],
    },
    {
      title: "Staff Management",
      url: "/admin/staff",
      icon: icons.staff,
      activeIcons: icons.staffisactive,
      childoption: [
        { title: "Staff Users", url: "/admin/staff/users" },
        { title: "Staff Reports", url: "/admin/staff/reports" },
      ],
    },
    {
      title: "Site Settings",
      url: "/admin/setting",
      icon: icons.setting,
      activeIcons: icons.settingacive,
      childoption: [
        { title: "Category & Topics", url: "/admin/setting/category-topic" },
        { title: "Security", url: "/admin/setting/security" },
        { title: "SMTP Relay", url: "/admin/setting/smtp-replay" },
        { title: "Header/Footer Code", url: "/admin/setting/headerfooter" },
      ],
    },
    {
      title: "Feedback",
      url: "/admin/feedback",
      icon: icons.feedback,
      activeIcons: icons.feedbackactive,
    },
    {
      title: "Banner Ads",
      url: "/admin/ads",
      icon: icons.Ads,
      activeIcons: icons.Ads,
    },
    {
      title: "Premium Plan",
      url: "/admin/plan",
      icon: icons.plan,
      activeIcons: icons.plainactive,
    },
    {
      title: "API Keys",
      url: "/admin/apikey",
      icon: icons.api,
      activeIcons: icons.apiactive,
    },
    {
      title: "Reports",
      url: "/admin/report",
      icon: icons.report,
      activeIcons: icons.reportactive,
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(activeTab === index ? null : index);
    setActiveChild(null);
  };

  const handleChildClick = (url, index) => {
    navigate(url);
    setActiveChild(index);
  };

  useEffect(() => {
    const activeIndex = admin.findIndex((item) =>
      location.pathname.startsWith(item.url)
    );
    setActiveTab(activeIndex);

    if (activeIndex !== -1 && admin[activeIndex].childoption) {
      const activeChildIndex = admin[activeIndex].childoption.findIndex(
        (child) => location.pathname.startsWith(child.url)
      );
      setActiveChild(activeChildIndex);
    }
  }, [location.pathname]);

  return (
    <>
      {show && (
        <Offcanvas
          show={show}
          onHide={() => setShow(false)}
          responsive="lg"
          style={{
            maxWidth: "280px",
          }}
        >

     
          <Offcanvas.Body className="p-0 rearchPedia-scroll">
            <div className="slide-container  rearchPedia-scroll">
              <div className='d-flex d-flex justify-content-between'>
              <img
                src={icons.loginicon}
                alt="icons"
                className="img-fluid mt-24 ms-24 mb-24"
              />
               <IoMdClose
             
              size={20}
                className=" mt-24 ms-24 mb-24 d-block d-lg-none"
              onClick={() => dispatch(toggleSidebar(!reduxdata))}
              />



              </div>
              <div className="profile-header d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <div className="profile-img">
                    <img
                      src={icons.avatar}
                      className="img-fluid h-45 w-45"
                      alt="avatar"
                    />
                  </div>
                  <div className="profile-title">
                    <h1>Jonh Smith</h1>
                    <p className="m-0 mt-6">Administrator</p>
                  </div>
                </div>
                <div>
                  <img
                    src={icons.sliderHeader}
                    alt="img"
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="tabsidebar-conatiner ">
                {admin.map((item, index) => (
                  <div key={index}>
                    <div
                      className={`tab-bar ${
                        activeTab === index ? "active-tab" : ""
                      }`}
                      onClick={() => handleTabClick(index)}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="tab-icon">
                            <img
                              src={
                                activeTab === index
                                  ? item.activeIcons
                                  : item.icon
                              }
                              alt="group"
                              className="h-22 w-22"
                            />
                          </div>
                          <div
                            className={`tab-title ${
                              activeTab === index ? "active-text" : ""
                            }`}
                          >
                            <h1>{item.title}</h1>
                          </div>
                        </div>
                        {item.childoption && item.childoption.length > 0 && (
                          <div>
                            <img
                              src={
                                activeTab === index
                                  ? icons.downarrow
                                  : icons.rightarrow
                              }
                              alt="righticon"
                              className="img-fluid"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Conditionally render child-tabs */}
                    {activeTab === index && item.childoption && (
                      <div className="child-tab">
                        {item.childoption.map((child, childIndex) => (
                          <div
                            key={childIndex}
                            onClick={() =>
                              handleChildClick(child.url, childIndex)
                            }
                            className={`child-tabs d-flex align-items-center mt-14 `}
                          >
                            <div className="chile-icon">
                              <img
                                src={
                                  activeChild === childIndex
                                    ? icons.activetab
                                    : icons.inactivedot
                                }
                                alt="activetab"
                                className="img-fluid h-22 w-22"
                              />
                            </div>
                            <div
                              className={`child-text ${
                                activeChild === childIndex
                                  ? "activetabtext"
                                  : ""
                              }`}
                            >
                              <h1 className="m-0">{child.title}</h1>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
};

export default Sidebar;
//           <Offcanvas.Body className="p-0 rearchPedia-scroll overflow-auto">
//             <div className="slide-container  ">
//               <div className="d-flex d-flex justify-content-between">
//                 <img
//                   src={icons.loginicon}
//                   alt="icons"
//                   className="img-fluid mt-24 ms-24 mb-24"
//                 />
//                 <IoMdClose
//                   size={20}
//                   className=" mt-24 ms-24 mb-24 d-block d-lg-none"
//                   onClick={() => dispatch(toggleSidebar(!reduxdata))}