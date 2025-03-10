import { Button, Modal, TextInput } from "@/components";
import "./RePostPopUp.scss";
import { icons } from "@/utils/constants";

const RePostPopUp = ({ onHide }) => {
  return (
    <Modal
      isClose
      title="Repost Joaquin E.s post"
      size="xl"
      textClass="text-18-500"
      onHide={onHide}
    >
      <div className="re-post-container">
        <div className="fa-center gap-2">
          <img src={icons?.userABIcons} className="h-42 w-42 br-8" />
          <p>Mary Jane</p>
        </div>
        <div className="i-w">
          <TextInput placeholder="Enter your thoughts" />
        </div>
        <div className="feed-published-box card-d">
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
          </div>
          <div className="d-flex justify-content-between">
            <h4 className="post-title">
              Reviewing the effectiveness of artificial intelligence techniques
              against cyber security risks
            </h4>
          </div>
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
                btnText="Repost"
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

        <div className="d-flex justify-content-end mt-32">
          <Button btnText="Repost" className="text-16-600 h-49" />
        </div>
      </div>
    </Modal>
  );
};

export default RePostPopUp;
