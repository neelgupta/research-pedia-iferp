import { icons } from "@/utils/constants";
import "./RightSideBar.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsRightSide,
  setIsUserSide,
  setRightSideObj,
} from "@/store/globalSlice";

const RightSideBar = () => {
  const reduxData = useSelector((state) => state.global);
  const { rightSideObj, isRightSide, isUserSide } = reduxData || {};
  const dispatch = useDispatch();

  const rightList = [
    {
      icon: icons.userBIcons,
      name: "My Network",
      active: icons?.activeUserIcons,
    },
    {
      icon: icons.messageBIcons,
      name: "Messages",
      active: icons?.activeMessageIcons,
    },
    {
      icon: icons.notificationBIcons,
      name: "Notification",
      active: icons?.activeNotificationIcons,
    },
    {
      icon: icons.saveBIcons,
      name: "Bookmarks",
      active: icons?.activeSaveIcons,
    },
    {
      icon: icons.noteBIcons,
      name: "Notes",
      active: icons?.activeNoteIcons,
    },
  ];

  return (
    <div className="right-sidebar-container">
      {rightList?.map((ele) => {
        return (
          <div
            className="d-flex flex-column align-items-center mb-3 mb-24 pointer d-a"
            onClick={() => {
              if (isUserSide) {
                dispatch(setIsUserSide(false));
              }
              setTimeout(() => {
                dispatch(setIsRightSide(true));
                dispatch(
                  setRightSideObj({
                    title: ele?.name,
                  })
                );
              }, 100);
            }}
          >
            <img
              src={ele?.name === rightSideObj?.title ? ele?.active : ele?.icon}
              alt="img"
              className="img-fluid mb-1 h-18 w-18"
            />
            <p
              className={`${ele?.name === rightSideObj?.title ? "menu-item-name-active" : "menu-item-name"}`}
            >
              {ele?.name}
            </p>
            {ele?.name === rightSideObj?.title && (
              <div className="right-sidebar-active-icon"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RightSideBar;
