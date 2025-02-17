import { Suspense, lazy, useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { getDataFromLocalStorage } from "@/utils/helpers";
import { Spinner } from "react-bootstrap";
import PopupRegistration from "@/pages/User/PopupRegistration/PopupRegistration";
import MyFeed from "@/pages/MyFeed";
import CreateFeed from "@/pages/CreateFeed";

// Lazy load components

const FeedDetails = lazy(() => import("@/pages/FeedDetails"));
const FeedDetailsAuthor = lazy(() => import("@/pages/FeedDetailsAuthor"));
const InstitutionalProfile = lazy(
  () => import("@/pages/Institutional/InstitutionalProfile")
);
const UserLayout = lazy(() => import("@/pages/Layout/UserLayout"));
// const MyFeed = lazy(() => import("@/pages/MyFeed"));
const StudentProfile = lazy(() => import("@/pages/Student/StudentProfile"));
const ProfessionalMemberProfile = lazy(
  () => import("@/pages/User/ProfessionalMemberProfile")
);

export const UserRoutes = () => {
  const roleData = getDataFromLocalStorage();
  const role = roleData ? roleData.role : "institutional";

  const popup = false;

  const roleBasedRoutes = {
    professional: [
      {
        path: "/",
        component: <ProfessionalMemberProfile />,
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
    student: [
      {
        path: "/",
        component: <StudentProfile />,
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
    institutional: [
      {
        path: "/",
        component: <InstitutionalProfile />,
      },
      {
        path: "/feed-details",
        component: <FeedDetails popup={popup} />,
      },
      {
        path: "/feed-details-author",
        component: <FeedDetailsAuthor />,
      },
    ],
  };

  const userRoutes = roleBasedRoutes[role] || [];

  return (
    // <Suspense
    //   fallback={
    //     <div
    //       className="d-flex justify-content-center align-items-center"
    //       style={{
    //         height: "100vh",
    //         width: "100%",
    //       }}
    //     >
    //       <div className="spinner-grow text-primary" role="status"></div>
    //     </div>
    //   }
    // >
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
    // </Suspense>
  );
};
