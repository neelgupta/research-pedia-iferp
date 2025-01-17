import UserLayout from "@/pages/Layout/UserLayout";
import Home from "@/pages/User/Home";
import Premium from "@/pages/User/Premium/Premium";
import ProfessionalMemberProfile from "@/pages/User/ProfessionalMemberProfile";
import { Navigate, Route, Routes } from "react-router-dom";

export const UserRoutes = () => {
  const role = "professional";
  // const role = "professional" || "student" || "  institutional";

  // const userRoutes = [
  //   {
  //     path: "/",
  //     component: <ProfessionalMemberProfile />,
  //   },
  // ];

  const roleBasedRoutes = {
    professional: [
      {
        path: "/",
        component: <ProfessionalMemberProfile />,
      },
    ],
    // student: [
    //   {
    //     path: "/",
    //     component: <StudentProfile />,
    //   },
    // ],
    // institutional: [
    //   {
    //     path: "/",
    //     component: <InstitutionalDashboard />,
    //   },
    // ],
  };

  const userRoutes = roleBasedRoutes[role] || [];

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
