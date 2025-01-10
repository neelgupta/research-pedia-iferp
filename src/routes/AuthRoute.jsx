
import AuthenticationCode from "@/pages/Authentication/AuthenticationCode";
import Checkmail from "@/pages/Authentication/Checkmail";
import ForgotPassword from "@/pages/Authentication/ForgotPassword";
import Login from "@/pages/Authentication/Login";
import ResetPassword from "@/pages/Authentication/ResetPassword";
import { Navigate, Route, Routes } from "react-router-dom";

const AuthRoute = () => {
  return (
    <Routes>
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/forgotpassword" element={<ForgotPassword />} />
      <Route path="/admin/checkmail" element={<Checkmail />} />
      <Route path="/admin/resetpassword/:token" element={<ResetPassword />} />
      <Route path="/admin/authenticationcode" element={<AuthenticationCode />} />
      <Route path="*" element={<Navigate to={"/admin/login"} />} />
    </Routes>
  );
};

export default AuthRoute;
