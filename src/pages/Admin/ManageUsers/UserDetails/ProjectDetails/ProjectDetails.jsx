import { Button } from "@/components";
import "./ProjectDetails.scss";
import { useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const navigate = useNavigate();
  const projectList = [
    {
      title: "Project 1",
      list: "13 List",
    },
    {
      title: "My Project",
      list: "13 List",
    },
    {
      title: "Project 2",
      list: "13 List",
    },
    {
      title: "Project 3",
      list: "13 List",
    },
    {
      title: "Project 4",
      list: "13 List",
    },
    {
      title: "Project 5",
      list: "13 List",
    },
  ];

  return (
    <div className="project-details-container">
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
                      navigate(
                        "/admin/manage-users/list-user/user-details/sub-list",
                        {
                          state: {
                            isActive: true,
                            viewList: {
                              isTrue: true,
                              title: ele.title,
                            },
                          },
                        }
                      );
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

export default ProjectDetails;
