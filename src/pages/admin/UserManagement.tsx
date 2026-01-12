import {
  Box,
  Typography,
  CircularProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
// import { getAdminUsers, AdminUser } from "../../services/adminUserService";
import UserTable from "../../components/user/UserTable";
import UserCardList from "../../components/user/UserCardList";
import { getAdminUsers, type AdminUser } from "../../services/user.service";

export default function UserManagementPage() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await getAdminUsers();
        setUsers(data);
      } catch (e) {
        console.error("Failed to fetch users", e);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) {
    return (
      <Box p={4} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box p={2}>
      <Typography variant="h5" mb={2}>
        User Management
      </Typography>

      {isDesktop ? (
        <UserTable users={users} />
      ) : (
        <UserCardList users={users} />
      )}
    </Box>
  );
}
