import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./Progress.scss";
const Progress = ({ now, height }) => {
  return (
    <div className="progress-container">
      <ProgressBar
        completed={now}
        maxCompleted={100}
        bgColor="#113DCD"
        borderRadius="100px"
        labelColor="transparent"
        height={height || "12px"}
        barContainerClassName="div-border"
        baseBgColor="#E0E9F4"
      />
    </div>
  );
};

export default Progress;
