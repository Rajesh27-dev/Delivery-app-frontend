import axios from "axios";

const API_BASE = "http://localhost:8080";

export const googleLogin = async (idToken: string) => {
  const res = await axios.post(`${API_BASE}/auth/google`, {
    idToken,
  });
  return res.data;
};
