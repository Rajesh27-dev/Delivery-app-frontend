import axios from "axios";

export interface AdminUser {
  id: string;        // firebase uid
  name: string;
  email: string;
  role?: string;
  status?: string;
}

export const getAdminUsers = async (): Promise<AdminUser[]> => {
  const res = await axios.get("http://localhost:8080/admin/users");
  return res.data;
};
