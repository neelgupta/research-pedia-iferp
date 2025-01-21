import { Button } from "@/components";
import "./PackageDetails.scss";
import { icons } from "@/utils/constants";
import { useSelector } from "react-redux";

const PackageDetails = ({ isSide }) => {
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
  return (
    <div className="package-details-container">
      <div className="row gy-3">
        <div
          className={`${isUserSide || isRightSide ? "col-12" : "col-xl-9 col-lg-7"}`}
        >
          <div className="similar-box">
            <h4 className="sub-title-text">More From: Sandra Buttibieg</h4>
            {["1", "2", "3", "4"].map((ele, index) => {
              return (
                <div className="feed-published-box card-d mt-18" key={index}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h4 className="post-title">
                        Analysis Of The Effect Of Financial Rewards,
                        Religiosity, And Job Market Considerations On Student
                        Interest In A Career In Islamic Financial Institutions
                        (Study On Students Of...
                      </h4>
                      <p className="post-pra">
                        Journal of Islamic Contemporary Accounting and Business
                        | VOL. 1
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
            <div className="f-center mt-18">
              <Button className="h-42" btnText="View more papers" />
            </div>
          </div>
        </div>
        <div
          className={`${isUserSide || isRightSide ? "col-12" : "col-xl-3 col-lg-5"}`}
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
                className="h-42 "
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
