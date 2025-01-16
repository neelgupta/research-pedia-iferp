import { Button } from "@/components";
import "./AudioList.scss";
import { icons } from "@/utils/constants";

const AudioList = () => {
  return (
    <div className="audio-list-container">
      <div className="details-box">
        <div>
          <h3 className="details-title">Audio Papers</h3>
        </div>
        <Button
          btnText="Listen"
          btnStyle="BBT"
          className="h-43 ps-18 pe-18"
          leftIcon={icons.videoWIcons}
          leftIconClass="h-16 w-16"
        />
      </div>
      <p className="details-t mt-18">2 papers</p>

      <div className="published-box card-d mt-18">
        <div className="d-flex justify-content-between">
          <h4 className="post-title">
            Reviewing the effectiveness of artificial intelligence techniques
            against cyber security risks
          </h4>
          <div className="w-24 h-24">
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
            btnStyle="BT"
            className="h-43 ps-18 pe-18"
            leftIcon={icons.bookIcons}
            leftIconClass="h-16 w-16"
          />
          <div className="fa-center">
            <Button
              btnText="Listen"
              btnStyle="BTA"
              className="h-43 ps-18 pe-18"
              leftIcon={icons.videoIcons}
              leftIconClass="h-16 w-16"
            />
          </div>
        </div>
      </div>
      <div className="published-box card-d mt-18">
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
            btnStyle="BT"
            className="h-43 ps-18 pe-18"
            leftIcon={icons.bookIcons}
            leftIconClass="h-16 w-16"
          />
          <div className="fa-center">
            <Button
              btnText="Listen"
              btnStyle="BTA"
              className="h-43 ps-18 pe-18"
              leftIcon={icons.videoIcons}
              leftIconClass="h-16 w-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioList;
