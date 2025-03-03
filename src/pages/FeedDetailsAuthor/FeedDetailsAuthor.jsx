import React, { useCallback, useEffect, useRef, useState } from "react";
import "./FeedDetailsAuthor.scss";
import Breadcrumb from "@/components/layouts/Breadcrumb";
import { icons } from "@/utils/constants";
import { handleCopy } from "@/utils/helpers";
import { Button, TextInput } from "@/components";
import SecondDetails from "./SecondDetails";
import PackageDetails from "./PackageDetails";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuthorSocialDetails,
  getProjectByTopics,
  getRecommendedPapers,
  getRecommendedPapersById,
  Literaturesearch,
} from "@/store/userSlice/projectSlice";
import moment from "moment";
import { getAuthorsPapers } from "@/store/userSlice/userDetailSlice";
import { Spinner } from "react-bootstrap";
import talkToUs from "../../assets/images/talk-us-logo.png";
import SelectedLanguagemodel from "./OpenModels/SelectedLanguagemodel";
import ListenModelpopup from "./OpenModels/ListenModelpopup";
import ReferenceManager from "./OpenModels/ReferenceManager";
import AskPaper from "./OpenModels/AskPaper";
import { debounce } from "lodash";
import SaveTolist from "./OpenModels/SaveTolist/SaveTolist";
import Share from "./OpenModels/Share/Share";
import Report from "./OpenModels/Report/Report";
import axios from "axios";

