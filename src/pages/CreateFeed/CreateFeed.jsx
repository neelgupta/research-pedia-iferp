import FeedFooter from "@/components/layouts/FeedFooter";
import UserNavbar from "../Layout/UserLayout/UserNavbar";
import "./CreateFeed.scss";
import { icons } from "@/utils/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { handleGetTopicByCatId } from "@/store/adminSlice/categoryAndTopics";
import { addProject } from "@/store/userSlice/projectSlice";
import { getDataFromLocalStorage } from "@/utils/helpers";
import { Spinner } from "react-bootstrap";
import { setIsProjectCreate } from "@/store/globalSlice";

const CreateFeed = () => {
  const isProjectCreate = useSelector((state) => state.global.isProjectCreate);

  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [selectList, setSelectList] = useState([]);
  const [topics, setTopics] = useState([]);
  const [feedlodder, setfeedlodder] = useState(false);
  const localData = getDataFromLocalStorage();
  const userId = localData.id;

  const dispatch = useDispatch();
  const fetchCategory = async () => {
    setfeedlodder(true);
    const result = await dispatch(
      handleGetTopicByCatId(state?.title?.catId || "")
    );
    setTopics(result?.data?.response);
    setfeedlodder(false);
  };

  useEffect(() => {
    isProjectCreate ? navigate("/"):""
    fetchCategory();
  }, []);

  const FeedList = topics?.map((item) => ({
    id: item._id,
    title: item.topics,
  }));

  const handleClick = (val) => {
    setSelectList((prevList) => {
      if (prevList.some((item) => item.id === val.id)) {
        return prevList.filter((item) => item.id !== val.id);
      } else {
        return [...prevList, val];
      }
    });
  };

  const handleCreateFeed = async () => {
    const topicsArray = selectList.map((item) => item.id);
    const newProject = {
      userId: userId,
      projectName: "New Project",
      topicId: topicsArray,
    };

    const result = await dispatch(addProject(newProject));

    if (result.status === 201) {
      dispatch(setIsProjectCreate(true));
      navigate(`/feed-details`);
    }
  };

  return (
    <div className="created-feed-container">
      <UserNavbar />
      <div className="created-center-content">
        <div className="d-flex align-items-center gap-1">
          <img
            onClick={() => {
              navigate(-1);
            }}
            src={icons?.leftArrowIcons}
            alt="left-arrow"
            loading="lazy"
            className="h-18 w-18 object-fit-contain pointer"
          />
          <p className="title-feed mb-0">{state?.title?.title}</p>
        </div>
        <h4 className=" pra-feed color-113D">
          Add topics to set your preferences
        </h4>
        <div className=" d-flex flex-column feed-outer">
          <div
            className="feed-main brave-scroll m-10 mb-10  d-flex "
            style={{
              // height: "550px",
              overflow: "auto",
              overflowX: "none",
            }}
          >
            {feedlodder ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="loader-container d-flex justify-content-center">
                  <Spinner animation="border" variant="primary" />
                </div>
              </div>
            ) : (
              FeedList?.map((ele, index) => {
                const isActive = selectList?.some((elem) => elem?.id === ele?.id);

                return (
                  <div className="feed">
                    <div
                      className={`pointer ${isActive ? "feed-active" : "feed-text-box"}`}
                      style={{
                        textAlign: "justify"
                      }}
                      key={index}
                      onClick={() => {
                        handleClick(ele);
                      }}
                    >
                      {ele?.title}
                      <img
                        src={isActive ? icons?.trueWIcons : icons?.pulseBIcons}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* {selectList?.length > 0 && ( */}
          <div className="d-flex justify-content-end flex-wrap gap-lg-5 gap-md-3 gap-3 flex-grow-1 align-items-end">
            <div>
              <p className="select-text">Selected topic(s) 
                {/* or journal(s) */}
                </p>
              <h6 className="select-val">
                {selectList?.[0]?.title}{" "}
                {selectList?.length > 1 ? `+ ${selectList?.length - 1}` : ""}
              </h6>
            </div>
            <Button
              btnText="Create My Feed"
              className="h-49"
              onClick={handleCreateFeed}
              disabled={selectList?.length <= 0}
            />
          </div>
        </div>
        {/* )} */}
      </div>
      <FeedFooter />
    </div>
  );
};

export default CreateFeed;
