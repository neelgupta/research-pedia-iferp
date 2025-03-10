import APIKeys from "@/pages/Admin/APIKeys";
import FeedbackDashboard from "@/pages/Admin/Feedback/FeedbackDashboard";
import ListUser from "@/pages/Admin/ManageUsers/ListUser/ListUser";
import UserDetails from "@/pages/Admin/ManageUsers/UserDetails";
import CategoryTopic from "@/pages/Admin/SiteSettings/CategoryTopics";
import HeaderFooterCode from "@/pages/Admin/SiteSettings/HeaderFooterCode";
import Security from "@/pages/Admin/SiteSettings/Security/Security";
import SmtpReplay from "@/pages/Admin/SiteSettings/SmtpReplay";
import AddAdministratorRoles from "@/pages/Admin/StaffManagement/AdministratorRoles/AddAdministratorRoles";
import AdministratorRolesTable from "@/pages/Admin/StaffManagement/AdministratorRoles/AdministratorRolesTable";
import AddAdministratorUser from "@/pages/Admin/StaffManagement/AdministratorUser/AddAdministratorUser";
import AdministratorUser from "@/pages/Admin/StaffManagement/AdministratorUser/AdministratorTable";
import Layout from "@/pages/Layout";
import Home from "@/pages/User/Home/Home";
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
      path: "/admin/setting/header-footer",
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
    {
      path: "/admin/staff/administrator-user",
      component: <AdministratorUser />,
    },
    {
      path: "/admin/staff/addadministrator-user",
      component: <AddAdministratorUser />,
    },
    {
      path: "/admin/staff/administrator-roles",
      component: <AdministratorRolesTable />,
    },
    {
      path: "/admin/staff/addadministrator-roles",
      component: <AddAdministratorRoles />,
    },
    {
      path: "/admin/feedback",
      component: <FeedbackDashboard />,
    },
    { path: "/admin/apikey", component: <APIKeys /> },
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
