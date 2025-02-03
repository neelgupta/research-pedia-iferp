import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/pages/Layout";
import { Spinner } from "react-bootstrap";
import PlansTable from "@/pages/Admin/PremiumPlan/Plans/PlansTable";
import AddPlans from "@/pages/Admin/PremiumPlan/Plans/AddPlans/AddPlans";
import UserPlans from "@/pages/Admin/PremiumPlan/UserPlans";



const FooterBanner = lazy(() => import("@/pages/Admin/BannerAds/FooterBanner"));
const FullScreen = lazy(() => import("@/pages/Admin/BannerAds/FullScreen/FullScreen"));
const HeaderBanner = lazy(() => import("@/pages/Admin/BannerAds/HeaderBanner"));
const ModalPopup = lazy(() => import("@/pages/Admin/BannerAds/ModalPopup/ModalPopup"));
const ScrollDisplay = lazy(() => import("@/pages/Admin/BannerAds/ScrollDisplay/ScrollDisplay"));
const FeedbackDashboard = lazy(() => import("@/pages/Admin/Feedback/FeedbackDashboard"));
const UserFeedback = lazy(() => import("@/pages/Admin/Feedback/UserFeedback"));
const ListUser = lazy(() => import("@/pages/Admin/ManageUsers/ListUser/ListUser"));
const UserDetails = lazy(() => import("@/pages/Admin/ManageUsers/UserDetails"));
const CategoryTopic = lazy(() => import("@/pages/Admin/SiteSettings/CategoryTopics"));
const HeaderFooterCode = lazy(() => import("@/pages/Admin/SiteSettings/HeaderFooterCode"));
const Security = lazy(() => import("@/pages/Admin/SiteSettings/Security/Security"));
const SmtpReplay = lazy(() => import("@/pages/Admin/SiteSettings/SmtpReplay"));
const AddAdministratorRoles = lazy(() => import("@/pages/Admin/StaffManagement/AdministratorRoles/AddAdministratorRoles"));
const AdministratorRolesTable = lazy(() => import("@/pages/Admin/StaffManagement/AdministratorRoles/AdministratorRolesTable"));
const AddAdministratorUser = lazy(() => import("@/pages/Admin/StaffManagement/AdministratorUser/AddAdministratorUser"));
const AdministratorUser = lazy(() => import("@/pages/Admin/StaffManagement/AdministratorUser/AdministratorTable"));
const APIKeys = lazy(()=> import("@/pages/Admin/APIKeys"))

const Loading = () =>  <div
className="d-flex justify-content-center align-items-center"
style={{
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  zIndex: 9999, 
}}
>
<Spinner animation="grow" variant="primary" />
</div>;

export const AppRoutes = () => {
  const adminRoutes = [
    { path: "/admin/setting/category-topic", component: <CategoryTopic /> },
    { path: "/admin/setting/security", component: <Security /> },
    { path: "/admin/setting/smtp-replay", component: <SmtpReplay /> },
    { path: "/admin/setting/header-footer", component: <HeaderFooterCode /> },
    { path: "/admin/manage-users/list-user", component: <ListUser /> },
    { path: "/admin/manage-users/list-user/user-details", component: <UserDetails /> },
    { path: "/admin/manage-users/list-user/user-details/:type", component: <UserDetails /> },
    { path: "/admin/staff/administrator-user", component: <AdministratorUser /> },
    { path: "/admin/staff/addadministrator-user", component: <AddAdministratorUser /> },
    { path: "/admin/staff/administrator-roles", component: <AdministratorRolesTable /> },
    { path: "/admin/staff/addadministrator-roles", component: <AddAdministratorRoles /> },
    { path: "/admin/feedback", component: <FeedbackDashboard /> },
    { path: "/admin/feedback/user-details", component: <UserFeedback /> },
    { path: "/admin/ads/hader-banner", component: <HeaderBanner /> },
    { path: "/admin/ads/footer-banner", component: <FooterBanner /> },
    { path: "/admin/ads/modal-popup", component: <ModalPopup /> },
    { path: "/admin/ads/onscroll-display", component: <ScrollDisplay /> },
    { path: "/admin/ads/full-display", component: <FullScreen /> },
    { path: "/admin/apikey", component: <APIKeys /> },
    { path: "/admin/plan", component: <PlansTable /> },
    { path: "/admin/add-plan", component: <AddPlans /> },
    { path: "/admin/plan/user-plan", component: <UserPlans /> },
  ];

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {adminRoutes.map((elm, index) => (
          <Route
            key={index}
            path={elm.path}
            element={<Layout>{elm.component}</Layout>}
          />
        ))}
        <Route path="*" element={<Navigate to="/admin/setting/category-topic" />} />
      </Routes>
    </Suspense>
  );
};
