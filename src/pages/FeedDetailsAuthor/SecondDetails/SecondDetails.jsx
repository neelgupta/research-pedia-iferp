import { icons } from "@/utils/constants";
import "./SecondDetails.scss";
import { Button } from "@/components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProjectByTopics,
  getRecommendedPapers,
} from "@/store/userSlice/projectSlice";
import moment from "moment";

const SecondDetails = ({ isSide, authdata,
  // authdetails
}) => {
  const [topicList, setIsTopicList] = useState([]);
  const [similarPapers, setSimilarPapers] = useState([]);

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

  const authdetails =
    [
      {
          "paperId": "05a77e4c321e7b025433814170b849bd6c0bd384",
          "title": "Let's Put the Science in eScience",
          "abstract": "The underlying premise behind eScience is that computational methods and data-driven approaches can contribute to scientific discovery on a par with, or even superior to, traditional experimental methods; that the combination of computers, software, and extant data collections are the modern equivalent to the scientific instruments that have led to our understanding of fundamental laws in physics, chemistry, biology, and other domains. However, a robust methodology for making the results of eScience activities “scientific” is lacking, with significant consequences. In this brief paper we propose a shift in perspective as to what it means to create an eScience-based result and how the scientific validity of eScience experiments might be improved.",
          "year": 2023,
          "journal": {
              "pages": "1-3",
              "name": "2023 IEEE 19th International Conference on e-Science (e-Science)"
          },
          "authors": [
              {
                  "authorId": "8682509",
                  "name": "C. Kesselman"
              },
              {
                  "authorId": "145608157",
                  "name": "R. Schuler"
              },
              {
                  "authorId": "1698701",
                  "name": "Ian T Foster"
              }
          ]
      },
      {
          "paperId": "0c0e7933c695f520d7c99132a907159d69d4afd2",
          "title": "Telescope: An Automated Hybrid Forecasting Approach on a Level-Playing Field",
          "abstract": "In many areas of decision-making, forecasting is an essential pillar. Consequently, many different forecasting methods have been proposed. From our experience, recently presented forecasting methods are computationally intensive, poorly automated, tailored to a particular data set, or they lack a predictable time-to-result. To this end, we introduce Telescope, a novel machine learning-based forecasting approach that automatically retrieves relevant information from a given time series and splits it into parts, handling each of them separately. In contrast to deep learning methods, our approach doesn't require parameterization or the need to train and fit a multitude of parameters. It operates with just one time series and provides forecasts within seconds without any additional setup. Our experiments show that Telescope outperforms recent methods by providing accurate and reliable forecasts while making no assumptions about the analyzed time series.",
          "year": 2023,
          "journal": {
              "volume": "abs/2309.15871",
              "name": "ArXiv"
          },
          "authors": [
              {
                  "authorId": "151489116",
                  "name": "André Bauer"
              },
              {
                  "authorId": "51185014",
                  "name": "Mark Leznik"
              },
              {
                  "authorId": "2248168899",
                  "name": "Michael Stenger"
              },
              {
                  "authorId": "1405453768",
                  "name": "Robert Leppich"
              },
              {
                  "authorId": "2137541765",
                  "name": "N. Herbst"
              },
              {
                  "authorId": "2137102879",
                  "name": "S. Kounev"
              },
              {
                  "authorId": "1698701",
                  "name": "Ian T Foster"
              }
          ]
      },
      {
          "paperId": "17d2696c60b1df14354d7914595a6401aa2edea1",
          "title": "Lazy Python Dependency Management in Large-Scale Systems",
          "abstract": "Python has become the language of choice for managing many scientific applications. However, when distributing a Python application, it is necessary that all application dependencies be distributed and available in the target execution environment. A specific consequence is that Python workflows suffer from slow scale out due to the time required to import dependencies. We describe ProxyImports, a method to package and distribute Python dependencies in a lazy fashion while remaining transparent and easy to use. Using ProxyImports, Python packages are loaded only once (e.g., by a workflow head node) and are transferred asynchronously to compute nodes. We evaluate our implementation on the Perlmutter and Theta supercomputers and in an HPC cloud-bursting scenario. Our experiments show that ProxyImports significantly reduces the average time to import large modules across an HPC system and demonstrate that this method can be used easily to distribute user-packages to cloud resources. We conclude that ProxyImports improves application runtime, reduces contention on metadata servers and facilitates runtime portability of Python applications.",
          "year": 2023,
          "journal": {
              "pages": "1-10",
              "name": "2023 IEEE 19th International Conference on e-Science (e-Science)"
          },
          "authors": [
              {
                  "authorId": "2044357637",
                  "name": "Alok V. Kamatar"
              },
              {
                  "authorId": "2239104574",
                  "name": "Mansi Sakarvadia"
              },
              {
                  "authorId": "2308097253",
                  "name": "Valérie Hayot-Sasson"
              },
              {
                  "authorId": "3091414",
                  "name": "K. Chard"
              },
              {
                  "authorId": "1698701",
                  "name": "Ian T Foster"
              }
          ]
      },
      {
          "paperId": "187ffcfaf2fae1541e10bed495a224361940f684",
          "title": "Robotic pendant drop: containerless liquid for μs-resolved, AI-executable XPCS",
          "abstract": null,
          "year": 2023,
          "journal": {
              "volume": "12",
              "name": "Light, Science & Applications"
          },
          "authors": [
              {
                  "authorId": "2121835712",
                  "name": "D. Ozgulbas"
              },
              {
                  "authorId": "2232399936",
                  "name": "Don Jensen"
              },
              {
                  "authorId": "29910687",
                  "name": "Rory Butler"
              },
              {
                  "authorId": "46204073",
                  "name": "Rafael Vescovi"
              },
              {
                  "authorId": "1698701",
                  "name": "Ian T Foster"
              },
              {
                  "authorId": "2232400014",
                  "name": "Michael Irvin"
              },
              {
                  "authorId": "31142736",
                  "name": "Y. Nakaye"
              },
              {
                  "authorId": "6798285",
                  "name": "Miaoqi Chu"
              },
              {
                  "authorId": "2225164331",
                  "name": "E. Dufresne"
              },
              {
                  "authorId": "2207272310",
                  "name": "Soenke Seifert"
              },
              {
                  "authorId": "1870244",
                  "name": "G. Babnigg"
              },
              {
                  "authorId": "47941567",
                  "name": "Arvind Ramanathan"
              },
              {
                  "authorId": "3604038",
                  "name": "Qingteng Zhang"
              }
          ]
      }
  ]

//   const authdetails = 
//   [
//     {
//         "id": 1168,
//         "user_id": 94088,
//         "event_id": 151,
//         "abstract_id": "IFERP2023_2711_ICCCE_1168",
//         "paper_title": "Transformative Learning: Reflection in Students' Perspectives and Values through Community Project",
//         "paper_abstract": null,
//         "paper_keywords": null,
//         "submitted_from": "IFERP",
//         "author_country": null,
//         "author_phone": null,
//         "author_presentation_type": null,
//         "author_name": null,
//         "co_author_name": null,
//         "email_id": "fatehah@ucsiuniversity.edu.my",
//         "contact_number": "0133070442",
//         "whatsapp_number": "0133070442",
//         "country": "132",
//         "submission_type": "Abstract Submission",
//         "presentation_type": "Physical",
//         "source": "Email invitation",
//         "comments": null,
//         "process_to_next": null,
//         "department": null,
//         "whatsapp_country": null,
//         "contact_country": null,
//         "abstract_path": "event-abstract-58501-1701064312.doc",
//         "follow_ups_status": null,
//         "follow_ups_data": null,
//         "registration_pass": null,
//         "paper_invoice": null,
//         "lead": null,
//         "remarks": null,
//         "allocated_time": null,
//         "created_at": "2023-11-27T05:51:52.000Z",
//         "updated_at": "2023-11-27T05:51:52.000Z",
//         "deleted_at": null,
//         "status": "1",
//         "author": "94088",
//         "author_email_id": "fatehah@ucsiuniversity.edu.my",
//         "co_author": null,
//         "co_author_email": null,
//         "is_email": null
//     },
//     {
//         "id": 1258,
//         "user_id": 94088,
//         "event_id": 151,
//         "abstract_id": "IFERP2023_0212_ICCCE_1258",
//         "paper_title": "Hands-On Learning: Assessing the Learning Experience of Furniture Workshop Course in Architectural Education",
//         "paper_abstract": null,
//         "paper_keywords": null,
//         "submitted_from": "IFERP",
//         "author_country": null,
//         "author_phone": null,
//         "author_presentation_type": null,
//         "author_name": null,
//         "co_author_name": null,
//         "email_id": "fatehah@ucsiuniversity.edu.my",
//         "contact_number": "0133070442",
//         "whatsapp_number": "0133070442",
//         "country": "132",
//         "submission_type": "Abstract Submission",
//         "presentation_type": "Physical",
//         "source": "Email",
//         "comments": null,
//         "process_to_next": null,
//         "department": null,
//         "whatsapp_country": null,
//         "contact_country": null,
//         "abstract_path": "event-abstract-8873-1701522511.doc",
//         "follow_ups_status": null,
//         "follow_ups_data": null,
//         "registration_pass": null,
//         "paper_invoice": null,
//         "lead": null,
//         "remarks": null,
//         "allocated_time": null,
//         "created_at": "2023-12-02T13:08:31.000Z",
//         "updated_at": "2023-12-02T13:08:32.000Z",
//         "deleted_at": null,
//         "status": "1",
//         "author": "94088",
//         "author_email_id": "fatehah@ucsiuniversity.edu.my",
//         "co_author": null,
//         "co_author_email": null,
//         "is_email": null
//     }
// ]
  return (
    <div className="second-details-container">
      <div className="main-div">
        <div className={`${isSide ? "left-w-o" : "left-w"} `}>
          <div className="row">
            <div className={`${isUserSide || isRightSide ? "col-12" : "col-xl-8 col-lg-7"}`}>
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
            {
  similarPapers && similarPapers.length > 0 ? (
    similarPapers.map((ele, index) => {
      return (
        <div className="feed-published-box card-d mt-18" key={index}>
          <div className="feed-flex">
            <div className="col-10">
              <div className="w-d">
                <h4 className="post-title">
                  {ele?.title || ele?.paper_title}
                </h4>
                <p className="post-pra">
                  Journal of Islamic Contemporary Accounting and Business | VOL. 1
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
                src={icons?.userTwoIcons}
                alt="docs-icons"
                loading="lazy"
                className="h-20 w-20 rounded-circle"
              />

              {ele?.authors && ele.authors.length > 0 ? (
                <>
                  {ele.authors[0].name}
                  {ele.authors.length > 1 && ` +${ele.authors.length - 1}`}
                </>
              ) : ele?.author_name ? (
                ele.author_name
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
    })
  ) : (
    <p>No similar papers found</p> // Informative message when no papers are found
  )
}

            <div className="f-center mt-18">
              <Button className="h-42" btnText="View more papers" />
            </div>
          </div>
            </div>
            <div className={`${isUserSide || isRightSide ? "col-12" : "col-xl-4 col-lg-5"}`}>
            {!isSide && (
                <>
                    <h4 className="sub-title-text mt-0" id="about-authors">
                  About Author
                </h4>
            <div className="brave-scroll"  style={{
      position: 'sticky',
      top: '0', 
      height: 'calc(100vh - 20px)', 
      overflowY: 'auto', 
    }}>
              <div className="About-box  ">
              
                <div className="">
                  <div className="">
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
                          <div className="fa-center gap-1  mt-12">
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
                          <div className="mt-10">
                          <div className="fb-center mb-8">
                        <p className="text-16-400 color-3333">Followers</p>
                        <p className="text-16-600 color-3333">
  {authdata.data1.user_details[0].followers ? authdata.data1.user_details[0].followers : '-'}
</p>
                      </div>
                      <div className="fb-center mb-8">
                        <p className="text-16-400 color-3333">Following</p>
                        <p className="text-16-600 color-3333">
  {authdata.data1.user_details[0].followings ? authdata.data1.user_details[0].followings : '-'}
</p>
                      </div>
                      <div className="fb-center mb-8">
                        <p className="text-16-400 color-3333">Co-authors</p>
                        <p className="text-16-600 color-3333">
  {authdata.data1.co_authors ? authdata.data1.co_authors : '-'}
</p>
                      </div>
                      <div className="fb-center mb-8">
                        <p className="text-16-400 color-3333">Public views</p>
                        <p className="text-16-600 color-3333">7</p>
                      </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
              <div className="fb-center mt-5">
                <p className="text-18-500 color-0303 mb-0">139 More </p>
                <div className="fa-center gap-2">
                  <p className="text-18-500  color-113D">View all</p>
                  <img src={icons?.rightArrowIcons} />
                </div>
              </div>
            
   {authdetails?.map((ele, index) => {
        return (
          <div className="feed-published-box card-d mt-18" key={index}>
            <div className="">
              <div className="row">
                <div className="col-9 ">
                <div>
                <h4 className="post-title">
                 {ele.title || ele.paper_title} 
                
                </h4>
                {
  ele?.journal?.name ? (
    <p className="post-pra">
      {ele.journal.name}
    </p>
  ) : null
}
               
                  </div>
                  
                 
                </div>
                <div className="col-3 ">
                    <div className="d-flex justify-content-center">
                  <Button
                leftIcon={icons?.activeSaveIcons}
                btnStyle="LB"
                className="h-42 w-42"
                leftIconClass="h-16 w-16"
                      />
                      </div>
                  </div>
            </div>
             
            
            </div>

            <div className="post-details flex-wrap mt-8 gap-2">
             
              <div className="fa-center gap-md-2 gap-2">
                <div className="fa-center gap-1">
                  <img
                    src={icons?.calenderIcons}
                    alt="docs-icons"
                    loading="lazy"
                    className="h-16 w-16 object-fit-contain"
                  />
                  {
                    ele?.year ? (
                      <p className="docs-title">{ele.year}</p>
                    ) : <p className="docs-title"> {moment(ele.created_at).format('DD MMM YYYY')}</p>
                  }
                 
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
        );
   })}
                    
              </div>
            </>
          )}
            </div>
          </div>
         

          {/* About Author */}
       
        </div>
        {isSide && (
          <div className="side-bar border border-primary">
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
