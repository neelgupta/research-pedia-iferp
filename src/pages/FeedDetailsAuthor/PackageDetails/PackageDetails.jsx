import { Button } from "@/components";
import "./PackageDetails.scss";
import { icons } from "@/utils/constants";
import { useSelector } from "react-redux";
import moment from "moment";
import { Spinner } from "react-bootstrap";
const PackageDetails = ({
  isSide,
  paperAuthdetails,
  Seconddetailsloadder,
  authors,
}) => {
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

  console.log(Seconddetailsloadder, "Seconddetailsloadder");

  return (
    <div className="package-details-container mt-40">
      <div className="sectionThree gy-3">
        <div
          className={`${isUserSide || isRightSide ? "more-from-author-isRight" : "more-from-author"}  `}
        >
          {authors !== undefined && (
            <div className="similar-box">
              <h4 className="sub-title-text">
                More From:{" "}
                {authors?.length > 1
                  ? authors
                      .slice(0, authors.length - 1)
                      .map((author, index) => (
                        <span key={index}>
                          {author.name || author.author_name},{" "}
                        </span>
                      ))
                  : null}
                {authors?.length > 0 && (
                  <span key={authors.length - 1}>
                    and
                    {authors[authors.length - 1].name ||
                      authors[authors.length - 1].author_name}
                  </span>
                )}
              </h4>

              {Seconddetailsloadder ? (
                <div className="loader-container d-flex justify-content-center">
                  <Spinner animation="border" variant="primary" />
                </div>
              ) : (
                paperAuthdetails?.length > 0 &&
                paperAuthdetails.map((ele, index) => {
                  return (
                    <div
                      className="feed-published-box card-d mt-18"
                      key={index}
                    >
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
                        {ele?.authors && (
                          <div
                            style={{
                              display: "flex",
                              gap: "4px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={icons?.avatarTwoIcons}
                              alt="Author's Image"
                              loading="lazy"
                              className="h-20 w-20 object-fit-contain"
                            />
                            {ele?.authors?.slice(0, 1)?.map((author, index) => {
                              return (
                                <p key={index}>
                                  {author.name || author.author_name}
                                </p>
                              );
                            })}{" "}
                            <span> + {ele?.authors?.length - 1}</span>
                          </div>
                        )}

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
                                {moment(ele?.created_at).format("DD MMM YYYY")}
                              </p>
                            )}
                          </div>
                          {/* <img
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
                          </div> */}
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

          {/* HERE */}
          <div className="row mt-48 gy-3">
            <div className="desclaimer-section">
              <div className="disclaimer-box">
                <h4 className="disclaimer-title">Disclaimer</h4>
                <p className="disclaimer-pra">
                  All third-party content on this website/platform is and will
                  remain the property of their respective owners and is provided
                  on "as is" basis without any warranties, express or implied.
                  Use of third-party content does not indicate any affiliation,
                  sponsorship with or endorsement by them. Any references to
                  third-party content is to identify the corresponding services
                  and shall be considered fair use under The CopyrightLaw.
                </p>
              </div>
            </div>
            <div
              className={`${isUserSide || isRightSide ? "col-12" : "col-xl-3 col-lg-5"}`}
            ></div>
          </div>
        </div>

        <div
          className={`${isUserSide || isRightSide ? "bannerDiv-isRightSide brave-scroll" : "bannerDiv brave-scroll-gry"}`}
          style={{
            position: "sticky",
            top: "0",
            height: "calc(100vh- 20px)",
            overflowY: "auto",
          }}
        >
          <div className="side-bar-p brave-scroll-gry">
            <div className="head-line">
              <p className="price-text">
                <span>$89 </span>$72 Annually
              </p>
              <p className="price-val mb-28">
                <span>Research Pedia </span>Prime
              </p>
            </div>

            <div>
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
    </div>
  );
};

export default PackageDetails;
