import AuthenticationCode from "@/pages/Authentication/AdminAuthenication/AuthenticationCode";
import Checkmail from "@/pages/Authentication/AdminAuthenication/Checkmail";
import ForgotPassword from "@/pages/Authentication/AdminAuthenication/ForgotPassword";
import Login from "@/pages/Authentication/AdminAuthenication/Login";
import ResetPassword from "@/pages/Authentication/AdminAuthenication/ResetPassword";
import UserLogin from "@/pages/Authentication/UserAuthentication/Login/Login";
import UserSignup from "@/pages/Authentication/UserAuthentication/Signup/Signup";
import Home from "@/pages/User/Home";
import { Navigate, Route, Routes } from "react-router-dom";

const AuthRoute = () => {
 
  const localData = getDataFromLocalStorage();

  const role = localData.role;
  return (
    <Routes>
      {role === "admin" || role ==="superAdmin"  ? (
        <>
       
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/forgotpassword" element={<ForgotPassword />} />
          <Route path="/admin/checkmail" element={<Checkmail />} />
          <Route path="/admin/resetpassword/:token" element={<ResetPassword />} />
          <Route path="/admin/authenticationcode" element={<AuthenticationCode />} />
          <Route path="*" element={<Navigate to={"/admin/login"} />} />
        </>
      ) : role === "user" ? (
        <>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<UserLogin/>}/>
          <Route path="/signup" element={<UserSignup/>}/>
          <Route path="*" element={<Navigate to={"/login"} />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to={"/"} />} />
      )}
    </Routes>
  );
};

export default AuthRoute;
