import CreateFeed from "@/pages/CreateFeed";
import FeedDetails from "@/pages/FeedDetails";
import FeedDetailsAuthor from "@/pages/FeedDetailsAuthor";
import InstitutionalProfile from "@/pages/Institutional/InstitutionalProfile";
import UserLayout from "@/pages/Layout/UserLayout";
import MyFeed from "@/pages/MyFeed";
import StudentProfile from "@/pages/Student/StudentProfile";
import Home from "@/pages/User/Home";
import Premium from "@/pages/User/Premium/Premium";
import ProfessionalMemberProfile from "@/pages/User/ProfessionalMemberProfile";
import { Navigate, Route, Routes } from "react-router-dom";

export const UserRoutes = () => {
  const role = "institutional";
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
    student: [
      {
        path: "/",
        component: <StudentProfile />,
      },
    ],
    institutional: [
      {
        path: "/",
        component: <InstitutionalProfile />,
      },
      {
        path: "/feed-details",
        component: <FeedDetails />,
      },
      {
        path: "/feed-details-author",
        component: <FeedDetailsAuthor />,
      },
    ],
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
      <Route path="/my-feed" element={<MyFeed />} />
      <Route path="/create-feed" element={<CreateFeed />} />
    </Routes>
  );
};
