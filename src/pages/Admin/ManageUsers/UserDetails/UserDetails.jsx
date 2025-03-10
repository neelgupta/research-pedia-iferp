import Breadcrumb from "@/components/layouts/Breadcrumb";
import "./UserDetails.scss";
import { icons } from "@/utils/constants";
import { useSelector } from "react-redux";
import Progress from "@/components/layouts/Progress";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import React from "react";
import ProjectDetails from "./ProjectDetails";
import SubProjectList from "./SubProjectList";
import DetailsList from "./DetailsList";
import SubDetailsList from "./SubDetailsList";
import AudioList from "./AudioList";

const UserDetails = () => {
  const sidebarOpen = useSelector((state) => state.global.sidebarOpen);
  const location = useLocation();
  const { state } = location;
  const params = useParams();
  const { type } = params;
  const navigate = useNavigate();

  return (
    <div className="user-details-container">
      <div className="mb-14">
        <Breadcrumb
          list={[
            { title: "User" },
            { title: "User Details" },
            {
              title: "User Detail",
              link: "/admin/manage-users/list-user/user-details",
            },
            ...(state?.isActive ? [{ title: "Activity" }] : []),
          ]}
          className="text-14-400"
          isGreen
        />

        <h1 className="page-title">List Users </h1>

        <div className="main-div">
          <div className="row gap-lg-0 gap-3">
            <div
              className={`${
                sidebarOpen ? "col-xl-3 col-lg-5" : "col-xl-4 col-lg-5"
              }`}
            >
              <div className="card-d profile-p ">
                <div className="d-flex justify-content-end">
                  <img
                    src={icons?.primeIcons}
                    alt="prime-icons"
                    loading="lazy"
                    className="h-18 w-18"
                  />
                </div>
                <div className="d-flex justify-content-center mt-2">
                  <img
                    src={icons?.userIcons}
                    alt="user-profile"
                    loading="lazy"
                    className="h-70 w-70 rounded-circle object-fit-contain"
                  />
                </div>
                <h4 className="user-name">Anshan H.</h4>
                <p className="user-role">Professional Member</p>

                <div className="user-profile">
                  <div className="user-main-d right-b">
                    <h5 className="user-count">86</h5>
                    <p className="user-pra">Post</p>
                  </div>
                  <div className="user-main-d right-b">
                    <h5 className="user-count">40</h5>
                    <p className="user-pra">Project</p>
                  </div>
                  <div className="user-main-d">
                    <h5 className="user-count">4.5K</h5>
                    <p className="user-pra">Members</p>
                  </div>
                </div>

                <div className="user-social">
                  <div className="user-social-inner">
                    <img
                      src={icons?.emailIcons}
                      alt="email-icon"
                      className="h-15 w-15"
                      loading="lazy"
                    />
                    <p className="text-social">anshan@gmail.com</p>
                  </div>
                  <div className="user-social-inner">
                    <img
                      src={icons?.phoneIcons}
                      alt="email-icon"
                      className="h-15 w-15"
                      loading="lazy"
                    />
                    <p className="text-social">(+1-876) 8654 239 581</p>
                  </div>
                  <div className="user-social-inner">
                    <img
                      src={icons?.locationIcons}
                      alt="email-icon"
                      className="h-15 w-15"
                      loading="lazy"
                    />
                    <p className="text-social">New York</p>
                  </div>
                  <div className="user-social-inner">
                    <img
                      src={icons?.linkIcons}
                      alt="email-icon"
                      className="h-15 w-15"
                      loading="lazy"
                    />
                    <p className="text-social-a">https://anshan.dh.url</p>
                  </div>
                </div>
              </div>
              <div className="card-d mt-15 p-16">
                <div className="fb-center">
                  <div className="fa-center gap-2">
                    <img
                      src={icons?.activeIcons}
                      alt="active-icons"
                      loading="lazy"
                      className="h-18 w-18"
                    />
                    <p className="active-text">Activity</p>
                  </div>
                  <img
                    src={icons?.rightBArrowIcons}
                    alt="right-arrow"
                    loading="lazy"
                    className="h-16 w-16 object-fit-contain pointer"
                    onClick={() => {
                      navigate(
                        "/admin/manage-users/list-user/user-details/activity",
                        {
                          state: {
                            isActive: true,
                          },
                        }
                      );
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className={`${
                sidebarOpen ? "col-xl-9  col-lg-7" : "col-xl-8  col-lg-7"
              }`}
            >
              {/* Personal Details */}
              <div className="card-d">
                <div className="title-card border-b">
                  <h3 className="title-c">Personal Details</h3>
                  <div className="w-176">
                    <p className="complete-text mb-6">40% Complete profile</p>
                    <Progress now={40} />
                  </div>
                </div>

                <div className="title-inner-div border-b">
                  <div className="left-div">
                    <p className="title-text-d">Full Name</p>
                    <h4 className="text-c-d">Anshan Handgun</h4>
                  </div>
                  <div className="right-div">
                    <p className="title-text-d">Join As</p>
                    <h4 className="text-c-d">Professional Member</h4>
                  </div>
                </div>
                <div className="title-inner-div border-b">
                  <div className="left-div">
                    <p className="title-text-d">Email</p>
                    <h4 className="text-c-d">anshan.dh81@gmail.com</h4>
                  </div>
                  <div className="right-div">
                    <p className="title-text-d">Phone</p>
                    <h4 className="text-c-d">(+1-876) 8654 239 581</h4>
                  </div>
                </div>
                <div className="title-inner-div border-b">
                  <div className="left-div">
                    <p className="title-text-d">Date of birth</p>
                    <h4 className="text-c-d">12 Jun, 2001</h4>
                  </div>
                  <div className="right-div">
                    <p className="title-text-d">Gender</p>
                    <h4 className="text-c-d">Male</h4>
                  </div>
                </div>
                <div className="title-inner-div border-b">
                  <div className="left-div">
                    <p className="title-text-d">Country</p>
                    <h4 className="text-c-d">New York</h4>
                  </div>
                  <div className="right-div">
                    <p className="title-text-d">State/Province</p>
                    <h4 className="text-c-d">Canillo</h4>
                  </div>
                </div>
                <div className="title-inner-div">
                  <div className="left-div">
                    <p className="title-text-d">City</p>
                    <h4 className="text-c-d">Canillo</h4>
                  </div>
                </div>
              </div>
              {!state?.isActive && (
                <React.Fragment>
                  {/* Institution Details */}
                  {/* <div className="card-d  mt-24">
                <div className="title-card border-b">
                  <h3 className="title-c">Institution Details</h3>
                </div>

                <div className="title-inner-div border-b">
                  <div className="left-div">
                    <p className="title-text-d">Institution</p>
                    <h4 className="text-c-d">BSc</h4>
                  </div>
                  <div className="right-div">
                    <p className="title-text-d">Institution email id</p>
                    <h4 className="text-c-d">Institution123@gmail.com</h4>
                  </div>
                </div>
                <div className="title-inner-div border-b">
                  <div className="left-div">
                    <p className="title-text-d">Institution contact number</p>
                    <h4 className="text-c-d">+91 9876543210</h4>
                  </div>
                  <div className="right-div">
                    <p className="title-text-d">Country</p>
                    <h4 className="text-c-d">Andorra</h4>
                  </div>
                </div>
                <div className="title-inner-div border-b">
                  <div className="left-div">
                    <p className="title-text-d">State/Province</p>
                    <h4 className="text-c-d">Canillo</h4>
                  </div>
                  <div className="right-div">
                    <p className="title-text-d">City</p>
                    <h4 className="text-c-d">Canillo</h4>
                  </div>
                </div>
                <div className="title-inner-div border-b">
                  <div className="left-div">
                    <p className="title-text-d">
                      No. of IFERP premium student members
                    </p>
                    <h4 className="text-c-d">100</h4>
                  </div>
                  <div className="right-div">
                    <p className="title-text-d">
                      No. of IFERP premium professional members
                    </p>
                    <h4 className="text-c-d">120</h4>
                  </div>
                </div>
                <div className="title-inner-div border-b">
                  <div className="left-div">
                    <p className="title-text-d">
                      No. of IFERP premium professional members
                    </p>
                    <h4 className="text-c-d">120</h4>
                  </div>
                  <div className="right-div">
                    <p className="title-text-d">
                      No. of IFERP premium professional members
                    </p>
                    <h4 className="text-c-d">120</h4>
                  </div>
                </div>
                <div className="title-inner-div border-b">
                  <div className="left-div">
                    <p className="title-text-d">
                      Strength of premium research scholars
                    </p>
                    <h4 className="text-c-d">120</h4>
                  </div>
                  <div className="right-div">
                    <p className="title-text-d">Strength of Institution</p>
                    <h4 className="text-c-d">120</h4>
                  </div>
                </div>

                <div className="title-inner-div border-b">
                  <div className="left-div-w">
                    <p className="title-text-d">
                      Departments of your organization
                    </p>
                    <h4 className="text-c-d-w">
                      Digital Filmmaking, Accountancy, Actuarial Science
                    </h4>
                  </div>
                </div>
              </div> */}

                  {/*Admin Details */}
                  {/* <div className="card-d  mt-24">
                <div className="title-card border-b">
                  <h3 className="title-c">Admin Details</h3>
                </div>

                <div className="title-inner-div border-b">
                  <div className="left-div">
                    <p className="title-text-d">Name</p>
                    <h4 className="text-c-d">Mary Jane</h4>
                  </div>
                  <div className="right-div">
                    <p className="title-text-d">Email</p>
                    <h4 className="text-c-d">Alternate Email</h4>
                  </div>
                </div>
                <div className="title-inner-div border-b">
                  <div className="left-div">
                    <p className="title-text-d">Alternate Email</p>
                    <h4 className="text-c-d">maryjane123@gmail.com</h4>
                  </div>
                  <div className="right-div">
                    <p className="title-text-d">Contact Number</p>
                    <h4 className="text-c-d">+91 9876543210</h4>
                  </div>
                </div>
                <div className="title-inner-div border-b">
                  <div className="left-div-w">
                    <p className="title-text-d">Alternate Contact Number</p>
                    <h4 className="text-c-d-w">+91 9876543210</h4>
                  </div>
                </div>
              </div> */}

                  {/* Current Profession Details */}
                  <div className="card-d mt-24">
                    <div className="title-card border-b">
                      <h3 className="title-c">Current Profession Details</h3>
                    </div>

                    <div className="title-inner-div border-b">
                      <div className="left-div">
                        <p className="title-text-d">Course</p>
                        <h4 className="text-c-d">BSc</h4>
                      </div>
                      <div className="right-div">
                        <p className="title-text-d">Department</p>
                        <h4 className="text-c-d">Accountancy</h4>
                      </div>
                    </div>
                  </div>
                  {/* Bachelor Degree/UG Details */}
                  <div className="card-d  mt-24">
                    <div className="title-card border-b">
                      <h3 className="title-c">Bachelor Degree/UG Details</h3>
                    </div>

                    <div className="title-inner-div border-b">
                      <div className="left-div">
                        <p className="title-text-d">Course</p>
                        <h4 className="text-c-d">BSc</h4>
                      </div>
                      <div className="right-div">
                        <p className="title-text-d">Department</p>
                        <h4 className="text-c-d">Accountancy</h4>
                      </div>
                    </div>
                    <div className="title-inner-div border-b">
                      <div className="left-div">
                        <p className="title-text-d">University</p>
                        <h4 className="text-c-d">
                          University of Petroleum and Energy Studies
                        </h4>
                      </div>
                      <div className="right-div">
                        <p className="title-text-d">Year of completion</p>
                        <h4 className="text-c-d">12/09/2023</h4>
                      </div>
                    </div>
                    <div className="title-inner-div border-b">
                      <div className="left-div-w">
                        <p className="title-text-d">Institution</p>
                        <h4 className="text-c-d-w">
                          Parvathaneni Brahmayya Siddhartha college of Arts &
                          Science
                        </h4>
                      </div>
                    </div>
                  </div>
                  {/* Master Degree/PG Details */}
                  <div className="card-d  mt-24">
                    <div className="title-card border-b">
                      <h3 className="title-c">Master Degree/PG Details</h3>
                    </div>

                    <div className="title-inner-div border-b">
                      <div className="left-div">
                        <p className="title-text-d">Course</p>
                        <h4 className="text-c-d">MSc</h4>
                      </div>
                      <div className="right-div">
                        <p className="title-text-d">Department</p>
                        <h4 className="text-c-d">Accountancy</h4>
                      </div>
                    </div>
                    <div className="title-inner-div border-b">
                      <div className="left-div">
                        <p className="title-text-d">University</p>
                        <h4 className="text-c-d">
                          University of Petroleum and Energy Studies
                        </h4>
                      </div>
                      <div className="right-div">
                        <p className="title-text-d">Year of completion</p>
                        <h4 className="text-c-d">12/09/2023</h4>
                      </div>
                    </div>
                    <div className="title-inner-div border-b">
                      <div className="left-div-w">
                        <p className="title-text-d">Institution</p>
                        <h4 className="text-c-d-w">
                          Parvathaneni Brahmayya Siddhartha college of Arts &
                          Science
                        </h4>
                      </div>
                    </div>
                  </div>
                  {/*Doctorate/Ph.D Programme Details */}
                  <div className="card-d  mt-24">
                    <div className="title-card border-b">
                      <h3 className="title-c">
                        Doctorate/Ph.D Programme Details
                      </h3>
                    </div>

                    <div className="title-inner-div border-b">
                      <div className="left-div">
                        <p className="title-text-d">Course</p>
                        <h4 className="text-c-d">Ph.D</h4>
                      </div>
                      <div className="right-div">
                        <p className="title-text-d">Department</p>
                        <h4 className="text-c-d">Accountancy</h4>
                      </div>
                    </div>
                    <div className="title-inner-div border-b">
                      <div className="left-div">
                        <p className="title-text-d">University</p>
                        <h4 className="text-c-d">
                          University of Petroleum and Energy Studies
                        </h4>
                      </div>
                      <div className="right-div">
                        <p className="title-text-d">Year of completion</p>
                        <h4 className="text-c-d">12/09/2023</h4>
                      </div>
                    </div>
                    <div className="title-inner-div border-b">
                      <div className="left-div-w">
                        <p className="title-text-d">Institution</p>
                        <h4 className="text-c-d-w">
                          Parvathaneni Brahmayya Siddhartha college of Arts &
                          Science
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/*Research Interests */}
                  <div className="card-d  mt-24">
                    <div className="title-inner-div border-b">
                      <div className="left-div-w">
                        <p className="title-text-d">Area of interest</p>
                        <h4 className="text-c-d-w">Economic Growth</h4>
                      </div>
                    </div>
                    <div className="title-inner-div">
                      <div className="left-div-w">
                        <p className="title-text-d">Comment</p>
                        <h4 className="text-c-d-w">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </h4>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>

        {/* {state?.isActive && ( */}
        {type === "activity"}
        <div className="mt-24">
          {(state?.isActive || state?.viewList?.isTrue) && (
            <h3 className="activity-text">Activity</h3>
          )}
          {state?.viewList?.isTrue && (
            <Breadcrumb
              list={[
                {
                  title: "Activity",
                  link: "/admin/manage-users/list-user/user-details/activity",
                  val: {
                    isActive: true,
                  },
                },

                ...(state?.viewList?.isTrue
                  ? [
                      {
                        title: state?.viewList?.title,
                        link: "/admin/manage-users/list-user/user-details/sub-list",
                        val: {
                          isActive: true,

                          viewList: {
                            isTrue: true,
                            title: state?.viewList?.title,
                          },
                        },
                      },
                    ]
                  : []),
                ...(state?.Details?.isTrue
                  ? [
                      {
                        title: state?.Details?.title,
                        link: "/admin/manage-users/list-user/user-details/details-list",
                        val: {
                          isActive: true,
                          viewList: {
                            isTrue: true,
                            title: state?.viewList?.title,
                          },
                          Details: {
                            isTrue: true,
                            title: state?.Details?.title,
                          },
                        },
                      },
                    ]
                  : []),
                ...(state?.SubDetails?.isTrue
                  ? [{ title: state?.SubDetails?.title }]
                  : []),
              ]}
              className="text-14-400"
              isGreen
            />
          )}
          {type === "activity" && (
            <div className="mt-18">
              <ProjectDetails />
            </div>
          )}
          {type === "sub-list" && (
            <div className="mt-18">
              <SubProjectList pageName={`${state?.viewList?.title}`} />
            </div>
          )}
          {type === "details-list" && (
            <div className="mt-18">
              <DetailsList
                pageName={`${state?.viewList?.title}`}
                currentPage={`${state?.Details?.title}`}
              />
            </div>
          )}
          {type === "sub-details-list" && (
            <div className="mt-18">
              <SubDetailsList />
            </div>
          )}
          {type === "audio-list" && (
            <div className="mt-18">
              <AudioList />
            </div>
          )}
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default UserDetails;
