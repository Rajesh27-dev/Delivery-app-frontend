import axios from "axios";
import type { Role } from "../types/role";

const BASE = "http://localhost:8080";

export const roleApi = {
  list: (orgId?: string | null) =>
    axios
      .get<Role[]>(`${BASE}/roles`, {
        params: orgId ? { orgId } : {},
      })
      .then(r => r.data),

  create: (data: {
    name: string;
    orgId?: string | null;
    permissionIds: string[];
  }) => axios.post(`${BASE}/roles`, data),

  update: (id: string, data: any) =>
    axios.put(`${BASE}/roles/${id}`, data),
};
