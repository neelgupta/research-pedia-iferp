import { Button } from "@/components";
import "./FeedDetails.scss";
import { icons } from "@/utils/constants";
import Progress from "@/components/layouts/Progress";
import { useRef, useState } from "react";
import { useEffect } from "react";
import SimilarPeople from "./SimilarPeople";
import RePostPopUp from "./RepostPopUp";
import { useNavigate } from "react-router-dom";
import { getDataFromLocalStorage } from "@/utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import {
  getProjectByTopics,
  getRecommendedPapers,
  getTopPapers,
  getUserInterest,
} from "@/store/userSlice/projectSlice";
import moment from "moment";
import { Spinner } from "react-bootstrap";
import RegisterProfilePopUp from "./RegisterProfilePopUp/RegisterProfilePopUp";
import { setIsModalOpen } from "@/store/globalSlice";
import {
  getInstitutionalMemberDetails,
  getProfessionalMemberDetails,
  getStudentMemberDetails,
} from "@/store/userSlice/userDetailSlice";
import MyProfilePopUp from "@/components/layouts/MyProfilePopUp";
import { InstituteMyProfile } from "../Institutional/InstitutionalProfile/MyProfilePopUp";

const FeedDetails = ({ popup }) => {
  const dropdownRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(6);
  const [isRePost, setIsRePost] = useState(false);
  const [topicList, setIsTopicList] = useState([]);
  const [pagination, setPagination] = useState({});
  const [activeTab, setActiveTab] = useState("topPapers");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isUserData, setIsUserData] = useState({});
  const [isInsUserData, setIsInsUserData] = useState({});
  const [isStudentUserData, setIsStudentUserData] = useState({});
  const isModalOpen = useSelector((state) => state.global.isModalOpen);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const reduxData = useSelector((state) => state.global);
  const { loading } = reduxData || {};

  const rowsPerPage = 4;
  const currentYear = new Date().getFullYear();

  const [recommendedPapers, setRecommendedPapers] = useState([]);

  const localData = getDataFromLocalStorage();
  const { name } = localData;

  console.log(localData, "localData");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchprojectTopics = async () => {
    const myTopics = await dispatch(getProjectByTopics());

    if (myTopics?.status === 200) {
      const topicListData = myTopics.data.response;
      const data = topicListData?.map((item) => item.Topic.topics);
      setIsTopicList(data);
    }
  };

  const fetchUserDetails = async () => {
    const result = await dispatch(
      getProfessionalMemberDetails(localData.roleId)
    );
    setIsUserData(result?.data?.response);
  };

  const fetchStudentUserDetails = async () => {
    const result = await dispatch(getStudentMemberDetails(localData.roleId));
    setIsStudentUserData(result?.data?.response);
  };

  const fetchInsUserDetails = async () => {
    const result = await dispatch(
      getInstitutionalMemberDetails(localData.roleId)
    );
    setIsInsUserData(result?.data?.response);
  };

  const onHide = () => {
    dispatch(setIsModalOpen(false));
  };

  const [Recommendedloader, setRecommendedloader] = useState(false);

  const fetchRecommendedReaserchPapers = async () => {
    setRecommendedloader(true);
    // const neQuery = ["Architecture", "science"];
    const query = `topics=${topicList}&limit=${rowsPerPage}&page=${currentPage}`;
    if (topicList.length > 0) {
      const result = await dispatch(getRecommendedPapers(query));
      console.log(result, "result");
      if (result?.status === 200) {
        setRecommendedPapers(result?.data?.response?.papers);
        setPagination(result?.data?.response?.pagination);
        setRecommendedloader(false);
      }
    }
    setRecommendedloader(false);
  };

  const [InterestUser, setInterestUser] = useState();
  const fetchUserInterest = async () => {
    const res = await dispatch(getUserInterest());

    if (res?.status === 200) {
      setInterestUser(res?.data?.response);
    }
  };

  useEffect(() => {
    fetchUserInterest();

    if (localData.role === "professional") {
      fetchUserDetails();
    } else if (localData.role === "institutional") {
      fetchInsUserDetails();
    } else {
      fetchStudentUserDetails();
    }
  }, []);

  // useEffect(() => {
  //   fetchRecommendedReaserchPapers();
  // }, [topicList, currentPage]);

  const [paperloader, setpaperloader] = useState(false);

  const fetchTopPapers = async () => {
    setpaperloader(true);
    // const neQuery = ["Architecture", "science"]; For Testing

    const query = `topics=${topicList}&limit=${rowsPerPage}&page=${currentPage}`;
    if (topicList.length > 0) {
      const result = await dispatch(getTopPapers(query));

      if (result?.status === 200) {
        setRecommendedPapers(result?.data?.response?.papers);
        setPagination(result?.data?.response?.pagination);
        setpaperloader(false);
      }
    }
    setpaperloader(false);
  };

  useEffect(() => {
    if (activeTab === "conference") {
      fetchRecommendedReaserchPapers();
    } else if (activeTab === "topPapers") {
      fetchTopPapers();
    }
  }, [activeTab, currentPage, topicList]);

  useEffect(() => {
    fetchprojectTopics();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= pagination?.totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= pagination?.totalPages; i++) {
      pages.push(
        <Button
          key={i}
          btnText={i}
          btnStyle={currentPage === i ? "BA" : "BTB"}
          className={`h-36 text-12-600 ${currentPage === i ? "" : "color-3333"}`}
          onClick={() => handlePageChange(i)}
        />
      );
    }
    return pages;
  };

  const handleReadPaper = (paperId) => {
    navigate("/feed-details-author", { state: paperId });
  };

  const renderPapers = (papers) => {
    return (
      <div>
        {/* <div className="recommended-text">
          {activeTab === "topPapers" ? "Recommended for you" : "Conference"}
        </div> */}

        {papers.length > 0 ? (
          papers.map((papers, index) => {
            return (
              <div
                className="feed-published-box card-d mt-18 pointer"
                key={index}
              >
                {currentYear === papers.year && (
                  <div className="fb-center">
                    <div className="post-published">
                      <img
                        src={icons?.lightIcons}
                        alt="light-icon"
                        loading="lazy"
                        className="h-12 w-12 object-fit-contain"
                      />
                      <p className="text-b">Just Published</p>
                    </div>
                    <div>
                      <img
                        src={icons?.actionIcons}
                        alt="action-icons"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}

                <h4 className="post-title">
                  {papers.title || papers?.paper_title || "null"}
                </h4>
                <p className="post-pra">
                  {(papers.abstract && papers.abstract) ||
                    (papers.paper_abstract && papers.paper_abstract) ||
                    "null"}
                </p>

                {papers?.url && (
                  <div className="docs-box">
                    <img
                      src={icons?.docsIcons}
                      alt="docs-icons"
                      loading="lazy"
                    />
                    <p className="docs-title">
                      <a
                        href={papers?.url}
                        className="docs-title hover-link"
                        target="_blank"
                      >
                        {papers?.url || "-"}
                      </a>
                    </p>
                  </div>
                )}

                <div className="post-details flex-wrap mt-8 gap-2">
                  <div className="fa-center gap-1">
                    <img
                      src={icons?.userTwoIcons}
                      alt="docs-icons"
                      loading="lazy"
                      className="h-20 w-20 rounded-circle"
                    />
                    <p className="docs-title">
                      {papers?.authors && papers.authors.length > 0 ? (
                        <>
                          {papers.authors[0].name}
                          {papers.authors.length > 1 &&
                            ` +${papers.authors.length - 1}`}
                        </>
                      ) : papers?.author_name ? (
                        papers.author_name
                      ) : (
                        "No Authors"
                      )}
                    </p>
                  </div>
                  <div className="fa-center gap-md-2 gap-2">
                    <div className="fa-center gap-1">
                      <img
                        src={icons?.calenderIcons}
                        alt="docs-icons"
                        loading="lazy"
                        className="h-16 w-16 object-fit-contain"
                      />
                      <p className="docs-title">
                        {papers.abstract_id
                          ? moment(papers.created_at).format("MMM DD,YYYY")
                          : papers.year}
                      </p>
                    </div>
                    <img
                      src={icons?.dotIcons}
                      alt="docs-icons"
                      loading="lazy"
                      className="h-5 w-5"
                    />
                    <div className="fa-center gap-1">
                      <img
                        src={icons?.eyeIcons}
                        alt="docs-icons"
                        loading="lazy"
                        className="h-16 w-16 object-fit-contain"
                      />
                      <p className="docs-title">31 Views</p>
                    </div>
                  </div>
                </div>
                <div className="fb-center mt-24 gap-3">
                  <Button
                    btnText="Read Paper"
                    btnStyle="LBA"
                    className="h-43 ps-18 pe-18"
                    leftIcon={icons.bookIcons}
                    leftIconClass="h-16 w-16"
                    onClick={() => {
                      handleReadPaper({
                        paperId: papers.paperId,
                        abstractId: papers.abstract_id || papers.abstractId,
                      });
                    }}
                  />
                  <div className="fa-center gap-3">
                    <div className="d-p">
                      <Button
                        btnText="Reposted"
                        btnStyle="BTA"
                        className="h-43 ps-18 pe-18"
                        leftIcon={icons.reloadIcons}
                        leftIconClass="h-16 w-16"
                        onClick={() => handleDropdownToggle(index)}
                      />
                      {openDropdown === index && (
                        <div className="dropdown-menus" ref={dropdownRef}>
                          <div
                            className="d-text"
                            onClick={() => {
                              setOpenDropdown(null);
                            }}
                          >
                            <h5 className="repost-text">
                              Repost with your thoughts
                            </h5>
                            <p className="repost-pra">
                              Share this post and your thoughts about it
                            </p>
                          </div>

                          <div
                            className="d-text mt-4"
                            onClick={() => {
                              setOpenDropdown(false);
                            }}
                          >
                            <h5 className="repost-text">Repost</h5>
                            <p className="repost-pra">
                              Instantly share this post with others
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    <Button
                      btnText="Ask Paper"
                      btnStyle="BTB"
                      className="h-43 ps-18 pe-18"
                      leftIcon={icons.messageIcons}
                      leftIconClass="h-16 w-16"
                    />
                    <Button
                      btnText="Relevant"
                      btnStyle="BTA"
                      className="h-43 ps-18 pe-18"
                      groupIcons={[
                        { icon: icons.upThumIcons },
                        { icon: icons.downThumIcons },
                      ]}
                      leftIconClass="h-16 w-16"
                    />
                    <Button
                      btnText="Listen"
                      btnStyle="BTA"
                      className="h-43 ps-18 pe-18"
                      leftIcon={icons.videoIcons}
                      leftIconClass="h-16 w-16"
                    />

                    <Button
                      btnStyle="BTA"
                      className="h-43 ps-18 pe-18"
                      leftIcon={icons.saveIcons}
                      leftIconClass="h-16 w-16"
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-papers">
            <p>Paper not found</p>
          </div>
        )}
      </div>
    );
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClick = () => {
    setIsOpenModal(true);
  };

  return (
    <div className="feed-details-container">
      {isRePost && (
        <RePostPopUp
          onHide={() => {
            setIsRePost(false);
          }}
        />
      )}
      <div className="professional-top-box">
        <h2 className="details-text">Project 1</h2>
        <h4 className="pointer switch-text">Switch/Create Project</h4>
      </div>
      <div className="user-box">
        <div>
          <h3 className="user-name">Hi {name}!</h3>
          <p className="user-pra">
            We’ve put together a selection of recommended papers that align with
            your interests.
          </p>
        </div>
        <div
          className="right-box pointer"
          onClick={() => dispatch(setIsModalOpen(!isModalOpen))}
        >
          <div className="d-flex align-items-center gap-2">
            <p className="gap-2 text-14-500 color-3333">
              Click here to complete your profile
            </p>
            <img src={icons?.rightIcons} />
          </div>
          <div className="fa-center text-12-500 color-3333 gap-2 mt-8 mb-8">
            <div className="w-212  ">
              <Progress now={40} height="8px" />
            </div>

            <span>40%</span>
          </div>
        </div>
      </div>
      <div className="information-box">
        <h4 className="in-text">
          {topicList?.map((topic, index) => {
            return (
              <span key={index}>
                {topic}
                {index < topicList.length - 1 && ", "}
              </span>
            );
          })}
        </h4>

        <Button
          btnText="Edit Preferences"
          className="h-43"
          btnStyle="LBA"
          onClick={handleClick}
        />
      </div>
      {popup && (
        <RegisterProfilePopUp
          title="Institutional"
          onHide={() => {
            setIsOpenModal(false);
          }}
        />
      )}

      <div>
        <div className="tabs">
          <span
            className={`tab ${activeTab === "topPapers" ? "active" : ""} `}
            onClick={() => setActiveTab("topPapers")}
          >
            Top Papers
          </span>
          <span
            className={`tab ${activeTab === "conference" ? "active" : ""} `}
            onClick={() => setActiveTab("conference")}
          >
            Conference Papers
          </span>
        </div>
        {Recommendedloader || paperloader ? (
          <div className="loader mt-10 d-flex justify-content-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          renderPapers(recommendedPapers)
        )}
      </div>

      {InterestUser && InterestUser?.length > 0 && (
        <div className="mt-18">
          <SimilarPeople InterestUser={InterestUser} />
        </div>
      )}

      <div className="Pagination mt-36">
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-md-3 gap-2">
          <Button
            btnText="First"
            btnStyle="BTB"
            className="h-36 text-12-600 color-3333"
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          />
          <Button
            btnText="Previous"
            btnStyle="BTB"
            className="h-36 text-12-600 color-3333"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {renderPageNumbers()}
          <Button
            btnText="Next"
            btnStyle="BTB"
            className="h-36 text-12-600 color-3333"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pagination?.totalPages}
          />
          <Button
            btnText="Last"
            btnStyle="BTB"
            className="h-36 text-12-600 color-3333"
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === pagination?.totalPages}
          />
        </div>
      </div>
      {localData?.role === "professional" || localData?.role === "student"
        ? isModalOpen && (
            <MyProfilePopUp
              isUserData={
                localData.role === "student" ? isStudentUserData : isUserData
              }
              title={localData.role === "student" ? "Student" : "Professional"}
              onHide={onHide}
              fetchData={
                localData.role === "student"
                  ? fetchStudentUserDetails
                  : fetchUserDetails
              }
            />
          )
        : isModalOpen && (
            <InstituteMyProfile
              isUserData={isInsUserData}
              title="Institutional"
              onHide={onHide}
              fetchData={fetchInsUserDetails}
            />
          )}
    </div>
  );
};

export default FeedDetails;
