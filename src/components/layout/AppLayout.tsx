import { Box } from "@mui/material";
import OrgSelector from "../org/OrgSelector";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box display="flex" height="100vh">
      <Sidebar />
      <Box flex={1} p={2}>
        <OrgSelector />
        {children}
      </Box>
    </Box>
  );
}
