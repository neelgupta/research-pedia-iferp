import { useNavigate } from "react-router-dom";
import "./SubProjectList.scss";
import { Button } from "@/components";

const SubProjectList = ({ pageName }) => {
  const navigate = useNavigate();
  const projectList = [
    {
      title: "Audio Papers",
      list: "2 Papers",
    },
    {
      title: "Bookmarked Papers",
      list: "2 Papers",
    },
    {
      title: "Exported References",
      list: "2 Papers",
    },
    {
      title: "Relevant Papers",
      list: "2 Papers",
    },
    {
      title: "Irrelevant Papers",
      list: "2 Papers",
    },
    {
      title: "Notes",
      list: "2 Papers",
    },
    {
      title: "PDF Conversations",
      list: "2 Papers",
    },
    {
      title: "Reposted Papers",
      list: "2 Papers",
    },
    {
      title: "Reposted Papers",
      list: "2 Papers",
    },
    {
      title: "Reposted Papers",
      list: "2 Papers",
    },
    {
      title: "Reposted Papers",
      list: "2 Papers",
    },
    {
      title: "Translated  Papers",
      list: "2 Papers",
    },
    {
      title: "Viewed Papers",
      list: "2 Papers",
    },
  ];

  return (
    <div className="sub-project-container">
      <div className="row row-gap">
        {projectList?.map((ele, index) => {
          return (
            <div className="col-xl-3 col-lg-4 col-sm-6" key={index}>
              <div className="card-d p-24">
                <h3 className="title-project">{ele.title}</h3>
                <p className="title-list">{ele.list}</p>
                <div className="d-flex justify-content-end">
                  <Button
                    btnText="View List"
                    btnStyle="BT"
                    className="h-43"
                    onClick={() => {
                      if (index === 0) {
                        navigate(
                          "/admin/manage-users/list-user/user-details/audio-list",
                          {
                            state: {
                              isActive: true,
                              viewList: {
                                isTrue: true,
                                title: pageName,
                              },
                              Details: {
                                isTrue: true,
                                title: ele.title,
                              },
                            },
                          }
                        );
                      } else {
                        navigate(
                          "/admin/manage-users/list-user/user-details/details-list",
                          {
                            state: {
                              isActive: true,
                              viewList: {
                                isTrue: true,
                                title: pageName,
                              },
                              Details: {
                                isTrue: true,
                                title: ele.title,
                              },
                            },
                          }
                        );
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubProjectList;
