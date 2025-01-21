import { Button } from "@/components";
import "./FeedDetails.scss";
import { icons } from "@/utils/constants";
import Progress from "@/components/layouts/Progress";
import { useRef, useState } from "react";
import { useEffect } from "react";
import SimilarPeople from "./SimilarPeople";
import RePostPopUp from "./RepostPopUp";
import { useNavigate } from "react-router-dom";

const FeedDetails = () => {
  const dropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(6);
  const [isRePost, setIsRePost] = useState(false);

  const navigate = useNavigate();

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

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
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
        <h2 className="details-text">Personal Details</h2>
        <h4 className="pointer switch-text">Switch/Create Project</h4>
      </div>
      <div className="user-box">
        <div>
          <h3 className="user-name">Hi Mary Jane!</h3>
          <p className="user-pra">
            We’ve put together a selection of recommended papers that align with
            your interests.
          </p>
        </div>
        <div className="right-box">
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
          Information Systems Security, Large-scale Software +4 more
        </h4>
        <Button btnText="Edit Preferences" className="h-43" btnStyle="LBA" />
      </div>
      <div className="recommended-text">Recommended for you</div>

      <div
        className="feed-published-box card-d mt-18 pointer"
        onClick={() => {
          navigate("/feed-details-author");
        }}
      >
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
            <img src={icons?.actionIcons} alt="action-icons" loading="lazy" />
          </div>
        </div>
        <h4 className="post-title">
          Reviewing the effectiveness of artificial intelligence techniques
          against cyber security risks
        </h4>
        <p className="post-pra">
          The rapid increase in malicious cyber-criminal activities has made the
          field of cybersecurity a crucial research discipline. Over the areas,
          the advancement in information technology has...
        </p>
        <div className=" docs-box ">
          <img src={icons?.docsIcons} alt="docs-icons" loading="lazy" />
          <p className="docs-title">
            Global International Journal of Innovative Research
          </p>
        </div>
        <div className="post-details flex-wrap mt-8 gap-2">
          <div className="fa-center gap-1">
            <img
              src={icons?.userTwoIcons}
              alt="docs-icons"
              loading="lazy"
              className="h-20 w-20 rounded-circle"
            />
            <p className="docs-title">Herry Nugraha + 4</p>
          </div>
          <div className="fa-center  gap-md-2 gap-2">
            <div className="fa-center gap-1">
              <img
                src={icons?.calenderIcons}
                alt="docs-icons"
                loading="lazy"
                className="h-16 w-16  object-fit-contain"
              />
              <p className="docs-title">Jul 16, 2024</p>
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
                className="h-16 w-16  object-fit-contain"
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
          />
          <div className="fa-center gap-3">
            <div className="d-p">
              <Button
                btnText="Reposted"
                btnStyle="BTA"
                className="h-43 ps-18 pe-18"
                leftIcon={icons.reloadIcons}
                leftIconClass="h-16 w-16"
                onClick={() => {
                  setDropdownOpen(true);
                }}
              />
              {dropdownOpen && (
                <div className="dropdown-menus" ref={dropdownRef}>
                  <div
                    className="d-text"
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                  >
                    <h5 className="repost-text">Repost with your thoughts</h5>
                    <p className="repost-pra">
                      Share this post and your thoughts about it
                    </p>
                  </div>

                  <div
                    className="d-text mt-4"
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                  >
                    <h5 className="repost-text">Repost</h5>
                    <p className="repost-pra">
                      Instantly share this post with others
                    </p>
                  </div>
                  {/* <div
                    className="d-text"
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                  >
                    <h5 className="repost-text">Delete Repost</h5>
                  </div> */}
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
                {
                  icon: icons.upThumIcons,
                },
                {
                  icon: icons.downThumIcons,
                },
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
      <div className="feed-published-box card-d mt-18">
        <div className="d-flex justify-content-between">
          <h4 className="post-title">
            Reviewing the effectiveness of artificial intelligence techniques
            against cyber security risks
          </h4>
          <div className="h-24 w-24">
            <img src={icons?.actionIcons} alt="action-icons" loading="lazy" />
          </div>
        </div>
        <p className="post-pra">
          The rapid increase in malicious cyber-criminal activities has made the
          field of cybersecurity a crucial research discipline. Over the areas,
          the advancement in information technology has...
        </p>
        <div className=" docs-box ">
          <img src={icons?.docsIcons} alt="docs-icons" loading="lazy" />
          <p className="docs-title">
            Global International Journal of Innovative Research
          </p>
        </div>
        <div className="post-details flex-wrap mt-8 gap-2">
          <div className="fa-center gap-1">
            <img
              src={icons?.userTwoIcons}
              alt="docs-icons"
              loading="lazy"
              className="h-20 w-20 rounded-circle"
            />
            <p className="docs-title">Herry Nugraha + 4</p>
          </div>
          <div className="fa-center  gap-md-2 gap-2">
            <div className="fa-center gap-1">
              <img
                src={icons?.calenderIcons}
                alt="docs-icons"
                loading="lazy"
                className="h-16 w-16  object-fit-contain"
              />
              <p className="docs-title">Jul 16, 2024</p>
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
                className="h-16 w-16  object-fit-contain"
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
          />
          <div className="fa-center gap-3">
            <Button
              btnText="Repost"
              btnStyle="BTA"
              className="h-43 ps-18 pe-18"
              leftIcon={icons.reloadIcons}
              leftIconClass="h-16 w-16"
              onClick={() => {
                setIsRePost(true);
              }}
            />
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
                {
                  icon: icons.upThumIcons,
                },
                {
                  icon: icons.downThumIcons,
                },
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
        <div className="user-follow-box">
          <div className="d-flex align-items-center gap-2">
            <img
              src={icons?.userAIcons}
              alt="user-icons"
              loading="lazy"
              className="h-42 w-42 rounded-circle"
            />
            <p className="docs-title">Follow Herry Nugraha</p>
          </div>
          <div>
            <Button
              btnText="Follow"
              btnStyle="BTB"
              className="h-27 text-12-600 pt-6 pb-6 ps-10 pe-10 br-4"
            />
          </div>
        </div>
      </div>
      <div className="mt-18">
        <SimilarPeople />
      </div>
      <div className="post-d-box mt-18">
        <div className="post-details flex-wrap mt-8 gap-2 ms-8 me-8 pb-6">
          <div className="fa-center gap-1">
            <img
              src={icons?.userTwoIcons}
              alt="docs-icons"
              loading="lazy"
              className="h-20 w-20 rounded-circle"
            />
            <p className="docs-title">Herry Nugraha + 4</p>
          </div>
          <div className="fa-center  gap-md-2 gap-2">
            <div className="fa-center gap-1">
              <img
                src={icons?.calenderIcons}
                alt="docs-icons"
                loading="lazy"
                className="h-16 w-16  object-fit-contain"
              />
              <p className="docs-title">Jul 16, 2024</p>
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
                className="h-16 w-16  object-fit-contain"
              />
              <p className="docs-title">31 Views</p>
            </div>
          </div>
        </div>
        <p className="post-pra ms-8 me-8">
          The rapid increase in malicious cyber-criminal activities has made the
          field of cybersecurity a crucial research discipline. Over the areas,
          the advancement in information technology has...
        </p>

        <div className="feed-published-box card-d mt-18">
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
              <img src={icons?.actionIcons} alt="action-icons" loading="lazy" />
            </div>
          </div>
          <h4 className="post-title">
            Reviewing the effectiveness of artificial intelligence techniques
            against cyber security risks
          </h4>
          <p className="post-pra">
            The rapid increase in malicious cyber-criminal activities has made
            the field of cybersecurity a crucial research discipline. Over the
            areas, the advancement in information technology has...
          </p>
          <div className=" docs-box ">
            <img src={icons?.docsIcons} alt="docs-icons" loading="lazy" />
            <p className="docs-title">
              Global International Journal of Innovative Research
            </p>
          </div>
          <div className="post-details flex-wrap mt-8 gap-2">
            <div className="fa-center gap-1">
              <img
                src={icons?.userTwoIcons}
                alt="docs-icons"
                loading="lazy"
                className="h-20 w-20 rounded-circle"
              />
              <p className="docs-title">Herry Nugraha + 4</p>
            </div>
            <div className="fa-center  gap-md-2 gap-2">
              <div className="fa-center gap-1">
                <img
                  src={icons?.calenderIcons}
                  alt="docs-icons"
                  loading="lazy"
                  className="h-16 w-16  object-fit-contain"
                />
                <p className="docs-title">Jul 16, 2024</p>
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
                  className="h-16 w-16  object-fit-contain"
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
            />
            <div className="fa-center gap-3">
              <Button
                btnText="Read Paper"
                btnStyle="BTA"
                className="h-43 ps-18 pe-18"
                leftIcon={icons.reloadIcons}
                leftIconClass="h-16 w-16"
              />
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
                  {
                    icon: icons.upThumIcons,
                  },
                  {
                    icon: icons.downThumIcons,
                  },
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
          <div className="user-follow-box">
            <div className="d-flex align-items-center gap-2">
              <img
                src={icons?.userAIcons}
                alt="user-icons"
                loading="lazy"
                className="h-42 w-42 rounded-circle"
              />
              <p className="docs-title">Follow Herry Nugraha</p>
            </div>
            <div>
              <Button
                btnText="Follow"
                btnStyle="BTB"
                className="h-27 text-12-600 pt-6 pb-6 ps-10 pe-10 br-4"
              />
            </div>
          </div>
        </div>
      </div>

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
            disabled={currentPage === totalPages}
          />
          <Button
            btnText="Last"
            btnStyle="BTB"
            className="h-36 text-12-600 color-3333"
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          />
        </div>
      </div>
    </div>
  );
};

export default FeedDetails;
