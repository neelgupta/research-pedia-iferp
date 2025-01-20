import { Button } from "@/components";
import "./FeedDetails.scss";
import { icons } from "@/utils/constants";
import Progress from "@/components/layouts/Progress";

const FeedDetails = () => {
  return (
    <div className="feed-details-container">
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
        <Button btnText="Edit Preferences" className="h-43" btnStyle="LBB" />
      </div>
      <div className="recommended-text">Recommended for you</div>

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
            btnStyle="LBB"
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
            btnStyle="LBB"
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
  );
};

export default FeedDetails;
