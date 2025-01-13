import ListUser from "@/pages/Admin/ManageUsers/ListUser/ListUser";
import UserDetails from "@/pages/Admin/ManageUsers/UserDetails";
import CategoryTopic from "@/pages/Admin/SiteSettings/CategoryTopics";
import HeaderFooterCode from "@/pages/Admin/SiteSettings/HeaderFooterCode";
import Security from "@/pages/Admin/SiteSettings/Security/Security";
import SmtpReplay from "@/pages/Admin/SiteSettings/SmtpReplay";
import Layout from "@/pages/Layout";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  const adminRoutes = [
    {
      path: "/admin/setting/category-topic",
      component: <CategoryTopic />,
    },
    {
      path: "/admin/setting/security",
      component: <Security />,
    },
    {
      path: "/admin/setting/smtp-replay",
      component: <SmtpReplay />,
    },
    {
      path: "/admin/setting/headerfooter",
      component: <HeaderFooterCode />,
    },
    {
      path: "/admin/manage-users/list-user",
      component: <ListUser />,
    },
    {
      path: "/admin/manage-users/list-user/user-details",
      component: <UserDetails />,
    },
    {
      path: "/admin/manage-users/list-user/user-details/:type",
      component: <UserDetails />,
    },
  ];

  return (
    <Routes>
      {adminRoutes?.map((elm, index) => {
        return (
          <Route
            key={index}
            path={elm.path}
            element={<Layout>{elm.component}</Layout>}
          />
        );
      })}
      <Route
        path="*"
        element={<Navigate to="/admin/setting/category-topic" />}
      />
    </Routes>
  );
};
