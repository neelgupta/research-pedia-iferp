import AuthenticationCode from "@/pages/Authentication/AdminAuthenication/AuthenticationCode";
import Checkmail from "@/pages/Authentication/AdminAuthenication/Checkmail";
import ForgotPassword from "@/pages/Authentication/AdminAuthenication/ForgotPassword";
import Login from "@/pages/Authentication/AdminAuthenication/Login";
import ResetPassword from "@/pages/Authentication/AdminAuthenication/ResetPassword";
import EmailVerification from "@/pages/Authentication/UserAuthentication/EmailVerification";
import UserLogin from "@/pages/Authentication/UserAuthentication/Login/Login";
import UserResetPassword from "@/pages/Authentication/UserAuthentication/ResetPassword";
import UserSignup from "@/pages/Authentication/UserAuthentication/Signup";
import Home from "@/pages/User/Home";

import { getDataFromLocalStorage } from "@/utils/helpers";
import { Navigate, Route, Routes } from "react-router-dom";

const AuthRoute = () => {
  return (
    <Routes>
      <>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/reset-password" element={<UserResetPassword />} />
        <Route path="/sign-up" element={<UserSignup />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin/check-mail" element={<Checkmail />} />
        <Route path="/admin/resetpassword/:token" element={<ResetPassword />} />
        {/* <Route path="/admin/reset-password" element={<ResetPassword />} /> */}
        <Route
          path="/admin/authentication-code"
          element={<AuthenticationCode />}
        />

        <Route path="*" element={<Navigate to={"/login"} />} />
      </>
    </Routes>
  );
};

export default AuthRoute;
