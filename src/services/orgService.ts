import axios from "axios";

export interface Org {
  orgId: string;
  name: string;
  status: string;
}

const BASE = "http://localhost:8081";

export const createOrg = async (name: string): Promise<Org> => {
  const res = await axios.post(`${BASE}/orgs`, { name });
  return res.data;
};

export const getOrgs = async (): Promise<Org[]> => {
  const res = await axios.get(`${BASE}/orgs`);
  return res.data;
};
