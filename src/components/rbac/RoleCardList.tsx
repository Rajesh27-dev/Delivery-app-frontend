import {
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import type { Role } from "../../types/role";

type Props = {
  roles: Role[];
};

export default function RoleCardList({ roles }: Props) {
  return (
    <Stack spacing={2}>
      {roles.map((role) => (
        <Card key={role.roleId} variant="outlined">
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Typography fontWeight={600}>{role.name}</Typography>
              <IconButton size="small">
                <EditIcon fontSize="small" />
              </IconButton>
            </Box>

            <Stack direction="row" spacing={1} mt={1}>
              <Chip
                label={role.orgId ? "ORG" : "GLOBAL"}
                size="small"
                color={role.orgId ? "primary" : "default"}
              />
              {role.orgId && (
                <Chip label={role.orgId} size="small" />
              )}
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
