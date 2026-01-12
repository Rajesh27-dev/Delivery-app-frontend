import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagementPage from "./pages/admin/UserManagement";
import OrgManagementPage from "./pages/admin/OrgManagement";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />

      {/* Admin */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<UserManagementPage />} />
      <Route path="/admin/orgs" element={<OrgManagementPage />} />
    </Routes>
  );
}