const FeedDetailsAuthor = () => {
  const [showActive, setShowActive] = useState("Summary");
  const [isSide, setIsSide] = useState(false);
  const [paperDetails, setPaperDetails] = useState({});
  const [showAuthors, setShowAuthors] = useState(false);
  const [AutherIddetispaper, setAutherIddetispaper] = useState("");
  const [summaryloadder, setsummaryloadder] = useState(false);
  const [similarPapers, setSimilarPapers] = useState([]);

  const [authdatadetails, setauthdata] = useState({});
  const [iferpAuthorId, setIferpAuthorId] = useState();
  const location = useLocation();
  const dispatch = useDispatch();

  console.log("paperDetails", paperDetails);
  const navigation = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const paperId = queryParams.get("paperId");
  const abstractId = queryParams.get("abstractId");

  const topics = location?.state?.topics;
  console.log(paperId, "PAPERID11");
  console.log(abstractId, "abstractId");
  const fetchPaper = async () => {
    setsummaryloadder(true);
    // const id = location?.state;
    // const paperId = id.paperId;
    // const abstractId = id.abstractId;

    const result = await dispatch(
      getRecommendedPapersById(paperId, abstractId)
    );

    console.log(result, "result");

    setAutherIddetispaper(
      result?.data.response?.researchPapersWithSummary[0]?.authors
        ? result?.data.response?.researchPapersWithSummary[0]?.authors?.[0]
            ?.authorId
        : result?.data.response?.researchPapersWithSummary[0].author
    );

    setIferpAuthorId(result?.data.response?.researchPapersWithSummary[0].id);
    setPaperDetails(result?.data?.response?.researchPapersWithSummary[0]);

    if (result?.state === 200) {
      setsummaryloadder(false);
    }
    setsummaryloadder(false);
  };

  const fetchIferpAuthorSData = async () => {
    if (iferpAuthorId !== undefined) {
      const result = await dispatch(getAuthorSocialDetails(iferpAuthorId));

      if (result.status === 200) {
        setauthdata(result?.data?.response);
      }
    }
  };

  useEffect(() => {
    fetchIferpAuthorSData();
  }, [iferpAuthorId]);

  const [paperAuthdetails, setpaperAuthdetails] = useState();
  const [Seconddetailsloadder, setSeconddetailsloadder] = useState(false);

  const [showAllAuthors, setShowAllAuthors] = useState(false);
  const [similarpaperloadder, setsimilarpaperloadder] = useState(false);
  const [topicList, setIsTopicList] = useState([]);

  console.log("paper deatils", paperAuthdetails);
  const fetchprojectTopics = async () => {
    const myTopics = await dispatch(getProjectByTopics());
    if (myTopics?.status === 200) {
      const topicListData = myTopics.data.response;
      const data = topicListData?.map((item) => item.Topic.topics);
      setIsTopicList(data);
    }
  };

  const fetchSimilarPaprs = async () => {
    setsimilarpaperloadder(true);
    const query = `topics=${topicList}`;
    if (topicList.length > 0) {
      const result = await dispatch(getRecommendedPapers(query));

      if (result?.status === 200) {
        setsimilarpaperloadder(false);
        setSimilarPapers(result?.data?.response?.papers);
      }
    }
    setsimilarpaperloadder(false);
  };

  useEffect(() => {
    fetchSimilarPaprs();
  }, [topicList]);

  useEffect(() => {
    fetchprojectTopics();
    fetchPaper();
  }, []);

  const fetchauterdetais = async () => {
    setSeconddetailsloadder(true);
    // AutherIddetispaper

    if (AutherIddetispaper !== undefined && AutherIddetispaper !== "") {
      // const res = await dispatch(getAuthorsPapers(49184733));
      const res = await dispatch(getAuthorsPapers(AutherIddetispaper));

      if (res?.status === 200) {
        setpaperAuthdetails(res?.data?.response?.papers);
        setSeconddetailsloadder(false);
      }
      setSeconddetailsloadder(false);
    }
  };

  useEffect(() => {
    fetchauterdetais();
  }, [paperDetails, AutherIddetispaper]);

  const {
    // Sementic Data
    abstract,
    externalIds,
    authors,
    publicationDate,
    journal,
    summary,
    title,
    url,
    year,
    // IFERP DB
    paper_title,
    author_name,
    co_author,
    paper_abstract,
  } = paperDetails || {};

  console.log({ paper_abstract }, { abstract }, "ABC");
  useEffect(() => {
    if (!summary) {
      setShowActive("Abstract");
    }
    if (
      !summary &&
      (paper_abstract === null ||
        paper_abstract === undefined ||
        abstract === undefined ||
        abstract === null)
    ) {
      setShowActive("Full-Text");
    }
  }, []);

  const handleClickSummary = () => {
    setShowActive("Summary");
    const summaryElement = document.getElementById("summary");
    if (summaryElement) {
      summaryElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClickActive = () => {
    setShowActive("Abstract");
    const abstractElement = document.getElementById("abstract");
    if (abstractElement) {
      abstractElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClickFullText = () => {
    setShowActive("Full-Text");
    const fullTextElement = document.getElementById("full-text");
    if (fullTextElement) {
      fullTextElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClickSimilarPapers = () => {
    setShowActive("Similar Papers");
    const similarPaperElement = document.getElementById("similar-papers");
    if (similarPaperElement) {
      similarPaperElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const reduxData = useSelector((state) => state.global);
  const { isUserSide, isRightSide } = reduxData || {};

  const [visibleCount, setVisibleCount] = useState(2);
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    if (showMore) {
      setVisibleCount(2);
    } else {
      if (authdatadetails?.data1?.topics !== "") {
        setVisibleCount(authdatadetails?.data1?.topics?.length);
      }
    }
    setShowMore(!showMore);
  };

  const [isTop, setIsTop] = useState(false);
  const searchDivRef = useRef(null);
  const checkIfTop = () => {
    // if (searchDivRef.current) {
    const rect = searchDivRef?.current?.getBoundingClientRect();

    setIsTop(rect?.top <= 0);
    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfTop);
    checkIfTop();
    return () => {
      window.removeEventListener("scroll", checkIfTop);
    };
  }, []);

  const [search, setsearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPaper, setSelectedPaper] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const handleSelect = (value) => {
    setSelectedPaper(value);
    setDropdownOpen(false);
  };

  // const recentSearches = ;

  const [recentSearches, setrecentSearches] = useState([]);

  console.log("recentSearches 101", recentSearches);
  const suggestions = [
    "How does climate change impact biodiversity?",
    "How does social media affect the college selection process?",
    "What are the interesting theories about dark matter and dark energy?",
    "What is the significance of higher-dimensional algebra?",
  ];
  const [isLanguageOpenModal, setIsLanguageOpenModal] = useState(false);
  const [isTexttospeechModal, setIsTexttospeechModal] = useState(false);
  const [isReference, setisReference] = useState(false);
  const [isAskPaper, setisAskPaper] = useState(false);
  const [issavelist, setissavelist] = useState(false);
  const [isshare, setisshare] = useState(false);
  const [isreport, setisreport] = useState(false);
  const onHide = () => {
    setIsLanguageOpenModal(false);
    setIsTexttospeechModal(false);
    setisReference(false);
    setisAskPaper(false);
    setissavelist(false);
    setisshare(false);
    setisreport(false);
  };

  // const debouncedApiCall = useCallback(
  //   debounce((searchTerm) => {
  //     setDebouncedSearchTerm(searchTerm);
  //   }, 400),
  //   []
  // );

  const handleSearch = (e) => {
    // debouncedApiCall(e.target.value);
  };

  // // Fetch search results
  const fetchSearch = async () => {
    try {
      const res = await dispatch(Literaturesearch(searchTerm));
      console.log(
        "res?.data?.responseres?.data?.response",
        res?.data?.response
      );
      setrecentSearches(res?.data?.response);
    } catch (error) {
      console.error("Error fetching audio:", error);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, [searchTerm]);
  // useEffect(() => {
  //   if (debouncedSearchTerm) {
  //     fetchSearch();
  //   }
  // }, [debouncedSearchTerm]);

  return (
    <div id="feed-details-author-container">
      <div className="row">
        <div>
          {summaryloadder ? (
            <div
              className="loader-container d-flex justify-content-center align-items-center"
              style={{ width: "100%", height: "100%" }}
            >
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            <div className="main-div ">
              <div className={`${isSide ? "left-w-o" : "left-w"}`}>
                <Breadcrumb
                  list={[
                    { title: "Home" },
                    { title: "Search" },
                    { title: "Reviewing the effectiveness..." },
                  ]}
                  className="text-16-400"
                  isGreen
                />
                <section className="sectionOne">
                  <div
                    className={`${isUserSide || isRightSide ? "active-title-section" : "title-section"}`}
                  >
                    {(title || paper_title) && (
                      <h1 className="title-text mt-24">
                        {title ? title : paper_title ? paper_title : ""}
                      </h1>
                    )}

                    <div className="mt-26">
                      <div className="row gy-3">
                        <div className="col-12">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                            }}
                          >
                            <p
                              className={`pra-text ${isSide ? "pra-sm" : "pra-m"}`}
                            >
                              {authors && authors.length > 0 ? (
                                <>
                                  <div
                                    style={{
                                      display: "flex",
                                      gap: "6px",
                                      alignItems: "center",
                                    }}
                                  >
                                    {authors?.slice(0, 2).map((item) => (
                                      <React.Fragment key={item.id}>
                                        <img
                                          src={icons?.avatarTwoIcons}
                                          className="h-32 w-32 rounded-circle me-5"
                                          alt="author-avatar"
                                        />
                                        <span>{item.name}</span>
                                      </React.Fragment>
                                    ))}
                                  </div>

                                  {showAllAuthors &&
                                    authors?.slice(2).map((item) => (
                                      <React.Fragment key={item.id}>
                                        <img
                                          src={icons?.avatarTwoIcons}
                                          className="h-32 w-32 rounded-circle me-5"
                                          alt="author-avatar"
                                        />
                                        <span>{item.name}</span>
                                      </React.Fragment>
                                    ))}
                                </>
                              ) : (
                                ""
                              )}
                            </p>

                            <div>
                              {authors?.length > 2 && (
                                <p
                                  className={`pra-text ${isSide ? "pra-sm span-pra pointer" : "pra-m span-pra pointer"}`}
                                  onClick={() =>
                                    setShowAllAuthors(!showAllAuthors)
                                  }
                                >
                                  {!showAllAuthors
                                    ? `+ Show ${authors.length - 2} more`
                                    : "Show Less"}
                                </p>
                              )}
                            </div>
                          </div>

                          {externalIds?.DOI && (
                            <div
                              className="fa-center gap-2 pointer"
                              style={{
                                paddingBottom: "36px",
                              }}
                              onClick={() => {
                                dispatch(
                                  handleCopy(
                                    `https://doi.org/${externalIds?.DOI}`
                                  )
                                );
                              }}
                            >
                              <p className="link-text">
                                {externalIds?.DOI || ""}
                              </p>
                              <img src={icons?.copyIcons} alt="copy-icons" />
                              <span className="copy-text">Copy DOI</span>
                            </div>
                          )}

                          <div className="journal-details">
                            {journal?.name && (
                              <div className="d-flex gap-3 align-items-center">
                                <img src={icons.noteBIcons} alt="" />
                                <span>
                                  Journal:{" "}
                                  <span
                                    style={{
                                      textDecoration: "underline",
                                      cursor: "pointer",
                                    }}
                                  >
                                    {journal?.name}
                                  </span>
                                </span>
                              </div>
                            )}

                            <div className="d-flex flex-column flex-sm-row gap-3 align-items-sm-center flex-wrap">
                              {(publicationDate || year) && (
                                <div className="d-flex align-items-center gap-3">
                                  <img src={icons.calenderAIcons} alt="" />
                                  <span>
                                    Publication Date: {publicationDate || year}
                                  </span>
                                </div>
                              )}

                              <span className="d-flex align-items-center gap-2">
                                <img src={icons.eyeIcons} alt="" />
                                <span>31 Views</span>
                              </span>
                            </div>
                          </div>

                          <div className="">
                            <div
                              className="brave-scroll"
                              style={{
                                maxHeight: "300px",
                                overflowY: "auto",
                                marginTop: "10px",
                                display: "flex",
                              }}
                            >
                              <div className="d-flex flex-wrap gap-3">
                                {authdatadetails?.data1?.topics !== "" &&
                                  authdatadetails?.data1?.topics
                                    ?.slice(0, visibleCount)
                                    ?.map((topic, index) => (
                                      <div
                                        key={index}
                                        className="p-12"
                                        style={{
                                          border: "1px solid #333333",
                                          borderRadius: "12px",
                                        }}
                                      >
                                        <span>{topic}</span>
                                      </div>
                                    ))}
                              </div>
                              {console.log(authdatadetails, "auth data")}
                              {authdatadetails.hasOwnProperty("data1") &&
                                authdatadetails?.data1?.topics !== "" && (
                                  <div
                                    onClick={handleToggle}
                                    className="text-14-500 color-113D"
                                    style={{
                                      cursor: "pointer",
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    {showMore
                                      ? "- Show Less"
                                      : `+ Show ${authdatadetails?.data1?.topics?.length - visibleCount} more`}
                                  </div>
                                )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* review */}
                    <div className="review-box">
                      <div className="fa-center gap-1">
                        <Button
                          btnText="New"
                          className="h-29 pt-6 pb-6 br-8 w-51"
                        />
                        <h4 className="review-text">
                          Get your research rolling with a Literature Review
                        </h4>
                      </div>
                      <p className="review-pra">
                        Skip hour sifting through countless paper. Academia can
                        simplify the process with a comprehensive overview of
                        new and popular works for your research topic.
                      </p>
                      <p className="review-pra">
                        Request your preferred subject area for your Literature
                        Review
                      </p>
                      <div className="search-box">
                        <div className="btn-search">
                          <div>
                            <TextInput
                              placeholder="Social Psychology"
                              className="h-51 black-b"
                              value={searchTerm}
                              onChange={(e) => {
                                setsearch(true);
                                setSearchTerm(e.target.value);
                                handleSearch(e);
                              }}
                            />
                          </div>

                          {search && searchTerm && (
                            <div className="search-histroy-conatiner d-flex   justify-content-start  mt-10">
                              <div className="search-dropdown brave-scroll-gry ">
                                <div className="recent-searches">
                                  <span className="text-14-500 color-0303">
                                    {" "}
                                    Recent searches
                                  </span>
                                  {recentSearches.map((item, index) => (
                                    <div
                                      key={index}
                                      className="search-item mt-2"
                                      onClick={() => {
                                        setsearch(false);

                                        setSearchTerm(item.title);
                                        fetchresult(item.title);
                                      }}
                                    >
                                      <img
                                        src={icons.Recantsimg}
                                        className="img-fluid"
                                        alt="img"
                                      />{" "}
                                      <span className="text-14-400 ">
                                        {item.title}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                                <div className="suggestions">
                                  <span className="text-14-500 color-0303">
                                    Try asking or searching for:
                                  </span>
                                  {suggestions.map((item, index) => (
                                    <div
                                      key={index}
                                      className="search-item mt-2"
                                    >
                                      <img
                                        src={icons.searchingimg}
                                        className="img-fluid"
                                        alt="img"
                                      />{" "}
                                      <span className="text-14-400 ">
                                        {item}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="btn-c">
                          <Button
                            btnText="Get your literature review"
                            rightIcon={icons?.rightLIcons}
                            rightIconClass="h-14 w-14 object-fit-contain"
                            btnStyle="BBA BBA-hover"
                            className="h-51"
                            onClick={() =>
                              navigation("/literature-review", {
                                state: {
                                  searchitem: searchTerm,
                                },
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    {/* SEARCH  */}
                    <div
                      ref={searchDivRef}
                      className="search-div-box"
                      style={{
                        position: "sticky",
                        top: "0",
                        zIndex: 10,
                        borderRadius: "8px",
                      }}
                    >
                      <div className="search-btn-box">
                        {summary && (
                          <div
                            className={`${showActive === "Summary" ? "show-active-b" : "show-text-b"} pointer`}
                            onClick={handleClickSummary}
                          >
                            Summary
                          </div>
                        )}

                        {(paper_abstract || abstract) && (
                          <div
                            className={`${showActive === "Abstract" ? "show-active-b" : "show-text-b"} pointer`}
                            onClick={handleClickActive}
                          >
                            Abstract
                          </div>
                        )}

                        <div
                          className={`${showActive === "Full-Text" ? "show-active-b" : "show-text-b"} pointer`}
                          onClick={handleClickFullText}
                        >
                          Full-Text
                        </div>

                        {similarPapers?.length >= 0 && (
                          <div
                            className={`${showActive === "Similar Papers" ? "show-active-b" : "show-text-b"} pointer`}
                            onClick={handleClickSimilarPapers}
                          >
                            Similar Papers
                          </div>
                        )}
                      </div>
                    </div>

                    {summary && (
                      <>
                        {/* Summary */}
                        <h4 className="sub-title-text" id="Summary">
                          Summary
                        </h4>
                        <div
                          className="d-flex gap-3 justify-content-between mt-28 mb-28 p-28"
                          style={{ background: "#F9F8F8", borderRadius: "8px" }}
                        >
                          <div className="d-flex gap-2">
                            <img
                              src={icons?.activeStarIcons}
                              alt="active-star"
                              loading="lazy"
                              className="h-24 w-24"
                            />
                            <p className="summer-text ">{summary && summary}</p>
                          </div>
                          <img
                            src={icons?.lightCIcons}
                            alt="copy"
                            className="h-24 w-24 pointer"
                            onClick={() => {
                              dispatch(handleCopy(summary));
                            }}
                          />
                        </div>
                      </>
                    )}

                    {(paper_abstract || abstract) && (
                      <div className="abstract-box">
                        <h4 className="sub-title-text" id="abstract">
                          Abstract
                        </h4>
                        <p className="abstract-text">
                          {paper_abstract || abstract}
                        </p>
                      </div>
                    )}

                    <div className="ask-box">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={icons?.docSearchIcons}
                          className="h-48 w-48"
                        />
                        <p className="text-18-500 color-0303">
                          {" "}
                          Ask this paper
                        </p>
                      </div>
                      <div className="fa-center">
                        <img
                          src={icons?.rightSAIcons}
                          className="h-24 w-24 object-fit-contain pointer"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${isUserSide || isRightSide ? "active-sectionOne-tool-bar" : "sectionOne-tool-bar"}`}
                  >
                    <div
                      className="auth-side brave-scroll"
                      style={{
                        position: "sticky",
                        top: "0",
                        height: "calc(100vh- 20px)",
                        overflowY: "auto",
                        borderLeft: "1px solid #E0E9F4",
                        paddingLeft: "24px",
                        width: "100%",

                        // border:"2px solid red"
                      }}
                    >
                      <div
                        className="d-flex align-items-center gap-2 mt-10 pr-right-side-text"
                        onClick={() => setIsLanguageOpenModal(true)}
                      >
                        <div>
                          <img
                            src={icons.authorsideicon1}
                            alt="authorsideicon1"
                            className="img-fluid w-48 h-48"
                          />
                        </div>
                        <div className="">
                          <h1 className="right-side-text">
                            Translate this paper in your preferred language
                          </h1>
                        </div>
                      </div>
                      <div
                        className="d-flex  align-items-center gap-2 mt-10 pr-right-side-text"
                        onClick={() => setIsTexttospeechModal(true)}
                      >
                        <div>
                          <img
                            src={icons.authorsideicon2}
                            alt="authorsideicon1"
                            className="img-fluid w-48 h-48"
                          />
                        </div>
                        <div>
                          <h1 className="right-side-text">
                            Listen to the abstract of this paper
                          </h1>
                        </div>
                      </div>
                      <div
                        className="d-flex  align-items-center gap-2 mt-10 pr-right-side-text"
                        onClick={() => setisAskPaper(true)}
                      >
                        <div>
                          <img
                            src={icons.authorsideicon3}
                            alt="authorsideicon1"
                            className="img-fluid w-48 h-48"
                          />
                        </div>
                        <div>
                          <h1 className="right-side-text">Ask Paper</h1>
                        </div>
                      </div>
                      <div
                        className="d-flex  align-items-center gap-2 mt-10 pr-right-side-text"
                        onClick={() => setisReference(true)}
                      >
                        <div>
                          <img
                            src={icons.authorsideicon4}
                            alt="authorsideicon1"
                            className="img-fluid w-48 h-48"
                          />
                        </div>
                        <div>
                          <h1 className="right-side-text">
                            Export to reference manager
                          </h1>
                        </div>
                      </div>
                      <div className="d-flex  align-items-center gap-2 mt-10 pr-right-side-text">
                        <div>
                          <img
                            src={icons.authorsideicon5}
                            alt="authorsideicon1"
                            className="img-fluid w-48 h-48"
                          />
                        </div>
                        <div>
                          <h1 className="right-side-text">Bookmark</h1>
                        </div>
                      </div>
                      <div
                        className="d-flex  align-items-center gap-2 mt-10 pr-right-side-text"
                        onClick={() => setissavelist(true)}
                      >
                        <div>
                          <img
                            src={icons.authorsideicon6}
                            alt="authorsideicon1"
                            className="img-fluid w-48 h-48"
                          />
                        </div>
                        <div>
                          <h1 className="right-side-text">Save to drive</h1>
                        </div>
                      </div>
                      <div
                        className="d-flex  align-items-center gap-2 mt-10 pr-right-side-text"
                        onClick={() => setisshare(true)}
                      >
                        <div>
                          <img
                            src={icons.authorsideicon7}
                            alt="authorsideicon1"
                            className="img-fluid w-48 h-48"
                          />
                        </div>
                        <div>
                          <h1 className="right-side-text">Share</h1>
                        </div>
                      </div>
                      <div
                        className="d-flex  align-items-center gap-2 mt-10 pr-right-side-text"
                        onClick={() => setisreport(true)}
                      >
                        <div>
                          <img
                            src={icons.authorsideicon8}
                            alt="authorsideicon1"
                            className="img-fluid w-48 h-48"
                          />
                        </div>
                        <div>
                          <h1 className="right-side-text">Report</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 2 */}

                <section className="sectionTwo">
                  <div
                    className={`${isUserSide || isRightSide ? "active-sectionTwo-details" : "sectionTwo-details"}`}
                  >
                    <div style={{ paddingTop: "3rem" }}>
                      <h4 id="full-text" style={{ marginBottom: "1rem" }}>
                        Full Text
                      </h4>

                      <div className="full-box">
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src={icons?.docsBlueIcons}
                            className="h-48 w-48"
                          />
                          <div>
                            <p className="text-18-500 color-0303 mb-4">
                              Published version
                            </p>
                            <p className="text-14-400 color-3333">Download</p>
                          </div>
                        </div>
                        <div className="fa-center">
                          <img
                            src={icons?.downloadImgIcons}
                            className="h-48 w-48 object-fit-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="talk-us">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={talkToUs}
                          style={{ width: "130px", height: "120px" }}
                        />
                      </div>

                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          gap: "4px",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                          }}
                        >
                          <h4 className="text-18-500 color-0303 mb-4">
                            Talk to us
                          </h4>
                          <p className="text-14-400 color-3333">
                            Join us for a 30 min session where you can share
                            your feedback and ask us any queries you have
                          </p>
                        </div>

                        <button className="talkUsBtn">Talk to us</button>
                      </div>
                    </div>

                    {similarPapers && similarPapers.length > 0 && (
                      <div className="similar-box" id="similar-papers">
                        <h4
                          style={{
                            fontSize: "24px",
                            fontWeight: 500,
                            paddingTop: "3rem",
                            marginBottom: "1rem",
                          }}
                        >
                          Similar Papers
                        </h4>

                        {similarpaperloadder ? (
                          <div className="loader-container d-flex justify-content-center">
                            <Spinner animation="border" variant="primary" />
                          </div>
                        ) : (
                          similarPapers &&
                          similarPapers.length > 0 &&
                          similarPapers.map((ele, index) => {
                            return (
                              <div
                                className="feed-published-box card-d mt-18"
                                key={index}
                              >
                                <div>
                                  <div className="feed-flex">
                                    <div className="col-10">
                                      <div className="w-d">
                                        <h4 className="post-title">
                                          {ele?.title || ele?.paper_title}
                                        </h4>
                                        <p className="post-pra">
                                          Journal of Islamic Contemporary
                                          Accounting and Business | VOL. 1
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-2 d-flex justify-content-end">
                                      <div className="h-42 w-42">
                                        <Button
                                          leftIcon={icons?.activeSaveIcons}
                                          btnStyle="LB"
                                          className="h-42 w-42"
                                          leftIconClass="h-16 w-16"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="post-details flex-wrap mt-8 gap-2">
                                    <div className="fa-center gap-1">
                                      <img
                                        src={icons?.avatarTwoIcons}
                                        alt="docs-icons"
                                        loading="lazy"
                                        className="h-20 w-20 rounded-circle"
                                      />

                                      {(ele?.authors || ele.author_name) &&
                                      ele?.authors?.length > 0 ? (
                                        <>
                                          {ele?.authors?.[0]?.name ||
                                            ele?.author_name}
                                          {ele?.authors?.length > 1 &&
                                            ` +${ele?.authors?.length - 1}`}
                                        </>
                                      ) : ele?.author_name ? (
                                        ele?.author_name
                                      ) : (
                                        "No Authors"
                                      )}
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
                                          {ele.abstract_id
                                            ? moment(ele.created_at).format(
                                                "MMM DD,YYYY"
                                              )
                                            : ele.year}
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
                                </div>
                              </div>
                            );
                          })
                        )}

                        <div className="f-center mt-18">
                          <Button className="h-42" btnText="View more papers" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    className={`${isUserSide || isRightSide ? "active-sectionTwo-author-details" : "sectionTwo-author-details"} `}
                  >
                    {!isSide && (
                      <>
                        <h4
                          className="mt-0"
                          id="about-authors"
                          style={{
                            paddingTop: "3rem",
                          }}
                        >
                          About Author
                        </h4>
                        <div
                          className="brave-scroll-gry"
                          style={{
                            position: "sticky",
                            top: "0",
                            height: "calc(100vh- 20vh)",
                            overflowY: "auto",
                            marginLeft: "8px",
                            // paddingLeft: "24px",
                          }}
                        >
                          {Object.keys(authdatadetails).length !== 0 &&
                            authdatadetails?.data1?.user_details?.[0]?.name && (
                              <div className="About-box">
                                <div className="">
                                  <div className="">
                                    <div className="about-box-inner">
                                      <div className="author-details">
                                        <div
                                          style={{
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "center",
                                          }}
                                        >
                                          <div className="user-img">
                                            <img
                                              src={icons?.avatarOneIcons}
                                              alt="docs-icons"
                                              loading="lazy"
                                            />
                                          </div>
                                        </div>
                                        <div>
                                          <h5
                                            className="about-user-text"
                                            style={{
                                              textTransform: "capitalize",
                                            }}
                                          >
                                            {authdatadetails?.data1
                                              ?.user_details?.[0]?.name || "-"}
                                          </h5>
                                          <p className="text-14-400 color-3333">
                                            Academy of Special Education named
                                            after{" "}
                                            <span
                                              style={{
                                                textTransform: "capitalize",
                                              }}
                                            >
                                              {authdatadetails?.data1
                                                ?.user_details?.[0]?.name ||
                                                "-"}
                                            </span>{" "}
                                            in Warsaw /
                                            <span
                                              style={{
                                                textTransform: "capitalize",
                                              }}
                                            >
                                              {authdatadetails?.data1
                                                ?.user_details?.[0]?.name ||
                                                "-"}
                                            </span>{" "}
                                            University, Institute of Psychology,
                                            Faculty Member
                                          </p>
                                          <div
                                            className="d-flex   mt-12"
                                            style={{
                                              gap: "14px",
                                              width: "100%",
                                            }}
                                          >
                                            <div style={{ width: "48%" }}>
                                              <Button
                                                leftIcon={icons?.pulseWIcons}
                                                btnText="Follow"
                                                className="text-16-500 color-ffff  h-43"
                                              />
                                            </div>
                                            <div style={{ width: "48%" }}>
                                              <Button
                                                leftIcon={icons?.chatBIcons}
                                                btnText="Message"
                                                className="text-16-500  h-43"
                                                btnStyle="BTA"
                                              />
                                            </div>
                                          </div>
                                          <div className="mt-10">
                                            <div className="fb-center mb-8">
                                              <p className="text-16-400 color-3333">
                                                Followers
                                              </p>
                                              <p className="text-16-600 color-3333">
                                                {authdatadetails?.data1
                                                  ?.user_details?.[0]?.followers
                                                  ? authdatadetails?.data1
                                                      ?.user_details?.[0]
                                                      ?.followers
                                                  : "-"}
                                              </p>
                                            </div>
                                            <div className="fb-center mb-8">
                                              <p className="text-16-400 color-3333">
                                                Following
                                              </p>
                                              <p className="text-16-600 color-3333">
                                                {authdatadetails?.data1
                                                  ?.user_details?.[0]
                                                  ?.followings
                                                  ? authdatadetails?.data1
                                                      ?.user_details?.[0]
                                                      ?.followings
                                                  : "-"}
                                              </p>
                                            </div>
                                            <div className="fb-center mb-8">
                                              <p className="text-16-400 color-3333">
                                                Co-authors
                                              </p>
                                              <p className="text-16-600 color-3333">
                                                {authdatadetails?.data1
                                                  ?.co_authors
                                                  ? authdatadetails?.data1
                                                      ?.co_authors
                                                  : "-"}
                                              </p>
                                            </div>
                                            <div className="fb-center mb-8">
                                              <p className="text-16-400 color-3333">
                                                Public views
                                              </p>
                                              <p className="text-16-600 color-3333">
                                                {console.log(
                                                  authdatadetails,
                                                  "authdatadetails"
                                                )}
                                                -
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                          <div
                            className="fb-center"
                            style={{ padding: "1.5rem" }}
                          >
                            {paperAuthdetails &&
                              paperAuthdetails?.length > 2 && (
                                <>
                                  <p className="text-18-500 color-0303 mb-0">
                                    {paperAuthdetails?.length - 2} More
                                  </p>

                                  <div className="fa-center gap-2">
                                    <p className="text-18-500  color-113D">
                                      View all
                                    </p>
                                    <img src={icons?.rightArrowIcons} />
                                  </div>
                                </>
                              )}
                          </div>

                          <div
                            style={{
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              gap: "22px",
                            }}
                          >
                            {Seconddetailsloadder ? (
                              <div className="loader-container d-flex justify-content-center">
                                <Spinner animation="border" variant="primary" />
                              </div>
                            ) : paperAuthdetails?.length > 0 ? (
                              paperAuthdetails.slice(0, 2).map((ele, index) => {
                                return (
                                  <div
                                    className="feed-published-box card-d "
                                    key={index}
                                  >
                                    <div>
                                      <div className="row">
                                        <div className="col-12">
                                          <div>
                                            <h4 className="post-title">
                                              {ele.title || ele.paper_title}
                                            </h4>
                                            {ele?.journal?.name ? (
                                              <p className="post-pra">
                                                {ele.journal.name}
                                              </p>
                                            ) : null}
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div
                                      className="gap-md-2"
                                      style={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "6px",
                                      }}
                                    >
                                      <span className="fa-center gap-1">
                                        <img
                                          src={icons?.calenderIcons}
                                          alt="docs-icons"
                                          loading="lazy"
                                          className="h-16 w-16 object-fit-contain"
                                        />
                                        {ele?.year ? (
                                          <p className="docs-title">
                                            {ele.year}
                                          </p>
                                        ) : (
                                          <p className="docs-title">
                                            {moment(ele.created_at).format(
                                              "DD MMM YYYY"
                                            )}
                                          </p>
                                        )}
                                      </span>

                                      {ele?.author_name ||
                                        (ele?.authors?.[0].name && (
                                          <span className="d-flex">
                                            <img
                                              src={icons?.avatarTwoIcons}
                                              className="w-20 h-20 rounded-circle "
                                            />
                                            <p className="docs-title">
                                              {ele?.author_name ||
                                                ele?.authors?.[0].name}
                                            </p>
                                          </span>
                                        ))}

                                      <span className="fa-center gap-1">
                                        <img
                                          src={icons?.eyeIcons}
                                          alt="docs-icons"
                                          loading="lazy"
                                          className="h-16 w-16 object-fit-contain"
                                        />
                                        <p className="docs-title">31 Views</p>
                                      </span>
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
                        </div>
                      </>
                    )}
                  </div>
                </section>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-40">
        <PackageDetails
          isSide={isSide}
          paperAuthdetails={paperAuthdetails}
          Seconddetailsloadder={Seconddetailsloadder}
          authors={authors}
          isUserSide={isUserSide}
          isRightSide={isRightSide}
        />
      </div>

      {isLanguageOpenModal && <SelectedLanguagemodel onHide={onHide} />}
      {isTexttospeechModal && (
        <ListenModelpopup onHide={onHide} abstract={abstract} />
      )}
      {isReference && <ReferenceManager onHide={onHide} />}
      {isAskPaper && <AskPaper onHide={onHide} />}
      {issavelist && <SaveTolist onHide={onHide} />}
      {isshare && <Share onHide={onHide} />}
      {isreport && <Report onHide={onHide} />}
    </div>
  );
};

export default FeedDetailsAuthor;
