import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./Layout.scss";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { getDataFromLocalStorage } from "@/utils/helpers";
import UserNavbar from "./UserLayout/UserNavbar";

const Layout = ({ children }) => {
  const [show, setShow] = useState(true);
  const sidebarOpen = useSelector((state) => state.global.sidebarOpen);
  return (
    <>

           <div id="layout-container">
          <Sidebar show={sidebarOpen} setShow={setShow} />
          <div className="right-body-content">
            <Navbar setShow={setShow} />
            <div className="body-block rearchPedia-scroll">{children}</div>
          </div>
        </div>
    


    </>
  )
}
export default Layout;


//   return (
//     <>
//       <div id="layout-container">
//         <Sidebar show={sidebarOpen} setShow={setShow} />
//         <div className="right-body-content">
//           <Navbar setShow={setShow} />
//           <div className="body-block rearchPedia-scroll">{children}</div>
//         </div>
//       </div>
//     </>
//   );
// };

