import { icons } from "@/utils/constants";
import UserNavbar from "../Layout/UserLayout/UserNavbar";
import "./MyFeed.scss";
import { useEffect, useState } from "react";
import FeedFooter from "@/components/layouts/FeedFooter";
import { useNavigate } from "react-router-dom";
import { getDataFromLocalStorage } from "@/utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetCategories,
  handleGetMe,
  handleGetTopics,
} from "@/store/adminSlice/categoryAndTopics";
import MyFeedmodel from "./MyFeedmodel";
import { Spinner } from "react-bootstrap";
import RoleSelectionModal from "../Authentication/UserAuthentication/Login/RoleSelectionModal";

const MyFeed = () => {
  const setIsProjectCreate = useSelector(
    (state) => state.global.isProjectCreate
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(null);
  const [limitData, setLimitData] = useState(10);
  const [categories, setCategories] = useState([]);
  const [feedlodder, setfeedlodder] = useState(false);
  const [isgoogleLoggedIn, setIsGoogleLoggedIn] = useState(false);
  const [userData, setUserData] = useState();

  const fetchAllCategories = async () => {
    setfeedlodder(true);
    const result = await dispatch(handleGetTopics(1, limitData));

    setLimitData(result?.data?.response?.pagination?.totalCount);
    const data = result?.data?.response.topics;

    const filteredTopics = data?.filter((cat) => cat.categoryId);
    setCategories(filteredTopics);
    setfeedlodder(false);
  };

  const getMe = async () => {
    const result = await dispatch(handleGetMe());
    if (result.status === 200) {
      setUserData(result.data.response);
      setIsGoogleLoggedIn(
        !result.data.response.role || !result.data.response.phoneNumber
      );
    }
  };

  const onProfileModalHide = ()=>{
    getMe()
  } 


  useEffect(() => {
    setIsProjectCreate ? navigate("/") : "";
    fetchAllCategories();
    getMe();
  }, [limitData]);

  const localData = getDataFromLocalStorage();

  console.log(localData, "localData");
  const { name, isFirstLogin } = localData;

  const feedList = categories?.map((item) => ({
    id: item._id,
    title: item.topics,
    catId: item.categoryId,
    icon: icons?.rectangleIcons,
  }));

  const [isOpenModal, setIsOpenModal] = useState(isFirstLogin);
  const onHide = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      window.history.pushState(null, "", window.location.pathname);
    };

    window.history.pushState(null, "", window.location.pathname);
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);
  return (
    <>
      <div className="my-feed-container">
        <UserNavbar />
        <div className="center-content rearchPedia-scroll">
          <h6 className="welcome-text text-capitalize">👋 Welcome {name}!</h6>
          <h4 className="prom-text">Let’s begin your resource journey!</h4>
          <p className="feed-text">
            Select your research area to help us setup your feed
          </p>

          <div className="card-box">
            {feedlodder ? (
              <div className="spinner-container d-flex justify-content-center">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              <div
                style={{
                  height: "550px",
                  overflow: "auto",
                  // overflowX: "none",
                  overflowX: "hidden",
                }}
                className="brave-scroll m-10 mb-10"
              >
                <div className="row gy-4">
                  {feedList?.map((ele, index) => {
                    const iaActiveCard = isActive === ele?.id;
                    return (
                      <div
                        key={index}
                        className="col-lg-3 col-md-4 pointer"
                        onClick={() => {
                          setIsActive(ele);
                          setTimeout(() => {
                            navigate(`/create-feed`, {
                              state: {
                                title: ele,
                              },
                            });
                          }, 1000);
                        }}
                      >
                        <div
                          className={`${iaActiveCard ? "card-details" : "default-card"}`}
                        >
                          <div className="image-div">
                            <img src={ele.icon} alt="Image1" />
                          </div>
                          <h5
                            className={`feed-name-text ${iaActiveCard ? "b-text" : ""}`}
                          >
                            {ele.title}
                          </h5>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {/* 
             <div className="step-box">
              <p
                className="mb-0 text-14-500 color-113D pointer"
                onClick={() => navigate("/create-feed")}
              >
                Skip this step
              </p>
              <img
                src={icons?.rightArrowIcons}
                alt="right-icons"
                loading="lazy"
              />
            </div>  */}
          </div>
        </div>
        <FeedFooter />
      </div>

      {isgoogleLoggedIn && (
        <RoleSelectionModal userData={userData} isOpen={true}
        onProfileModalHide={onProfileModalHide}
        />
      )}

      {/* {isOpenModal && <MyFeedmodel onHide={onHide} />} */}
    </>
  );
};

export default MyFeed;
