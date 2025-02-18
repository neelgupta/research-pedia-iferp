import { useEffect, useState } from "react";
import "./FeedDetailsAuthor.scss";
import Breadcrumb from "@/components/layouts/Breadcrumb";
import { icons } from "@/utils/constants";
import { handleCopy } from "@/utils/helpers";
import { Button, TextInput } from "@/components";
import SecondDetails from "./SecondDetails";
import PackageDetails from "./PackageDetails";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecommendedPapersById } from "@/store/userSlice/projectSlice";
import moment from "moment";
import { getAuthorsPapers } from "@/store/userSlice/userDetailSlice";
import { Spinner } from "react-bootstrap";
import SelectedLanguagemodel from "./OpenModels/SelectedLanguagemodel";
import ListenModelpopup from "./OpenModels/ListenModelpopup";
import ReferenceManager from "./OpenModels/ReferenceManager";
import AskPaper from "./OpenModels/AskPaper";

const FeedDetailsAuthor = () => {
  const [showActive, setShowActive] = useState("Summary");
  const [isSide, setIsSide] = useState(false);
  const [paperDetails, setPaperDetails] = useState({});
  const [showAuthors, setShowAuthors] = useState(false);
  const [showCitation, setShowCitation] = useState(false);
  const [AutherIddetispaper, setAutherIddetispaper] = useState("");
  const [summaryloadder, setsummaryloadder] = useState(false);
  const [LanguageModel, setLanguageModel] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
  const topics = location?.state?.topics;

  const fetchPaper = async () => {
    setsummaryloadder(true);
    const id = location?.state;
    const paperId = id.paperId;
    const abstractId = id.abstractId;

    const result = await dispatch(
      getRecommendedPapersById(paperId, abstractId)
    );

    setAutherIddetispaper(
      result?.data?.response?.researchPapersWithSummary[0]?.authors[0]?.authorId
    );
    setPaperDetails(result?.data?.response?.researchPapersWithSummary[0]);

    if (result?.state === 200) {
      setsummaryloadder(false);
    }
    setsummaryloadder(false);
  };

  const [authdatadetails, setauthdata] = useState({
    status: 200,
    data: "PjEWfh2LHaz/8dE0NOFFn4uJ2nX2bOy6u+TT8c7FrT7gJZjhI6RHB7aXaptLm8cDGaM1tTK/lp1LnBaUli6dVnmgURbsGXXaUzhsbRQ5p+vV4+wqUeY3bDmeAAijXNZNFAhyVMixLW4UaBIVsKXgTnAIaUnvhFeCtfbn98eL9bKCMy4XS+1X/wmXvLI8pp7kU31pvzhM/omO9eXN14/GF1fFf+bEm0I7YHsZHq3VtCm0ThQ6kIGhXdof1xZgAMk0hmELBg2OXZbLxY7m2Sdu7FO+XkwWa96zv9zNEYcGhJFwNWaUFB0M6+17FoI6qCCBDvPosid3UDpNhferVbLZwatNjPd4oT8MBKoY+0Lz7ejrpBREihlRA8vesJn8jGOtfrUJ/BzTxvMR9YYf+QxJUAn9HMKEYGlqkS6XAKJjHmBm3zlXDdwf5EYoK0BY+8egdrXUiVqUn3qCd8DGwQsNagu2gl4rzTLFRN5I+DVwf9q1LyssiEPCJ8Rmorjm6TWB0TEzgJ2+7N6nwnChRxFHA04w4CD2lB7JQuT6RMVdKDjLJcdKFzW9X10rDrFj8VvHZuJSLkiStI795Wr4GnMtNuBi9WxSxdnlQCnRxYTygshoklCuZtdlwJ2k5Etnp6vCscP7P3iW/EFGJadthcn0gpWF73ilAlRSi8arFApZg7sprxXlCu2L+q/9XyOZJT7WRDJx/eJ6NpuHtXSS5uT1U+6HmgdJ0SlXiQ0ANO0xl+cpDJ3KEvg8GSQvoQWqocxLm1E9bsS62pvsLbYdJ/V3m+aVp8gWUhCDjFHb40PQh8RfNCKre7UxhEA3yecD3YEqp/DUP5/Cz2lAiOc0XKiOD4Zl1lw0s7hU94v1vUUlkpRQKje03unaIlCjaZokDplIhshvnwH1rRB8ABBFvZRrDLAOl2d83ptmA6Gm+ou2/yoGnJK4xXDYAcIrMm5NxrqjqH7ukFxszF9JlvEFAFA15NeEoxNGlkBIxbMa5X67WeDn+Ouw/l3HqvyTFXkCPDhDxOayQ5l9h4rWbRf0Hdhe634QgODWX5wcVp3z9BbXhp+1flL0/iF7S0J4dfQ0rVV00FcWj7GHFA058Q/Tuuz03sz9CPMj6oLHRO2pd1BVrL3YW/91YUp5OX6zT8cM9zUeWhXS2xLA786xQi+IxEKvyArK+3dDoFRvwDEWjPgQorcKZKzgPQIOlKgdnaaT2YVGn8Z+pWJrZNPRrEgk29cXadt5bvpdcVpuKd3ucXXH0T8HtTR2cqiTX/Z12hTjZ4oOMNwwqVPGASla5Ys4g+Dm8OgXjCh6qOMoiu+oLMw71sKcGjcDLBZumY7ZCTrbRD1pOENugEc6d66gaI4TaAjglkvog51ShzzAzhu0EVyO86xfqFys4p7bD/AuvHVxWokEdVeOVJp0FLYu3rc8SplRwJtLysTjZHV1Fnp2wpZrP6MIQEVR6uQZJuCF4AtZPMaNub0lA7tYOT/6zbDGg2Y/njqn89gxqHPUPUy0ZIhoHTuPMXkizYwvO+7+HXmxY591j8V2guz1YwlR92WE30up+U/0r7eWMZi5AgRqW3TaGL+4jBS+cYirJwmB3HVPopW0KcydM0lM7kzxmb2uBKxMo6PA/8zn7JVsxk9/k6l3lf+SLWYVftFpGvwiQcX7Zkkc8kSWPOACYa9y9OUMXZWHKQ==",
    data1: {
      education_details: {
        id: 88596,
        user_id: 89402,
        ug_course: "2",
        ug_course_name: "BA",
        ug_department: "1",
        ug_department_name: "Digital Filmmaking",
        ug_university: "581",
        ug_university_name: "Other",
        ug_institution: "1",
        ug_institution_name:
          "Parvathaneni Brahmayya Siddhartha college of Arts & Science",
        ug_year_of_completion: "2024-01-31",
        pg_course: "9",
        pg_course_name: "MSc",
        pg_department: "2",
        pg_department_name: "Accountancy",
        pg_university: "1",
        pg_university_name: "University of Petroleum and Energy Studies",
        pg_institution: "2",
        pg_institution_name:
          "Annamacharya Institute of Technology and Sciences",
        pg_year_of_completion: "2024-12-02",
        phd_course: "18",
        phd_course_name: "Ph.D",
        phd_department: "3",
        phd_department_name: "Actuarial Science",
        phd_university: "2",
        phd_university_name: "DAV Institute of Engineering & Technology",
        phd_institution: "1",
        phd_institution_name:
          "Parvathaneni Brahmayya Siddhartha college of Arts & Science",
      },
      co_authors: 26,
      user_details: [
        {
          id: 5,
          name: "Pritesh Professional",
          country: "India",
          state: "Bihar",
          followers: 6,
          profile_photo_path: "profile-82284-1737716349.png",
          followings: 10,
          user_type: "2",
        },
      ],
      topics: [
        "Conference",
        "Digital Context",
        "University Teaching Role",
        "New Learning Scenarios",
      ],
    },
    message: "User data!",
  });

  const [paperAuthdetails, setpaperAuthdetails] = useState();
  const [Seconddetailsloadder, setSeconddetailsloadder] = useState(false);

  const [showAllAuthors, setShowAllAuthors] = useState(false);

  const fetchauterdetais = async () => {
    setSeconddetailsloadder(true);
    // AutherIddetispaper
    const res = await dispatch(getAuthorsPapers(49184733));
    if (res?.status === 200) {
      setpaperAuthdetails(res?.data?.response?.papers);
      setSeconddetailsloadder(false);
    }
    setSeconddetailsloadder(false);
  };

  useEffect(() => {
    fetchauterdetais();
  }, []);

  const {
    // Sementic Dat
    abstract,
    externalIds,
    authors,
    citations,
    publicationDate,
    journal,
    summary,
    title,
    url,
    year,
    // IFERP DB
    paper_title,
    author_name,
  } = paperDetails || {};

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

  const handleClickAboutAuthors = () => {
    setShowActive("About Author");
    const aboutAuthorsElement = document.getElementById("about-authors");
    if (aboutAuthorsElement) {
      aboutAuthorsElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    fetchPaper();
  }, []);

  const reduxData = useSelector((state) => state.global);
  const { isUserSide, isRightSide } = reduxData || {};

  const [visibleCount, setVisibleCount] = useState(2);
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    if (showMore) {
      setVisibleCount(2);
    } else {
      setVisibleCount(authdatadetails?.data1?.topics?.length);
    }
    setShowMore(!showMore);
  };
  const [isLanguageOpenModal, setIsLanguageOpenModal] = useState(false);
  const [isTexttospeechModal, setIsTexttospeechModal] = useState(false);
  const [isReference, setisReference] = useState(false);
  const [isAskPaper, setisAskPaper] = useState(false);
  const onHide = () => {
    setIsLanguageOpenModal(false);
    setIsTexttospeechModal(false);
    setisReference(false);
    setisAskPaper(false);
  };
  return (
    <div className="feed-details-author-container">
      <div className="row">
        <div
          className={`${isUserSide || isRightSide ? "col-12 " : "col-xl-8 col-lg-7"}`}
        >
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
                <h1 className="title-text mt-24">
                  {title ? title : paper_title ? paper_title : "-"}
                </h1>
                <div className="mt-26">
                  <div className="row gy-3">
                    <div className="col-12">
                      {/* <p
                      className={`pra-text     ${isSide ? "pra-sm" : "pra-m"}`}
                    >
                      <img
                        src={icons?.avatarTwoIcons}
                        className="h-32 w-32 rounded-circle me-5"
                      />

                      {authors
                        ? showAuthors && authors.length > 0
                          ? authors?.map((item) => (
                              <span key={item.id}>{item.name}</span>
                            ))
                          : authors?.length > 0 && (
                                <>
                                  {authors[0].name}, {authors[1]?.name}
                                </>
                              )
                            ? author_name
                            : author_name
                        : "Null"}

                      <div className="mt-10">
                        {authdatadetails && authdatadetails?.length > 2 && (
                          <span
                            className="span-pra "
                            onClick={() => setShowAuthors(!showAuthors)}
                          >
                            {!showAuthors
                              ? `+ Show ${authdatadetails?.length - 2} more`
                              : "   Show Less"}
                          </span>
                        )}
                      </div>
                    </p> */}
                      {/* <p className={`pra-text ${isSide ? "pra-sm" : "pra-m"}`}>
                        <img
                          src={icons?.avatarTwoIcons}
                          className="h-32 w-32 rounded-circle me-5"
                        />

                        {authors
                          ? showAuthors && authors.length > 0
                            ? authors?.map((item) => (
                                <span key={item.id}>{item.name}</span>
                              ))
                            : authors?.length > 0 && (
                                  <>
                                    {console.log(authors[0].name, "AUTHORS")}
                                    {authors[0]?.name}, {authors[1]?.name}
                                  </>
                                )
                              ? author_name
                              : author_name
                          : "No author found"}

                        <div className="mt-10">
                          {authdatadetails && authdatadetails.length > 2 && (
                            <span
                              className="span-pra "
                              onClick={() => setShowAuthors(!showAuthors)}
                            >
                              {!showAuthors
                                ? `+ Show ${authdatadetails.length - 2} more`
                                : "   Show Less"}
                            </span>
                          )}
                        </div>
                      </p> */}

                      <p className={`pra-text ${isSide ? "pra-sm" : "pra-m"}`}>
                        {authors && authors.length > 0 ? (
                          <>
                            {authors.slice(0, 2).map((item) => (
                              <>
                                <img
                                  src={icons?.avatarTwoIcons}
                                  className="h-32 w-32 rounded-circle me-5"
                                />
                                <span key={item.id}>{item.name} </span>
                              </>
                            ))}

                            {showAllAuthors &&
                              authors.slice(2).map((item) => (
                                <>
                                  <img
                                    src={icons?.avatarTwoIcons}
                                    className="h-32 w-32 rounded-circle me-5"
                                  />
                                  <span key={item.id}>{item.name} </span>
                                </>
                              ))}

                            <div className="mt-10">
                              {authdatadetails &&
                                authdatadetails?.length > 2 && (
                                  <span
                                    className="span-pra "
                                    onClick={() => setShowAuthors(!showAuthors)}
                                  >
                                    {!showAuthors
                                      ? `+ Show ${authdatadetails?.length - 2} more`
                                      : "   Show Less"}
                                  </span>
                                )}
                            </div>
                          </>
                        ) : (
                          "No author found"
                        )}

                        {/* Show "Show More" or "Show Less" */}
                        <div className="mt-10">
                          {authdatadetails && authdatadetails.length > 2 && (
                            <span
                              className="span-pra"
                              onClick={() => setShowAllAuthors(!showAllAuthors)} // Toggle the visibility of the remaining authors
                            >
                              {!showAllAuthors
                                ? `+ Show ${authors.length - 2} more`
                                : "Show Less"}
                            </span>
                          )}
                        </div>
                      </p>

                      {/* <p className={`pra-text ${isSide ? "pra-sm" : "pra-m"}`}>
                        {authors && authors.length > 0
                          ? authors.map((item) => (
                              <>
                                <img
                                  src={icons?.avatarTwoIcons}
                                  className="h-32 w-32 rounded-circle me-5"
                                />
                                <span key={item.id}>{item.name}</span>
                              </>
                            ))
                          : "No author found"}

                        <div className="mt-10">
                          {authdatadetails && authdatadetails.length > 2 && (
                            <span
                              className="span-pra"
                              onClick={() => setShowAuthors(!showAuthors)}
                            >
                              {!showAuthors
                                ? `+ Show ${authdatadetails.length - 2} more`
                                : "Show Less"}
                            </span>
                          )}
                        </div>
                      </p> */}

                      <div
                        className="fa-center gap-2 pointer"
                        onClick={() => {
                          dispatch(handleCopy(externalIds?.DOI));
                        }}
                      >
                        <p className="link-text">
                          {externalIds?.DOI || "Null"}
                        </p>
                        <img src={icons?.copyIcons} alt="copy-icons" />
                        <span className="copy-text">Copy DOI</span>
                      </div>

                      <div className="">
                        <div
                          className="brave-scroll"
                          style={{
                            maxHeight: "300px",
                            overflowY: "auto",
                            marginTop: "10px",
                          }}
                        >
                          <div className="d-flex flex-wrap gap-3">
                            {authdatadetails?.data1?.topics
                              .slice(0, visibleCount)
                              .map((topic, index) => (
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
                        </div>

                        {/* Toggle button for Show More / Show Less */}
                        <span
                          onClick={handleToggle}
                          className="text-14-500 color-113D"
                          style={{ cursor: "pointer" }}
                        >
                          {showMore
                            ? "- Show Less"
                            : `+ Show ${authdatadetails?.data1?.topics?.length - visibleCount} more`}
                        </span>
                      </div>
                    </div>
                    {/* <div className={`${isSide ? "col-12" : "col-lg-5"}`}>
                <div className={`details-box ${isSide ? "b-c-details" : ""}`}>
                  {journal && journal.name && (
                    <div className="fa-center gap-2">
                      <img
                        src={icons?.docsAIcons}
                        alt="calender-icons"
                        loading="lazy"
                        className="h-22 w-22 object-fit-contain"
                      />
                      <p className="calender-text">Journal:{journal.name}</p>
                    </div>
                  )}

                  <div className={`${isSide ? "d-flex gap-2" : ""}`}>
                    {publicationDate && (
                      <div className="fa-center gap-2  mt-16">
                        <img
                          src={icons?.calenderAIcons}
                          alt="calender-icons"
                          loading="lazy"
                          className="h-22 w-22 object-fit-contain"
                        />
                        <p className="calender-text">
                          Publication Date:
                          {moment(publicationDate).format(" MMM DD, YYYY")}
                        </p>
                      </div>
                    )}

                    <div className="fa-center gap-2 mt-16">
                      <img
                        src={icons?.eyesBIcons}
                        alt="calender-icons"
                        loading="lazy"
                        className="h-22 w-22 object-fit-contain"
                      />
                      <p className="calender-text">31 Views</p>
                    </div>
                  </div>
                </div>
                {isSide && (
                  <div
                    className={`fa-center gap-3 ${isSide ? "mt-26" : "mt-16"}`}
                  >
                    <Button
                      btnText="#Islamic Financial Institutions In Malaysia"
                      className="h-41"
                      btnStyle="BBA"
                    />
                    <Button
                      btnText="#Islamic Financial Institutions"
                      btnStyle="BBA"
                      className="h-41"
                    />
                    <p className="show-text">
                      {" "}
                      <img
                        src={icons?.pulseBIcons}
                        className="h-12 w-12"
                      />{" "}
                      Show 8 more
                    </p>
                  </div>
                )}
              </div> */}
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
                    simplify the process with a comprehensive overview of new
                    and popular works for your research topic.
                  </p>
                  <p className="review-pra">
                    Request your preferred subject area for your Literature
                    Review
                  </p>
                  <div className="search-box">
                    <div className="btn-search">
                      <TextInput
                        placeholder="Social Psychology"
                        className="h-51 black-b"
                      />
                    </div>
                    <div className="btn-c">
                      <Button
                        btnText="Get your literature review"
                        rightIcon={icons?.rightLIcons}
                        rightIconClass="h-14 w-14 object-fit-contain"
                        btnStyle="BBA"
                        className="h-51"
                      />
                    </div>
                  </div>
                </div>
                {/* SEARCH  */}
                <div
                  className="search-div-box"
                  style={{
                    position: "sticky",
                    top: "0",
                    zIndex: 10,
                  }}
                >
                  <div className="search-btn-box">
                    <div
                      className={`${showActive === "Summary" ? "show-active-b" : "show-text-b"}`}
                      onClick={handleClickSummary}
                    >
                      Summary
                    </div>
                    <div
                      className={`${showActive === "Abstract" ? "show-active-b" : "show-text-b"}`}
                      onClick={handleClickActive}
                    >
                      Abstract
                    </div>
                    <div
                      className={`${showActive === "Full-Text" ? "show-active-b" : "show-text-b"}`}
                      onClick={handleClickFullText}
                    >
                      Full-Text
                    </div>
                    <div
                      className={`${showActive === "Similar Papers" ? "show-active-b" : "show-text-b"}`}
                      onClick={handleClickSimilarPapers}
                    >
                      Similar Papers
                    </div>
                    <div
                      className={`${showActive === "About Author" ? "show-active-b" : "show-text-b"}`}
                      onClick={handleClickAboutAuthors}
                    >
                      About Author
                    </div>
                  </div>
                  {!isSide && (
                    <div className="btn-g">
                      <Button
                        btnStyle="bg-ffff"
                        className="h-41"
                        leftIcon={icons?.translateIcons}
                      />
                      <Button
                        btnStyle="bg-ffff"
                        className="h-41"
                        leftIcon={icons?.playIcons}
                      />
                      <Button
                        btnStyle="bg-ffff"
                        className="h-41"
                        leftIcon={icons?.askIcons}
                      />
                      <Button
                        btnStyle="bg-ffff"
                        className="h-41"
                        leftIcon={icons?.uploadBIcons}
                      />
                      <Button
                        btnStyle="bg-ffff"
                        className="h-41"
                        leftIcon={icons?.activeSaveIcons}
                      />
                      <Button
                        btnStyle="bg-ffff"
                        className="h-41"
                        leftIcon={icons?.driveIcons}
                      />
                      <Button
                        btnStyle="bg-ffff"
                        className="h-41"
                        leftIcon={icons?.shareIcons}
                      />
                      <Button
                        btnStyle="bg-ffff"
                        className="h-41"
                        leftIcon={icons?.reportIcons}
                      />
                    </div>
                  )}
                </div>
                {/* Summary */}
                <h4 className="sub-title-text" id="summary">
                  Summary
                </h4>
                <div className="d-flex gap-3 justify-content-between mt-28 mb-28">
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
                <div className="abstract-box">
                  <h4 className="sub-title-text" id="abstract">
                    Abstract
                  </h4>
                  <p className="abstract-text text-justify">
                    {abstract && abstract}
                  </p>
                </div>
                <div className="ask-box">
                  <div className="d-flex align-items-center gap-2">
                    <img src={icons?.docSearchIcons} className="h-48 w-48" />
                    <p className="text-18-500 color-0303"> Ask this paper</p>
                  </div>
                  <div className="fa-center">
                    <img
                      src={icons?.rightSAIcons}
                      className="h-24 w-24 object-fit-contain pointer"
                    />
                  </div>
                </div>
              </div>

              {isSide && (
                <div className="side-bar">
                  <div className="side-t" onClick={() => {}}>
                    <Button
                      leftIcon={icons?.translateIcons}
                      btnStyle="Lb"
                      leftIconClass="h-24 w-24"
                      className="h-48 w-48 pb-12 pt-8"
                    />
                    <p className="side-items">
                      Translate this paper in your preferred languages
                    </p>
                  </div>
                  <div className="side-t">
                    <Button
                      leftIcon={icons?.playIcons}
                      btnStyle="Lb"
                      leftIconClass="h-24 w-24"
                      className="h-48 w-48 pb-12 pt-8"
                    />
                    <p className="side-items">
                      Listen to the abstract of this paper
                    </p>
                  </div>
                  <div className="side-t">
                    <Button
                      leftIcon={icons?.askIcons}
                      btnStyle="Lb"
                      leftIconClass="h-24 w-24"
                      className="h-48 w-48 pb-12 pt-8"
                    />
                    <p className="side-items">Ask Paper</p>
                  </div>
                  <div className="side-t">
                    <Button
                      leftIcon={icons?.uploadBIcons}
                      btnStyle="Lb"
                      leftIconClass="h-24 w-24"
                      className="h-48 w-48 pb-12 pt-8"
                    />
                    <p className="side-items">Export to reference manager</p>
                  </div>
                  <div className="side-t">
                    <Button
                      leftIcon={icons?.activeSaveIcons}
                      btnStyle="Lb"
                      leftIconClass="h-24 w-24"
                      className="h-48 w-48 pb-12 pt-8"
                    />
                    <p className="side-items">Bookmark</p>
                  </div>
                  <div className="side-t">
                    <Button
                      leftIcon={icons?.driveIcons}
                      btnStyle="Lb"
                      leftIconClass="h-24 w-24"
                      className="h-48 w-48 pb-12 pt-8"
                    />
                    <p className="side-items">Save to drive</p>
                  </div>
                  <div className="side-t">
                    <Button
                      leftIcon={icons?.shareIcons}
                      btnStyle="Lb"
                      leftIconClass="h-24 w-24"
                      className="h-48 w-48 pb-12 pt-8"
                    />
                    <p className="side-items">Share</p>
                  </div>
                  <div className="side-t">
                    <Button
                      leftIcon={icons?.reportIcons}
                      btnStyle="Lb"
                      leftIconClass="h-24 w-24"
                      className="h-48 w-48 pb-12 pt-8"
                    />
                    <p className="side-items">Report</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div
          className={`${isUserSide || isRightSide ? "col-12" : "col-xl-4 col-lg-5"}`}
        >
          <div
            className="auth-side brave-scroll"
            style={{
              position: "sticky",
              top: "0",
              height: "calc(100vh- 20px)",
              overflowY: "auto",
            }}
          >
            <div
              className="d-flex align-items-center gap-2 mt-10"
              onClick={() => setIsLanguageOpenModal(true)}
              style={{ cursor: "pointer" }}
            >
              <div>
                <img
                  src={icons.authorsideicon1}
                  alt="authorsideicon1"
                  className="img-fluid w-48 h-48"
                />
              </div>
              <div>
                <h1 className="text-16-400 color-3333">
                  Translate this paper in your preferred language
                </h1>
              </div>
            </div>
            <div
              className="d-flex  align-items-center gap-2 mt-10"
              onClick={() => setIsTexttospeechModal(true)}
              style={{ cursor: "pointer" }}
            >
              <div>
                <img
                  src={icons.authorsideicon2}
                  alt="authorsideicon1"
                  className="img-fluid w-48 h-48"
                />
              </div>
              <div>
                <h1 className="text-16-400 color-3333">
                  Listen to the abstract of this paper
                </h1>
              </div>
            </div>
            <div
              className="d-flex  align-items-center gap-2 mt-10"
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
                <h1 className="text-16-400 color-3333">Ask Paper</h1>
              </div>
            </div>
            <div
              className="d-flex  align-items-center gap-2 mt-10"
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
                <h1 className="text-16-400 color-3333">
                  Export to reference manager
                </h1>
              </div>
            </div>
            <div className="d-flex  align-items-center gap-2 mt-10">
              <div>
                <img
                  src={icons.authorsideicon5}
                  alt="authorsideicon1"
                  className="img-fluid w-48 h-48"
                />
              </div>
              <div>
                <h1 className="text-16-400 color-3333">Bookmark</h1>
              </div>
            </div>
            <div className="d-flex  align-items-center gap-2 mt-10">
              <div>
                <img
                  src={icons.authorsideicon6}
                  alt="authorsideicon1"
                  className="img-fluid w-48 h-48"
                />
              </div>
              <div>
                <h1 className="text-16-400 color-3333">Save to drive</h1>
              </div>
            </div>
            <div className="d-flex  align-items-center gap-2 mt-10">
              <div>
                <img
                  src={icons.authorsideicon7}
                  alt="authorsideicon1"
                  className="img-fluid w-48 h-48"
                />
              </div>
              <div>
                <h1 className="text-16-400 color-3333">Share</h1>
              </div>
            </div>
            <div className="d-flex  align-items-center gap-2 mt-10">
              <div>
                <img
                  src={icons.authorsideicon8}
                  alt="authorsideicon1"
                  className="img-fluid w-48 h-48"
                />
              </div>
              <div>
                <h1 className="text-16-400 color-3333">Report</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SecondDetails
        isSide={isSide}
        handleClickFullText={handleClickFullText}
        authdata={authdatadetails}
        paperAuthdetails={paperAuthdetails}
        Seconddetailsloadder={Seconddetailsloadder}
      />
      <div className="mt-40">
        <PackageDetails
          isSide={isSide}
          paperAuthdetails={paperAuthdetails}
          Seconddetailsloadder={Seconddetailsloadder}
        />
      </div>

      {isLanguageOpenModal && <SelectedLanguagemodel onHide={onHide} />}
      {isTexttospeechModal && <ListenModelpopup onHide={onHide} />}
      {isReference && <ReferenceManager onHide={onHide} />}
      {isAskPaper && <AskPaper onHide={onHide} />}
    </div>
  );
};

export default FeedDetailsAuthor;
