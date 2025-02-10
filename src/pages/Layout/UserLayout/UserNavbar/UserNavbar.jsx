import React, { useEffect, useRef, useState } from "react";
import "./UserNavbar.scss";
import { Button, SearchInput } from "@/components";
import { Container } from "react-bootstrap";
import { icons } from "@/utils/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { getDataFromLocalStorage } from "@/utils/helpers";
const UserNavbar = () => {
  const token = true;
  const navigate = useNavigate();

  const location = useLocation();
  const isMyFeed =
    location?.pathname === "/my-feed" || location?.pathname === "/create-feed";

  const dropdownRef = useRef(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [time, setTime] = useState({
    hours: 2,
    minutes: 51,
    seconds: 21,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => String(value).padStart(2, "0");

  const { hours, minutes, seconds } = time;

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
    <>
      <div id="user-navbar">
        {!isMyFeed && (
          <div className="top-nav">
            <span className="premium-text">
              You’re a Premium Member for 7-days!
            </span>{" "}
            <span className="premium-text-free">
              Enjoy FREE Translation, AI Features, Audio papers & more.
            </span>
            <span className="see-text me-4">See Benefits</span>{" "}
            <img
              src={icons?.rightYellowIcons}
              className="h-10 w-8 object-fit-contain"
            />
          </div>
        )}
        <div className={`nav-box`}>
          <div className={`d-flex  ${isMyFeed ? " left-p" : "left-nav"}`}>
            <div className="logo-w-h">
              <img
                src={icons.loginicon}
                alt="logo-icons"
                loading="lazy"
                className=""
              />
            </div>
            {!isMyFeed && (
              <div className="search-box">
                <SearchInput placeholder="Search over 200+ million research papers" />
              </div>
            )}

            <div className="post-b-a">
              <div className="profile-inner-box">
                <div className="profile-img">
                  <img src={icons.profileimg} alt="Profile" />
                  <div className="prime-i">
                    <img src={icons.primeIIcons} alt="prime-icon" />
                  </div>
                </div>
                <div className="ms-3">
                  <h5 className="user-name">Mary Jane</h5>
                  <p className="user-id">ID - 18346441</p>
                  <p className="user-plan">Plan - Professional Premium</p>
                </div>
                <div className="ms-auto dropdown-icon pointer">
                  <img
                    src={icons.downBlackIcons}
                    alt="Profile"
                    className="h-5 w-10 object-fit-contain"
                    onClick={() => {
                      setDropdownOpen(!dropdownOpen);
                    }}
                  />
                </div>
              </div>

              {dropdownOpen && (
                <div className="dropdown-menus" ref={dropdownRef}>
                  <div className="dropdown-item-f">
                    <img
                      src={icons.profileIcons}
                      alt="notification-icon"
                      className="h-22 w-22 object-fit-contain"
                    />
                    <p className="notification-name">Mary Jane</p>
                  </div>
                  <div className="dropdown-item-p">
                    <div className="w-188">
                      <Button
                        leftIcon={icons?.lockIcons}
                        leftIconClass="h-16 w-16"
                        btnText="Upgrade to Premium"
                      />
                    </div>
                  </div>
                  <div
                    className="dropdown-item-p pointer"
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                  >
                    <div className="w-188 text-l">My Messages</div>
                  </div>
                  <div
                    className="dropdown-item-p pointer"
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                  >
                    <div className="w-188 text-l">Notifications</div>
                  </div>
                  <div
                    className="dropdown-item-p pointer"
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                  >
                    <div className="w-188 text-l">My Library </div>
                  </div>
                  <div
                    className="dropdown-item-p pointer"
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                  >
                    <div className="w-188 text-l">Account Settings</div>
                  </div>{" "}
                  <div
                    className="dropdown-item-p pointer"
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                  >
                    <div className="w-188 text-l">Help Center</div>
                  </div>
                  <div
                    className="dropdown-item-p pointer"
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                  >
                    <div className="w-188 text-l">Log Out</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={`${isMyFeed ? "p-profile" : "n-profile"}`}>
            <div
              className={`d-flex align-items-center ${isMyFeed ? " " : "right-nav"}`}
            >
              {!isMyFeed && (
                <div className="post-b">
                  <div className="post-box">
                    <img src={icons.postimg} alt="post-img" loading="lazy" />
                  </div>

                  <div className="countdown">
                    <h4 className="countdown-header">
                      Upgrade & get 6 months free!
                    </h4>
                    <div className="time d-flex gap-2">
                      {["hours", "minutes", "seconds"].map((unit, index) => {
                        const formattedTime = formatTime(time[unit]);
                        return (
                          <div className="time-box" key={index}>
                            <div className="d-flex gap-1">
                              <div className="first-latter d-flex justify-content-center align-items-center">
                                <h1 className="count-text">
                                  {formattedTime[0]}
                                </h1>
                              </div>
                              <div className="sec-latter d-flex justify-content-center align-items-center">
                                <h1 className="count-text">
                                  {formattedTime[1]}
                                </h1>
                              </div>
                              {unit !== "seconds" && (
                                <div className="colon d-flex justify-content-center align-items-center">
                                  <h1 className="count-text">:</h1>
                                </div>
                              )}
                            </div>
                            <div className="time-text">
                              <h1>
                                {unit.charAt(0).toUpperCase() + unit.slice(1)}
                              </h1>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
              <div className="profile-card">
                <div className="profile-inner-box">
                  <div className="profile-img">
                    <img src={icons.profileimg} alt="Profile" />
                    <div className="prime-i">
                      <img src={icons.primeIIcons} alt="prime-icon" />
                    </div>
                  </div>
                  <div className="ms-3">
                    <h5 className="user-name">Mary Jane</h5>
                    <p className="user-id">ID - 18346441</p>
                    <p className="user-plan">Plan - Professional Premium</p>
                  </div>
                  <div className="ms-auto dropdown-icon pointer">
                    <img
                      src={icons.downBlackIcons}
                      alt="Profile"
                      className="h-5 w-10 object-fit-contain"
                      onClick={() => {
                        setDropdownOpen(!dropdownOpen);
                      }}
                    />
                  </div>
                </div>
                {dropdownOpen && (
                  <div className="dropdown-menus" ref={dropdownRef}>
                    <div className="dropdown-item-f">
                      <img
                        src={icons.profileIcons}
                        alt="notification-icon"
                        className="h-22 w-22 object-fit-contain"
                      />
                      <p className="notification-name">Mary Jane </p>
                    </div>
                    <div className="dropdown-item-p">
                      <div className="w-188">
                        
                        <Button
                          leftIcon={icons?.lockIcons}
                          leftIconClass="h-16 w-16"
                          btnText="Upgrade to Premium"
                       
                        />
                      </div>
                    </div>
                    <div
                      className="dropdown-item-p pointer"
                      onClick={() => {
                        setDropdownOpen(false);
                      }}
                    >
                      <div className="w-188 text-l">My Messages</div>
                    </div>
                    <div
                      className="dropdown-item-p pointer"
                      onClick={() => {
                        setDropdownOpen(false);
                      }}
                    >
                      <div className="w-188 text-l">Notifications</div>
                    </div>
                    <div
                      className="dropdown-item-p pointer"
                      onClick={() => {
                        setDropdownOpen(false);
                      }}
                    >
                      <div className="w-188 text-l">My Library </div>
                    </div>
                    <div
                      className="dropdown-item-p pointer"
                      onClick={() => {
                        setDropdownOpen(false);
                      }}
                    >
                      <div className="w-188 text-l">Account Settings</div>
                    </div>{" "}
                    <div
                      className="dropdown-item-p pointer"
                      onClick={() => {
                        setDropdownOpen(false);
                      }}
                    >
                      <div className="w-188 text-l">Help Center</div>
                    </div>
                    <div
                      className="dropdown-item-p pointer"
                      onClick={() => {
                        setDropdownOpen(false);
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
          </div>
        </div>
      </div>
    </>
  );
};

export default UserNavbar;
