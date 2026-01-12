import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <Box p={2}>
      <Typography variant="h5">Admin Dashboard</Typography>

      <Box mt={2}>
        <Link to="/admin/users">Go to User Management</Link>
      </Box>
    </Box>
  );
}
