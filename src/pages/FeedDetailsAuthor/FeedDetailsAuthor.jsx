import { useState } from "react";
import "./FeedDetailsAuthor.scss";
import Breadcrumb from "@/components/layouts/Breadcrumb";
import { icons } from "@/utils/constants";
import { handleCopy } from "@/utils/helpers";
import { Button, TextInput } from "@/components";
import SecondDetails from "./SecondDetails";
import PackageDetails from "./PackageDetails";

const FeedDetailsAuthor = () => {
  const [showActive, setShowActive] = useState("Summary");
  const [isSide, setIsSide] = useState(false);
  return (
    <div className="feed-details-author-container">
      <div className="main-div">
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
            Al-Siyāsah al-Shar‘iyyah’s consideration and its approach among the
            governors in Islamic financial institutions: a Malaysian’s
            experience
          </h1>
          <div className="mt-26">
            <div className="row gy-3">
              <div className={`${isSide ? "col-12" : "col-lg-7"}`}>
                <p className={`pra-text     ${isSide ? "pra-sm" : "pra-m"}`}>
                  <img
                    src={icons?.avatarTwoIcons}
                    className="h-32 w-32 rounded-circle me-5"
                  />
                  Ahmad Akram Mahmad Robbi, Muhammad Shahrul Ifwat Ishak{" "}
                  <span className="span-pra">+ Show 1 more</span>
                </p>
                <div className="fa-center gap-2">
                  <p className="link-text">
                    https://doi.org/10.1108/jima-05-2023-0155
                  </p>
                  <img
                    src={icons?.copyIcons}
                    alt="copy-icons"
                    className="pointer"
                    onClick={() => {
                      handleCopy(`https://doi.org/10.1108/jima-05-2023-0155`);
                    }}
                  />
                  <span className="copy-text">Copy DOI</span>
                </div>
                {!isSide && (
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
              </div>
              <div className={`${isSide ? "col-12" : "col-lg-5"}`}>
                <div className={`details-box ${isSide ? "b-c-details" : ""}`}>
                  <div className="fa-center gap-2">
                    <img
                      src={icons?.docsAIcons}
                      alt="calender-icons"
                      loading="lazy"
                      className="h-22 w-22 object-fit-contain"
                    />
                    <p className="calender-text">
                      Journal: <span>Journal of Islamic Marketing</span>
                    </p>
                  </div>
                  <div className={`${isSide ? "d-flex gap-2" : ""}`}>
                    <div className="fa-center gap-2  mt-16">
                      <img
                        src={icons?.calenderAIcons}
                        alt="calender-icons"
                        loading="lazy"
                        className="h-22 w-22 object-fit-contain"
                      />
                      <p className="calender-text">
                        Publication Date: May 27, 2024
                      </p>
                    </div>
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
              </div>
            </div>
          </div>
          {/* review */}
          <div className="review-box">
            <div className="fa-center gap-1">
              <Button btnText="New" className="h-29 pt-6 pb-6 br-8 w-51" />
              <h4 className="review-text">
                Get your research rolling with a Literature Review
              </h4>
            </div>
            <p className="review-pra">
              Skip hour sifting through countless paper. Academia can simplify
              the process with a comprehensive overview of new and popular works
              for your research topic.
            </p>
            <p className="review-pra">
              Request your preferred subject area for your Literature Review
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
          <div className="search-div-box">
            <div className="search-btn-box">
              <div
                className={`${showActive === "Summary" ? "show-active-b" : "show-text-b"}`}
                onClick={() => {
                  setShowActive("Summary");
                }}
              >
                Summary
              </div>
              <div
                className={`${showActive === "Abstract" ? "show-active-b" : "show-text-b"}`}
                onClick={() => {
                  setShowActive("Abstract");
                }}
              >
                Abstract
              </div>
              <div
                className={`${showActive === "Full-Text" ? "show-active-b" : "show-text-b"}`}
                onClick={() => {
                  setShowActive("Full-Text");
                }}
              >
                Full-Text
              </div>
              <div
                className={`${showActive === "Similar Papers" ? "show-active-b" : "show-text-b"}`}
                onClick={() => {
                  setShowActive("Similar Papers");
                }}
              >
                Similar Papers
              </div>
              <div
                className={`${showActive === "About Author" ? "show-active-b" : "show-text-b"}`}
                onClick={() => {
                  setShowActive("About Author");
                }}
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
          <h4 className="sub-title-text">Summary</h4>
          <div className="d-flex gap-3 justify-content-between mt-28 mb-28">
            <div className="d-flex gap-2">
              <img
                src={icons?.activeStarIcons}
                alt="active-star"
                loading="lazy"
                className="h-24 w-24"
              />
              <p className="summer-text">
                This paper summarizes the discovery of the asymptomatic
                infection cases. analyzes their outcomes and transmission risks,
                and put forward the targeted suggestions for the prevention and
                control of asymptic infection of COVID-19 according to the
                existing problems in epidemic response
              </p>
            </div>
            <img
              src={icons?.lightCIcons}
              alt="copy"
              className="h-24 w-24 pointer"
            />
          </div>
          {/* Abstract */}
          <div className="abstract-box">
            <h4 className="sub-title-text">Abstract</h4>
            <p className="abstract-text">
              Purpose Islamic financial institutions (IFIs) in Malaysia continue
              to promote Shari‘ah-compliant business and transactions. As a
              result, the governors have a lot to think about before issuing any
              fatwa or ordinance, which impacts the majority of Malaysians.
              Nevertheless, the point of views from the governors have not been
              highlighted much. This research seeks to investigate the extent to
              which the conception of al-Siyasah al-Shar‘iyyah is embraced by
              Shari‘ah committees’ leadership roles within IFIs. The importance
              of al-Siyasah al-Shar‘iyyah in decision-making makes abandoning
              the Shari‘ah principle untenable and its significant role for IFIs
              in Malaysia cannot be overstated. It serves as a crucial tool for
              decision-making by authorities and governors.
              Design/methodology/approach The objectives of this research are
              attained by examining diverse sources obtained through library
              research, encompassing books, journals, newspapers, websites and
              reports. In addition, to use an analytical method to assess the
              role of al-Siyasah al-Shar‘iyyah in IFIs pratical, the authors
              collect information through interviews with five participants
              actively engaged in Shari‘ah committees within financial
              institutions, both directly and indirectly. Findings The research
              paper concludes that al-Siyasah al-Shar‘iyyah holds significance
              for Shari‘ah committees in IFIs when providing legal opinions. In
              situations where existing madhhab-based laws prove insufficient
              for addressing a particular issue, the Shari‘ah committees will
              autonomously engage in new ijtihad to ensure effective resolution
              of the matter. Research limitations/implications The implication
              that could have been resulted from this study is to indicate how
              Shari‘ah committees in IFIs structuring a set of rules and
              regulations embedded by al-Siyasah al-Shar‘iyyah elements to
              produce maṣlaḥaḥ for the ummah. This perspective is barely
              discussed in depth as Malaysia has unanimous scholars who work in
              this area. Thus, the authors attempt to bring the discussion
              academically and express the point of view from governors’
              perspective. Originality/value In the Malaysian context, where
              Islamic banks and financial institutions are overseen by Shari‘ah
              committee members and the Central Bank of Malaysia, this study
              delves into the practical experiences of governors in carrying out
              the responsibilities of al-Siyasah al-Shar‘iyyah within the
              decision-making process. The objective is to investigate the
              perspectives of Shari‘ah committees when they encounter scenarios
              where prevailing madhhab opinions prove inadequate in addressing
              contemporary issues within the country.
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
            <div className="side-t">
              <Button
                leftIcon={icons?.translateIcons}
                btnStyle="Lb"
                leftIconClass="h-24 w-24"
                className="h-48 w-48 pb-12 pt-8"
              />
              <p className="side-items">
                Translate this paper in your preferred language
              </p>
            </div>
            <div className="side-t">
              <Button
                leftIcon={icons?.playIcons}
                btnStyle="Lb"
                leftIconClass="h-24 w-24"
                className="h-48 w-48 pb-12 pt-8"
              />
              <p className="side-items">Listen to the abstract of this paper</p>
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
      <SecondDetails isSide={isSide} />
      <div className="mt-28">
        <PackageDetails isSide={isSide} />
      </div>
    </div>
  );
};

export default FeedDetailsAuthor;
