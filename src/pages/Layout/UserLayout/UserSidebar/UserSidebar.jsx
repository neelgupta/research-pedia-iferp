import { icons } from "@/utils/constants";
import "./UserSidebar.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsRightSide,
  setIsUserSide,
  setRightSideObj,
} from "@/store/globalSlice";
import { useNavigate } from "react-router-dom";

const UserSidebar = () => {
  const reduxData = useSelector((state) => state.global);
  const { isUserSide, isRightSide } = reduxData || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="user-sidebar-container">
      <div
        className={`d-flex  align-items-center justify-content-center mb-24 pointer`}
      >
        <div
          className={` ${isUserSide ? "h-48 w-48 d-flex  align-items-center justify-content-center" : "h-48 w-48 "}`}
          onClick={() => {
            if (isRightSide) {
              dispatch(setIsRightSide(false));
              dispatch(
                setRightSideObj({
                  title: "",
                })
              );
            }
            dispatch(setIsUserSide(!isUserSide));
          }}
        >
          <img
            src={isUserSide ? icons.humbarger : icons.roundMenuIcons}
            alt="img"
            className={`img-fluid ${isUserSide ? "h-24 w-24" : " "}`}
          />
        </div>
      </div>
      <div
        className="d-flex flex-column align-items-center mb-3 mb-24 "
        style={{
          cursor: "pointer",
        }}
      >
        <img
          src={icons.UserHome}
          alt="img"
          className="img-fluid mb-1 h-18 w-18"
        />
        <p className="menu-item-name">Home</p>
      </div>
      <div
        className="d-flex flex-column align-items-center mb-3 mb-24 "
        style={{
          cursor: "pointer",
        }}
      >
        <img
          src={icons.bookIconsB}
          alt="img"
          className="img-fluid mb-1 h-18 w-18"
        />
        <p className="menu-item-name">Library</p>
      </div>
      <div
        className="d-flex flex-column align-items-center mb-3 mb-24 "
        onClick={() => {
          navigate("/uploadpdf");
        }}
        style={{
          cursor: "pointer",
        }}
      >
        <img
          src={icons.chatIcons}
          alt="img"
          className="img-fluid mb-1 h-18 w-18"
        />
        <p className="menu-item-name">Chat With Doc</p>
      </div>
      <div
        className="d-flex flex-column align-items-center mb-3 mb-24 "
        onClick={() => {
          navigate("/literature-review");
        }}
        style={{
          cursor: "pointer",
        }}
      >
        <img
          src={icons.reviewIcons}
          alt="img"
          className="img-fluid mb-1 h-18 w-18"
        />
        <p className="menu-item-name">Literature Review</p>
      </div>
      <div
        className="d-flex flex-column align-items-center mb-3 mb-24 "
        style={{
          cursor: "pointer",
        }}
      >
        <img
          src={icons.transactionIcons}
          alt="img"
          className="img-fluid mb-1 h-18 w-18"
        />
        <p className="menu-item-name">Translation</p>
      </div>
      <div
        className="d-flex flex-column align-items-center mb-3 mb-24 "
        style={{
          cursor: "pointer",
        }}
      >
        <img
          src={icons.primeAIcons}
          alt="img"
          className="img-fluid mb-1 h-18 w-18"
        />
        <p className="menu-item-name active-n">Premium</p>
      </div>
    </div>
  );
};

export default UserSidebar;
