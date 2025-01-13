import UserNavbar from "./UserNavbar";
import UserSidebar from "./UserSidebar/UserSidebar";
import "./UserLayout.scss"
const UserLayout = ({children}) => {
    return (
        <>
         <div id="userlayout-container">
  <UserNavbar />
  <div className="right-body-content position-relative">
    <div className="d-flex position-relative">
      <div className="position-absolute top-0 start-0">
      <UserSidebar className="left-sidebar rearchPedia-scroll " /> 
      </div>     
      <div className="body-block rearchPedia-scroll">{children}</div> 
     
   <div className="position-absolute top-0 end-0">
      <UserSidebar className="right-sidebar" /> 
      </div>
    </div>
  </div>
</div>


        </>
    )
}

export default UserLayout;