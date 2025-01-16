import React from "react";
import { useNavigate } from "react-router-dom";
import "./Breadcrumb.scss";
import { icons } from "@/utils/constants";

const Breadcrumb = ({ list, className, isGreen }) => {
  const navigate = useNavigate();

  return (
    <div id="breadcrumb-container" className="fa-center gap-1 un">
      {list?.map((elm, index, val) => {
        const isLast = list.length - 1 === index;
        const isState = elm?.val;
        return (
          <React.Fragment key={index}>
            <span
              className={`text-14-400 pointer lat-row ${
                isLast ? "#5B6B79" : "#131920"
              } ${className} ${isGreen && isLast ? "#5B6B79" : "#131920"}`}
              onClick={() => {
                if (!isLast && elm.link) {
                  navigate(elm.link, { state: isState ? isState : {} });
                }
              }}
            >
              {elm?.title}
            </span>
            {!isLast && (
              <span className="h-15 w-16 d-flex">
                <img src={icons.rightarrow} alt="right" className="fit-image" />
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
