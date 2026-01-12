import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";

import AdminLayout from "./components/layout/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagementPage from "./pages/admin/UserManagement";
import OrgManagementPage from "./pages/admin/OrgManagement";
import PermissionsPage from "./pages/admin/PermissionPage";
import RolesPage from "./pages/admin/RolesPage";


export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />

      {/* Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<UserManagementPage />} />
        <Route path="orgs" element={<OrgManagementPage />} />
        <Route path="permissions" element={<PermissionsPage />} />
        <Route path="roles" element={<RolesPage />} />
      </Route>
    </Routes>
  );
}
