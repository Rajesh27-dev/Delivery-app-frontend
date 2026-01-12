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
import type { Permission } from "../../types/permission";

type Props = {
  permissions: Permission[];
};

export default function PermissionCardList({ permissions }: Props) {
  return (
    <Stack spacing={2}>
      {permissions.map((p) => (
        <Card key={p.permissionId} variant="outlined">
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography fontWeight={600}>{p.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.code}
                </Typography>
              </Box>

              <IconButton size="small">
                <EditIcon fontSize="small" />
              </IconButton>
            </Box>

            <Stack direction="row" spacing={1} mt={1}>
              <Chip
                label={p.orgId ? "ORG" : "GLOBAL"}
                size="small"
                color={p.orgId ? "primary" : "default"}
              />
              {p.orgId && (
                <Chip label={p.orgId} size="small" />
              )}
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
