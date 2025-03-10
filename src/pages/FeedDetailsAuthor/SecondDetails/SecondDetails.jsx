import { icons } from "@/utils/constants";
import "./SecondDetails.scss";
import { Button } from "@/components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectByTopics } from "@/store/userSlice/projectSlice";
import moment from "moment";
import { Spinner } from "react-bootstrap";
import { Authdata } from "@/store/userSlice/userDetailSlice";

const SecondDetails = ({
  isSide,
  authdata,
  paperAuthdetails,
  Seconddetailsloadder,
}) => {
  const [topicList, setIsTopicList] = useState([]);
  const [similarpaperloadder, setsimilarpaperloadder] = useState(false);
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.global);
  const { isUserSide, isRightSide } = reduxData || {};

  const fetchprojectTopics = async () => {
    const myTopics = await dispatch(getProjectByTopics());
    if (myTopics?.status === 200) {
      const topicListData = myTopics.data.response;
      const data = topicListData?.map((item) => item.Topic.topics);
      setIsTopicList(data);
    }
  };

  // const fetchSimilarPaprs = async () => {
  //   setsimilarpaperloadder(true);
  //   const query = `topics=${topicList}`;
  //   if (topicList.length > 0) {
  //     const result = await dispatch(getRecommendedPapers(query));

  //     if (result?.status === 200) {
  //       setsimilarpaperloadder(false);
  //       setSimilarPapers(result?.data?.response?.papers);
  //       // setPagination(result?.data?.response?.pagination);
  //     }
  //   }
  //   setsimilarpaperloadder(false);
  // };

  useEffect(() => {
    fetchprojectTopics();
  }, []);

  // useEffect(() => {
  //   fetchSimilarPaprs();
  // }, [topicList]);

  useEffect(async () => {
    const result = await dispatch(Authdata(1490970975));
  }, []);

  return (
    <div className="second-details-container">
      <div className="main-div">
        <div className={`${isSide ? "left-w-o" : "left-w"} `}>
          <div className="row">
            <div
              style={{
                width: `${isUserSide || isRightSide ? "75%" : "75%"}`,
                minWidth: "476px",
              }}
            >
              {/* <h4 className="sub-title-text" id="full-text">
                Full Text
              </h4>

              <div className="full-box">
                <div className="d-flex align-items-center gap-2">
                  <img src={icons?.docsBlueIcons} className="h-48 w-48" />
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
              </div> */}
              {/* similar Papers */}
            </div>
          </div>

          {/* About Author */}
        </div>
        {isSide && (
          <div
            className="side-bar "
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
            <div className="side-box-w">
              <h4 className="sub-title-text">About Author</h4>

              <div className="about-box-inner-b">
                <div className="user-img-b">
                  <img
                    src={icons?.aboutImgIcons}
                    alt="docs-icons"
                    loading="lazy"
                  />
                </div>
                <h5 className="about-user-text ">Sandra Buttibieg</h5>
                <p className="text-14-400 color-3333 ">
                  Academy of Special Education named after Maria Grzegorzewska
                  in Warsaw / Maria Grzegorzewska University, Institute of
                  Psychology, Faculty Member
                </p>
                <div className="fa-center mt-12 gap-2">
                  <Button
                    leftIcon={icons?.pulseWIcons}
                    btnText="Follow"
                    className="text-16-500 color-ffff w-139 h-43"
                  />
                  <Button
                    leftIcon={icons?.chatBIcons}
                    btnText="Message"
                    className="text-16-500  w-139 h-43"
                    btnStyle="BTA"
                  />
                </div>
                <div className="fb-center mb-8 mt-28">
                  <p className="text-16-400 color-3333">Followers</p>
                  <p className="text-16-600 color-3333">164</p>
                </div>
                <div className="fb-center mb-8">
                  <p className="text-16-400 color-3333">Following</p>
                  <p className="text-16-600 color-3333">39</p>
                </div>
                <div className="fb-center mb-8">
                  <p className="text-16-400 color-3333">Co-authors</p>
                  <p className="text-16-600 color-3333">7</p>
                </div>
                <div className="fb-center mb-8">
                  <p className="text-16-400 color-3333">Public views</p>
                  <p className="text-16-600 color-3333">7</p>
                </div>
              </div>
            </div>
            <div className="fb-center mt-28">
              <p className="text-16-500 color-0303 mb-0">
                More 139 papers from author{" "}
              </p>
              <div className="fa-center gap-2">
                <p className="text-16-500  color-113D">View all</p>
                <img src={icons?.rightArrowIcons} />
              </div>
            </div>
            {["1", "2", "3"].map((ele, index) => {
              return (
                <div className="feed-published-box card-d mt-18" key={index}>
                  <h4 className="post-title-b">
                    Analysis Of The Effect Of Financial Rewards, Religiosity,
                    And Job Market Considerations On Student Interest In A
                    Career In Islamic Financial Institutions (Study On Students
                    Of...
                  </h4>
                  <p className="post-pra">
                    Journal of Islamic Contemporary Accounting and Business |
                    VOL. 1
                  </p>

                  <div className="fa-center gap-1 mb-6">
                    <img
                      src={icons?.calenderIcons}
                      alt="docs-icons"
                      loading="lazy"
                      className="h-16 w-16  object-fit-contain"
                    />
                    <p className="docs-title">Jul 16, 2024</p>
                  </div>
                  <div className="fa-center gap-1 mb-6">
                    <img
                      src={icons?.userRoundIcons}
                      alt="docs-icons"
                      loading="lazy"
                      className="h-16 w-16  object-fit-contain"
                    />
                    <p className="docs-title">Sandra Buttibieg</p>
                  </div>
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
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SecondDetails;
