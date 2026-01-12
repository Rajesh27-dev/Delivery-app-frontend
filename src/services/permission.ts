import axios from "axios";
import type { Permission } from "../types/permission";

const BASE = "http://localhost:8080";

export const permissionApi = {
  list: (orgId?: string | null) =>
    axios
      .get<Permission[]>(`${BASE}/permissions`, {
        params: orgId ? { orgId } : {},
      })
      .then(r => r.data),

  create: (data: {
    code: string;
    name: string;
    orgId?: string | null;
  }) => axios.post(`${BASE}/permissions`, data),

  update: (id: string, name: string) =>
    axios.put(`${BASE}/permissions/${id}`, { name }),
};
