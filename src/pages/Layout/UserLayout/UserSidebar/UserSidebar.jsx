import { icons } from "@/utils/constants";
import "./UserSidebar.scss"

const UserSidebar = () => {
    return (
        <div className="usersidebar-container d-flex flex-column align-items-center border rearchPedia-scroll">
               <div className="d-flex flex-column align-items-center mb-24 mt-24">
                <img src={icons.humbarger} alt="img" className="img-fluid mb-1" />
               
            </div>
            <div className="d-flex flex-column align-items-center mb-3 mb-24 ">
                <img src={icons.UserHome} alt="img" className="img-fluid mb-1" />
                <p className="text-center mb-0">Home</p>
            </div>
            <div className="d-flex flex-column align-items-center mb-3 mb-24">
                <img src={icons.Userpdf} alt="img" className="img-fluid mb-1" />
                <p className="text-center mb-0">Home</p>
            </div>
            <div className="d-flex flex-column align-items-center mb-3 mb-24">
                <img src={icons.UserLibrary} alt="img" className="img-fluid mb-1" />
                <p className="text-center mb-0">Home</p>
            </div>
            <div className="d-flex flex-column align-items-center mb-3 mb-24">
                <img src={icons.UserHome} alt="img" className="img-fluid mb-1" />
                <p className="text-center mb-0">Home</p>
            </div>
            <div className="d-flex flex-column align-items-center mb-3 mb-24">
                <img src={icons.Userpdf} alt="img" className="img-fluid mb-1" />
                <p className="text-center mb-0">Home</p>
            </div>
            <div className="d-flex flex-column align-items-center mb-3 mb-24">
                <img src={icons.UserLibrary} alt="img" className="img-fluid mb-1" />
                <p className="text-center mb-0">Home</p>
            </div>

            <div className="d-flex flex-column align-items-center mb-3 mb-24 ">
                <img src={icons.UserHome} alt="img" className="img-fluid mb-1" />
                <p className="text-center mb-0">Home</p>
            </div>
            <div className="d-flex flex-column align-items-center mb-3 mb-24">
                <img src={icons.Userpdf} alt="img" className="img-fluid mb-1" />
                <p className="text-center mb-0">Home</p>
            </div>
       

          
        </div>
    );
};

export default UserSidebar;
