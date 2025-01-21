import { icons } from "@/utils/constants";
import "./SimilarPeople.scss";
import { Button } from "@/components";
import { useSelector } from "react-redux";

const SimilarPeople = () => {
  const peopleList = [
    {
      id: 1,
      name: "Eva Kahana",
      image: icons?.avatarOneIcons,
      title: "Case western reserve university",
    },
    {
      id: 2,
      name: "Eva Kahana",
      image: icons?.avatarOneIcons,
      title: "Case western reserve university",
    },
    {
      id: 3,
      name: "Bodil HansenBlix",
      image: icons?.avatarOneIcons,
      title: "University of thomso",
    },
    {
      id: 4,
      name: "Gloria Gutman",
      image: icons?.avatarOneIcons,
      title: "Simon fraser University",
    },
  ];
  const reduxData = useSelector((state) => state.global);
  const { isUserSide } = reduxData || {};
  return (
    <div className="similar-container">
      <h2 className="similar-text">People with similar interest</h2>
      <div className="row gy-md-3 gy-3">
        {peopleList?.map((ele, index) => {
          return (
            <div
              className={`${isUserSide ? "col-lg-4 col-md-4 col-sm-6" : "col-lg-3 col-md-4 col-sm-6"}`}
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
                    src={ele.image}
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
