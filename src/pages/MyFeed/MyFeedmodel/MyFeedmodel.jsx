import { Modal } from "@/components";
import React from "react";

const MyFeedmodel = ({ onHide }) => {
  return (
    <>
      <Modal onHide={onHide} size="xl" isClose={onHide} isCloseOutside>
        <p className="text-18-500 color-0303 pb-32">Intro Video</p>

        <div className="video-container">
          <iframe
            width="100%"
            height="600px"
            // src="https://www.youtube.com/watch?v=F0inmbEn3Zg"
            src="https://www.youtube.com/embed/F0inmbEn3Zg?si=wg485HxewbEbGlCz"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </>
  );
};

export default MyFeedmodel;
