import { icons } from "@/utils/constants";
import "./SecondDetails.scss";
import { Button } from "@/components";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getProjectByTopics,
  getRecommendedPapers,
} from "@/store/userSlice/projectSlice";
import moment from "moment";

const SecondDetails = ({ isSide }) => {
  const [topicList, setIsTopicList] = useState([]);
  const [similarPapers, setSimilarPapers] = useState([]);

  const dispatch = useDispatch();

  const fetchprojectTopics = async () => {
    const myTopics = await dispatch(getProjectByTopics());
    if (myTopics?.status === 200) {
      const topicListData = myTopics.data.response;
      const data = topicListData?.map((item) => item.Topic.topics);
      setIsTopicList(data);
    }
  };
  const fetchSimilarPaprs = async () => {
    const query = `topics=${topicList}`;
    if (topicList.length > 0) {
      const result = await dispatch(getRecommendedPapers(query));

      console.log(result?.data?.response, "Result");

      if (result?.status === 200) {
        setSimilarPapers(result?.data?.response?.papers);
        // setPagination(result?.data?.response?.pagination);
      }
    }
  };

  console.log(similarPapers, "similarPapers");

  useEffect(() => {
    fetchprojectTopics();
  }, []);

  useEffect(() => {
    fetchSimilarPaprs();
  }, [topicList]);
  return (
    <div className="second-details-container">
      <div className="main-div">
        <div className={`${isSide ? "left-w-o" : "left-w"}`}>
          <h4 className="sub-title-text" id="full-text">
            Full Text
          </h4>

          <div className="full-box">
            <div className="d-flex align-items-center gap-2">
              <img src={icons?.docsBlueIcons} className="h-48 w-48" />
              <div>
                <p className="text-18-500 color-0303 mb-4">Published version</p>
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
          {/* similar Papers */}
          <div className="similar-box">
            <h4 className="sub-title-text" id="similar-papers">
              Similar Papers
            </h4>
            {similarPapers &&
              similarPapers?.map((ele, index) => {
                return (
                  <div className="feed-published-box card-d mt-18" key={index}>
                    <div className="feed-flex">
                      <div className="w-d">
                        <h4 className="post-title">
                          {ele?.title || ele?.paper_title}
                        </h4>
                        <p className="post-pra">
                          Journal of Islamic Contemporary Accounting and
                          Business | VOL. 1
                        </p>
                      </div>
                      <div className="h-42 w-42">
                        <Button
                          leftIcon={icons?.activeSaveIcons}
                          btnStyle="LB"
                          className="h-42 w-42"
                          leftIconClass="h-16 w-16"
                        />
                      </div>
                    </div>

                    <div className="post-details flex-wrap mt-8 gap-2">
                      <div className="fa-center gap-1">
                        <img
                          src={icons?.userTwoIcons}
                          alt="docs-icons"
                          loading="lazy"
                          className="h-20 w-20 rounded-circle"
                        />

                        {ele?.authors && ele.authors.length > 0 ? (
                          <>
                            {ele.authors[0].name}
                            {ele.authors.length > 1 &&
                              ` +${ele.authors.length - 1}`}
                          </>
                        ) : ele?.author_name ? (
                          ele.author_name
                        ) : (
                          "No Authors"
                        )}
                      </div>
                      <div className="fa-center  gap-md-2 gap-2">
                        <div className="fa-center gap-1">
                          <img
                            src={icons?.calenderIcons}
                            alt="docs-icons"
                            loading="lazy"
                            className="h-16 w-16  object-fit-contain"
                          />
                          <p className="docs-title">
                            {ele.abstract_id
                              ? moment(ele.created_at).format("MMM DD,YYYY")
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
                            className="h-16 w-16  object-fit-contain"
                          />
                          <p className="docs-title">31 Views</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            <div className="f-center mt-18">
              <Button className="h-42" btnText="View more papers" />
            </div>
          </div>

          {/* About Author */}
          {!isSide && (
            <React.Fragment>
              <div className="About-box">
                <h4 className="sub-title-text" id="about-authors">
                  About Author
                </h4>
                <div className="row gy-3 mt-20">
                  <div className="col-lg-8">
                    <div className="about-box-inner">
                      <div className="d-flex align-items-center flex-wrap gap-3">
                        <div className="user-img">
                          <img
                            src={icons?.aboutImgIcons}
                            alt="docs-icons"
                            loading="lazy"
                          />
                        </div>
                        <div className="">
                          <h5 className="about-user-text">Sandra Buttibieg</h5>
                          <p className="text-14-400 color-3333">
                            Academy of Special Education named after Maria
                            Grzegorzewska in Warsaw / Maria Grzegorzewska
                            University, Institute of Psychology, Faculty Member
                          </p>
                          <div className="fa-center gap-2  mt-12">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="about-box-inner">
                      <div className="fb-center mb-8">
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
                </div>
              </div>
              <div className="fb-center mt-28">
                <p className="text-18-500 color-0303 mb-0">139 More </p>
                <div className="fa-center gap-2">
                  <p className="text-18-500  color-113D">View all</p>
                  <img src={icons?.rightArrowIcons} />
                </div>
              </div>
              {["1", "2", "3", "4"].map((ele, index) => {
                return (
                  <div className="feed-published-box card-d mt-18" key={index}>
                    <div className="feed-flex">
                      <div className="w-d">
                        <h4 className="post-title">
                          Analysis Of The Effect Of Financial Rewards,
                          Religiosity, And Job Market Considerations On Student
                          Interest In A Career In Islamic Financial Institutions
                          (Study On Students Of...
                        </h4>
                        <p className="post-pra">
                          Journal of Islamic Contemporary Accounting and
                          Business | VOL. 1
                        </p>
                      </div>
                      <Button
                        leftIcon={icons?.activeSaveIcons}
                        btnStyle="LB"
                        className="h-42 w-42"
                        leftIconClass="h-16 w-16"
                      />
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
                  </div>
                );
              })}
            </React.Fragment>
          )}
        </div>
        {isSide && (
          <div className="side-bar">
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
