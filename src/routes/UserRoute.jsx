
import UserLayout from "@/pages/Layout/UserLayout";
import Home from "@/pages/User/Home";
import Premium from "@/pages/User/Premium/Premium";
import { Navigate, Route, Routes } from "react-router-dom";


export const UserRoutes = () => {

  const role = 'admin';

  const userRoutes = [
    {
      path: "/",
      component: <Premium/>,
    },
  
  ];


  return (
    <Routes>
      {userRoutes?.map((elm, index) => {
        return (
          <Route
            key={index}
            path={elm.path}
            element={<UserLayout>{elm.component}</UserLayout>}
          />
        );
      })}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
