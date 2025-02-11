import { Button } from "@/components";
import "./PackageDetails.scss";
import { icons } from "@/utils/constants";
import { useSelector } from "react-redux";
import moment from "moment";
import { Spinner } from "react-bootstrap";
const PackageDetails = ({ isSide, paperAuthdetails, Seconddetailsloadder }) => {
  const reduxData = useSelector((state) => state.global);

  const { isUserSide, isRightSide } = reduxData || {};
  const primeList = [
    {
      title: "Paper translations",
      icon: icons?.WTIcons,
    },
    {
      title: "Audio papers streaming",
      icon: icons?.WPIcons,
    },
    {
      title: "Collaborate on reading lists",
      icon: icons?.WCIcons,
    },
    {
      title: "Auto-sync reading lists to reference manager",
      icon: icons?.WRIcons,
    },
    {
      title: "Multi-feed",
      icon: icons?.WMIcons,
    },
  ];

  // const paperAuthdetails =
  //   [
  //     {
  //         "paperId": "05a77e4c321e7b025433814170b849bd6c0bd384",
  //         "title": "Let's Put the Science in eScience",
  //         "abstract": "The underlying premise behind eScience is that computational methods and data-driven approaches can contribute to scientific discovery on a par with, or even superior to, traditional experimental methods; that the combination of computers, software, and extant data collections are the modern equivalent to the scientific instruments that have led to our understanding of fundamental laws in physics, chemistry, biology, and other domains. However, a robust methodology for making the results of eScience activities “scientific” is lacking, with significant consequences. In this brief paper we propose a shift in perspective as to what it means to create an eScience-based result and how the scientific validity of eScience experiments might be improved.",
  //         "year": 2023,
  //         "journal": {
  //             "pages": "1-3",
  //             "name": "2023 IEEE 19th International Conference on e-Science (e-Science)"
  //         },
  //         "authors": [
  //             {
  //                 "authorId": "8682509",
  //                 "name": "C. Kesselman"
  //             },
  //             {
  //                 "authorId": "145608157",
  //                 "name": "R. Schuler"
  //             },
  //             {
  //                 "authorId": "1698701",
  //                 "name": "Ian T Foster"
  //             }
  //         ]
  //     },
  //     {
  //         "paperId": "0c0e7933c695f520d7c99132a907159d69d4afd2",
  //         "title": "Telescope: An Automated Hybrid Forecasting Approach on a Level-Playing Field",
  //         "abstract": "In many areas of decision-making, forecasting is an essential pillar. Consequently, many different forecasting methods have been proposed. From our experience, recently presented forecasting methods are computationally intensive, poorly automated, tailored to a particular data set, or they lack a predictable time-to-result. To this end, we introduce Telescope, a novel machine learning-based forecasting approach that automatically retrieves relevant information from a given time series and splits it into parts, handling each of them separately. In contrast to deep learning methods, our approach doesn't require parameterization or the need to train and fit a multitude of parameters. It operates with just one time series and provides forecasts within seconds without any additional setup. Our experiments show that Telescope outperforms recent methods by providing accurate and reliable forecasts while making no assumptions about the analyzed time series.",
  //         "year": 2023,
  //         "journal": {
  //             "volume": "abs/2309.15871",
  //             "name": "ArXiv"
  //         },
  //         "authors": [
  //             {
  //                 "authorId": "151489116",
  //                 "name": "André Bauer"
  //             },
  //             {
  //                 "authorId": "51185014",
  //                 "name": "Mark Leznik"
  //             },
  //             {
  //                 "authorId": "2248168899",
  //                 "name": "Michael Stenger"
  //             },
  //             {
  //                 "authorId": "1405453768",
  //                 "name": "Robert Leppich"
  //             },
  //             {
  //                 "authorId": "2137541765",
  //                 "name": "N. Herbst"
  //             },
  //             {
  //                 "authorId": "2137102879",
  //                 "name": "S. Kounev"
  //             },
  //             {
  //                 "authorId": "1698701",
  //                 "name": "Ian T Foster"
  //             }
  //         ]
  //     },
  //     {
  //         "paperId": "17d2696c60b1df14354d7914595a6401aa2edea1",
  //         "title": "Lazy Python Dependency Management in Large-Scale Systems",
  //         "abstract": "Python has become the language of choice for managing many scientific applications. However, when distributing a Python application, it is necessary that all application dependencies be distributed and available in the target execution environment. A specific consequence is that Python workflows suffer from slow scale out due to the time required to import dependencies. We describe ProxyImports, a method to package and distribute Python dependencies in a lazy fashion while remaining transparent and easy to use. Using ProxyImports, Python packages are loaded only once (e.g., by a workflow head node) and are transferred asynchronously to compute nodes. We evaluate our implementation on the Perlmutter and Theta supercomputers and in an HPC cloud-bursting scenario. Our experiments show that ProxyImports significantly reduces the average time to import large modules across an HPC system and demonstrate that this method can be used easily to distribute user-packages to cloud resources. We conclude that ProxyImports improves application runtime, reduces contention on metadata servers and facilitates runtime portability of Python applications.",
  //         "year": 2023,
  //         "journal": {
  //             "pages": "1-10",
  //             "name": "2023 IEEE 19th International Conference on e-Science (e-Science)"
  //         },
  //         "authors": [
  //             {
  //                 "authorId": "2044357637",
  //                 "name": "Alok V. Kamatar"
  //             },
  //             {
  //                 "authorId": "2239104574",
  //                 "name": "Mansi Sakarvadia"
  //             },
  //             {
  //                 "authorId": "2308097253",
  //                 "name": "Valérie Hayot-Sasson"
  //             },
  //             {
  //                 "authorId": "3091414",
  //                 "name": "K. Chard"
  //             },
  //             {
  //                 "authorId": "1698701",
  //                 "name": "Ian T Foster"
  //             }
  //         ]
  //     },
  //     {
  //         "paperId": "187ffcfaf2fae1541e10bed495a224361940f684",
  //         "title": "Robotic pendant drop: containerless liquid for μs-resolved, AI-executable XPCS",
  //         "abstract": null,
  //         "year": 2023,
  //         "journal": {
  //             "volume": "12",
  //             "name": "Light, Science & Applications"
  //         },
  //         "authors": [
  //             {
  //                 "authorId": "2121835712",
  //                 "name": "D. Ozgulbas"
  //             },
  //             {
  //                 "authorId": "2232399936",
  //                 "name": "Don Jensen"
  //             },
  //             {
  //                 "authorId": "29910687",
  //                 "name": "Rory Butler"
  //             },
  //             {
  //                 "authorId": "46204073",
  //                 "name": "Rafael Vescovi"
  //             },
  //             {
  //                 "authorId": "1698701",
  //                 "name": "Ian T Foster"
  //             },
  //             {
  //                 "authorId": "2232400014",
  //                 "name": "Michael Irvin"
  //             },
  //             {
  //                 "authorId": "31142736",
  //                 "name": "Y. Nakaye"
  //             },
  //             {
  //                 "authorId": "6798285",
  //                 "name": "Miaoqi Chu"
  //             },
  //             {
  //                 "authorId": "2225164331",
  //                 "name": "E. Dufresne"
  //             },
  //             {
  //                 "authorId": "2207272310",
  //                 "name": "Soenke Seifert"
  //             },
  //             {
  //                 "authorId": "1870244",
  //                 "name": "G. Babnigg"
  //             },
  //             {
  //                 "authorId": "47941567",
  //                 "name": "Arvind Ramanathan"
  //             },
  //             {
  //                 "authorId": "3604038",
  //                 "name": "Qingteng Zhang"
  //             }
  //         ]
  //     }
  // ]

  // const paperAuthdetails = [
  //   {
  //     id: 1168,
  //     user_id: 94088,
  //     event_id: 151,
  //     abstract_id: "IFERP2023_2711_ICCCE_1168",
  //     paper_title:
  //       "Transformative Learning: Reflection in Students' Perspectives and Values through Community Project",
  //     paper_abstract: null,
  //     paper_keywords: null,
  //     submitted_from: "IFERP",
  //     author_country: null,
  //     author_phone: null,
  //     author_presentation_type: null,
  //     author_name: null,
  //     co_author_name: null,
  //     email_id: "fatehah@ucsiuniversity.edu.my",
  //     contact_number: "0133070442",
  //     whatsapp_number: "0133070442",
  //     country: "132",
  //     submission_type: "Abstract Submission",
  //     presentation_type: "Physical",
  //     source: "Email invitation",
  //     comments: null,
  //     process_to_next: null,
  //     department: null,
  //     whatsapp_country: null,
  //     contact_country: null,
  //     abstract_path: "event-abstract-58501-1701064312.doc",
  //     follow_ups_status: null,
  //     follow_ups_data: null,
  //     registration_pass: null,
  //     paper_invoice: null,
  //     lead: null,
  //     remarks: null,
  //     allocated_time: null,
  //     created_at: "2023-11-27T05:51:52.000Z",
  //     updated_at: "2023-11-27T05:51:52.000Z",
  //     deleted_at: null,
  //     status: "1",
  //     author: "94088",
  //     author_email_id: "fatehah@ucsiuniversity.edu.my",
  //     co_author: null,
  //     co_author_email: null,
  //     is_email: null,
  //   },
  //   {
  //     id: 1258,
  //     user_id: 94088,
  //     event_id: 151,
  //     abstract_id: "IFERP2023_0212_ICCCE_1258",
  //     paper_title:
  //       "Hands-On Learning: Assessing the Learning Experience of Furniture Workshop Course in Architectural Education",
  //     paper_abstract: null,
  //     paper_keywords: null,
  //     submitted_from: "IFERP",
  //     author_country: null,
  //     author_phone: null,
  //     author_presentation_type: null,
  //     author_name: null,
  //     co_author_name: null,
  //     email_id: "fatehah@ucsiuniversity.edu.my",
  //     contact_number: "0133070442",
  //     whatsapp_number: "0133070442",
  //     country: "132",
  //     submission_type: "Abstract Submission",
  //     presentation_type: "Physical",
  //     source: "Email",
  //     comments: null,
  //     process_to_next: null,
  //     department: null,
  //     whatsapp_country: null,
  //     contact_country: null,
  //     abstract_path: "event-abstract-8873-1701522511.doc",
  //     follow_ups_status: null,
  //     follow_ups_data: null,
  //     registration_pass: null,
  //     paper_invoice: null,
  //     lead: null,
  //     remarks: null,
  //     allocated_time: null,
  //     created_at: "2023-12-02T13:08:31.000Z",
  //     updated_at: "2023-12-02T13:08:32.000Z",
  //     deleted_at: null,
  //     status: "1",
  //     author: "94088",
  //     author_email_id: "fatehah@ucsiuniversity.edu.my",
  //     co_author: null,
  //     co_author_email: null,
  //     is_email: null,
  //   },
  // ];

  return (
    <div className="package-details-container mt-40">
      <div className="row gy-3">
        <div
          className={`${isUserSide || isRightSide ? "col-12" : "col-xl-8 col-lg-7"}`}
        >
          <div className="similar-box">
            <h4 className="sub-title-text">More From: Sandra Buttibieg</h4>
            {Seconddetailsloadder ? (
              <div className="loader-container d-flex justify-content-center">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              paperAuthdetails?.map((ele, index) => {
                return (
                  <div className="feed-published-box card-d mt-18" key={index}>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h4 className="post-title">
                          {ele.title || ele.paper_title}
                        </h4>
                        {ele?.journal?.name ? (
                          <p className="post-pra">{ele.journal.name}</p>
                        ) : null}
                      </div>
                      <Button
                        leftIcon={icons?.activeSaveIcons}
                        btnStyle="LB"
                        className="h-42 w-42"
                        leftIconClass="h-16 w-16"
                      />
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
                          {ele?.year ? (
                            <p className="docs-title">{ele.year}</p>
                          ) : (
                            <p className="docs-title">
                              {" "}
                              {moment(ele.created_at).format("DD MMM YYYY")}
                            </p>
                          )}
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
              })
            )}

            {Seconddetailsloadder ? (
              <div className="loader-container d-flex justify-content-center">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              paperAuthdetails?.map((ele, index) => {
                return (
                  <div className="feed-published-box card-d mt-18" key={index}>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h4 className="post-title">
                          {ele.title || ele.paper_title}
                        </h4>
                        {ele?.journal?.name ? (
                          <p className="post-pra">{ele.journal.name}</p>
                        ) : null}
                      </div>
                      <Button
                        leftIcon={icons?.activeSaveIcons}
                        btnStyle="LB"
                        className="h-42 w-42"
                        leftIconClass="h-16 w-16"
                      />
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
                          {ele?.year ? (
                            <p className="docs-title">{ele.year}</p>
                          ) : (
                            <p className="docs-title">
                              {" "}
                              {moment(ele.created_at).format("DD MMM YYYY")}
                            </p>
                          )}
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
              })
            )}
            {Seconddetailsloadder ? (
              <div className="loader-container d-flex justify-content-center">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              paperAuthdetails?.map((ele, index) => {
                return (
                  <div className="feed-published-box card-d mt-18" key={index}>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h4 className="post-title">
                          {ele.title || ele.paper_title}
                        </h4>
                        {ele?.journal?.name ? (
                          <p className="post-pra">{ele.journal.name}</p>
                        ) : null}
                      </div>
                      <Button
                        leftIcon={icons?.activeSaveIcons}
                        btnStyle="LB"
                        className="h-42 w-42"
                        leftIconClass="h-16 w-16"
                      />
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
                          {ele?.year ? (
                            <p className="docs-title">{ele.year}</p>
                          ) : (
                            <p className="docs-title">
                              {" "}
                              {moment(ele.created_at).format("DD MMM YYYY")}
                            </p>
                          )}
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
              })
            )}
            {Seconddetailsloadder ? (
              <div className="loader-container d-flex justify-content-center">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              paperAuthdetails?.map((ele, index) => {
                return (
                  <div className="feed-published-box card-d mt-18" key={index}>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h4 className="post-title">
                          {ele.title || ele.paper_title}
                        </h4>
                        {ele?.journal?.name ? (
                          <p className="post-pra">{ele.journal.name}</p>
                        ) : null}
                      </div>
                      <Button
                        leftIcon={icons?.activeSaveIcons}
                        btnStyle="LB"
                        className="h-42 w-42"
                        leftIconClass="h-16 w-16"
                      />
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
                          {ele?.year ? (
                            <p className="docs-title">{ele.year}</p>
                          ) : (
                            <p className="docs-title">
                              {" "}
                              {moment(ele.created_at).format("DD MMM YYYY")}
                            </p>
                          )}
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
              })
            )}
            {Seconddetailsloadder ? (
              <div className="loader-container d-flex justify-content-center">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              paperAuthdetails?.map((ele, index) => {
                return (
                  <div className="feed-published-box card-d mt-18" key={index}>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h4 className="post-title">
                          {ele.title || ele.paper_title}
                        </h4>
                        {ele?.journal?.name ? (
                          <p className="post-pra">{ele.journal.name}</p>
                        ) : null}
                      </div>
                      <Button
                        leftIcon={icons?.activeSaveIcons}
                        btnStyle="LB"
                        className="h-42 w-42"
                        leftIconClass="h-16 w-16"
                      />
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
                          {ele?.year ? (
                            <p className="docs-title">{ele.year}</p>
                          ) : (
                            <p className="docs-title">
                              {" "}
                              {moment(ele.created_at).format("DD MMM YYYY")}
                            </p>
                          )}
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
              })
            )}
            {Seconddetailsloadder ? (
              <div className="loader-container d-flex justify-content-center">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              paperAuthdetails?.map((ele, index) => {
                return (
                  <div className="feed-published-box card-d mt-18" key={index}>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h4 className="post-title">
                          {ele.title || ele.paper_title}
                        </h4>
                        {ele?.journal?.name ? (
                          <p className="post-pra">{ele.journal.name}</p>
                        ) : null}
                      </div>
                      <Button
                        leftIcon={icons?.activeSaveIcons}
                        btnStyle="LB"
                        className="h-42 w-42"
                        leftIconClass="h-16 w-16"
                      />
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
                          {ele?.year ? (
                            <p className="docs-title">{ele.year}</p>
                          ) : (
                            <p className="docs-title">
                              {" "}
                              {moment(ele.created_at).format("DD MMM YYYY")}
                            </p>
                          )}
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
              })
            )}
            {Seconddetailsloadder ? (
              <div className="loader-container d-flex justify-content-center">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              paperAuthdetails?.map((ele, index) => {
                return (
                  <div className="feed-published-box card-d mt-18" key={index}>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h4 className="post-title">
                          {ele.title || ele.paper_title}
                        </h4>
                        {ele?.journal?.name ? (
                          <p className="post-pra">{ele.journal.name}</p>
                        ) : null}
                      </div>
                      <Button
                        leftIcon={icons?.activeSaveIcons}
                        btnStyle="LB"
                        className="h-42 w-42"
                        leftIconClass="h-16 w-16"
                      />
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
                          {ele?.year ? (
                            <p className="docs-title">{ele.year}</p>
                          ) : (
                            <p className="docs-title">
                              {" "}
                              {moment(ele.created_at).format("DD MMM YYYY")}
                            </p>
                          )}
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
              })
            )}
            {Seconddetailsloadder ? (
              <div className="loader-container d-flex justify-content-center">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              paperAuthdetails?.map((ele, index) => {
                return (
                  <div className="feed-published-box card-d mt-18" key={index}>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h4 className="post-title">
                          {ele.title || ele.paper_title}
                        </h4>
                        {ele?.journal?.name ? (
                          <p className="post-pra">{ele.journal.name}</p>
                        ) : null}
                      </div>
                      <Button
                        leftIcon={icons?.activeSaveIcons}
                        btnStyle="LB"
                        className="h-42 w-42"
                        leftIconClass="h-16 w-16"
                      />
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
                          {ele?.year ? (
                            <p className="docs-title">{ele.year}</p>
                          ) : (
                            <p className="docs-title">
                              {" "}
                              {moment(ele.created_at).format("DD MMM YYYY")}
                            </p>
                          )}
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
              })
            )}
            {Seconddetailsloadder ? (
              <div className="loader-container d-flex justify-content-center">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              paperAuthdetails?.map((ele, index) => {
                return (
                  <div className="feed-published-box card-d mt-18" key={index}>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h4 className="post-title">
                          {ele.title || ele.paper_title}
                        </h4>
                        {ele?.journal?.name ? (
                          <p className="post-pra">{ele.journal.name}</p>
                        ) : null}
                      </div>
                      <Button
                        leftIcon={icons?.activeSaveIcons}
                        btnStyle="LB"
                        className="h-42 w-42"
                        leftIconClass="h-16 w-16"
                      />
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
                          {ele?.year ? (
                            <p className="docs-title">{ele.year}</p>
                          ) : (
                            <p className="docs-title">
                              {" "}
                              {moment(ele.created_at).format("DD MMM YYYY")}
                            </p>
                          )}
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
              })
            )}

            <div className="f-center mt-18">
              <Button className="h-42" btnText="View more papers" />
            </div>
          </div>
        </div>
        <div
          className={`${isUserSide || isRightSide ? "col-12" : "col-xl-4 col-lg-5"} brave-scroll`}
          style={{
            position: "sticky",
            top: "0",
            height: "calc(100vh - 20px)",
            overflowY: "auto",
          }}
        >
          <div className="side-bar-p">
            <div className="">
              <p className="price-text">
                <span>$89 </span>$72 Annually
              </p>
              <p className="price-val mb-28">
                <span>Research Pedia </span>Prime
              </p>

              {primeList?.map((ele, index) => {
                return (
                  <div className="prime-f-box mb-18" key={index}>
                    <img src={ele.icon} />
                    <p className="text-16-500 color-ffff mb-0">{ele.title}</p>
                  </div>
                );
              })}
            </div>
            <div className="btn-p">
              <Button
                className="h-42"
                leftIcon={icons?.primeAIcons}
                btnText="Get Prime"
                btnStyle="LP"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-48 gy-3">
        <div
          className={`${isUserSide || isRightSide ? "col-12" : "col-xl-9 col-lg-7"}`}
        >
          <div className="disclaimer-box">
            <h4 className="disclaimer-title">Disclaimer</h4>
            <p className="disclaimer-pra">
              All third-party content on this website/platform is and will
              remain the property of their respective owners and is provided on
              "as is" basis without any warranties, express or implied. Use of
              third-party content does not indicate any affiliation, sponsorship
              with or endorsement by them. Any references to third-party content
              is to identify the corresponding services and shall be considered
              fair use under The CopyrightLaw.
            </p>
          </div>
        </div>
        <div
          className={`${isUserSide || isRightSide ? "col-12" : "col-xl-3 col-lg-5"}`}
        >
          <div className="side-bar-c">
            <div className="f-center">
              <img src={icons?.noMessagesIcons} className="h-76 w-82" />
            </div>
            <h5 className="text-18-500 color-0303 text-center">Talk to us</h5>
            <p className="text-14-400 color-3333 text-center mb-16">
              Join us for a 30 min session where you can share your feedback and
              ask us any queries you have
            </p>
            <div className="f-center">
              <Button className="h-49" btnText="Talk to us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
