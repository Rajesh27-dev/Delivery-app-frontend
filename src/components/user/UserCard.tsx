import { Card, CardContent, Typography, Chip, Box } from "@mui/material";
import type { AdminUser } from "../../services/user.service";

export default function UserCard({ user }: { user: AdminUser }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{user.name}</Typography>
        <Typography variant="body2">{user.email}</Typography>

        <Box mt={1} display="flex" gap={1} flexWrap="wrap">
          <Chip label={`ID: ${user.id}`} size="small" />
          <Chip
            label={user.role || "UNASSIGNED"}
            size="small"
            color={user.role ? "primary" : "warning"}
          />
          <Chip
            label={user.status || "ACTIVE"}
            size="small"
            color={user.status === "DISABLED" ? "default" : "success"}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
