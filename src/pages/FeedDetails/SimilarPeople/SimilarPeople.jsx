import { icons } from "@/utils/constants";
import "./SimilarPeople.scss";
import { Button } from "@/components";
import { useSelector } from "react-redux";

const SimilarPeople = ({ InterestUser }) => {

  const reduxData = useSelector((state) => state.global);
  
  const { isUserSide } = reduxData || {};

  return (
    <div className="similar-container">
      <h2 className="similar-text">People with similar interest</h2>
      <div className="row gy-md-3 gy-3">
        {InterestUser?.map((ele, index) => {
          return (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "232px",
              }}
              key={index}
            >
              <div className="people-box">
                <div className="d-flex justify-content-end">
                  <img
                    src={icons?.closeIcons}
                    alt="close-icons"
                    loading="lazy"
                    className="w-14 h-14"
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-12 flex-wrap gap-1">
                  <img
                    src={icons?.avatarOneIcons}
                    alt={`${ele.name}-icons`}
                    className="h-48 w-48 rounded-circle"
                  />
                  <Button
                    btnText="Follow"
                    btnStyle="BTB"
                    className="w-58 h-27 pt-6 pb-6 br-4"
                    textClass="text-12-600"
                  />
                </div>
                <h3 className="user-name">{ele.name}</h3>
                <p className="user-pra">{ele.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SimilarPeople;
