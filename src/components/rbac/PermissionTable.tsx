import {
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import type { Permission } from "../../types/permission";

type Props = {
  permissions: Permission[];
};

export default function PermissionTable({ permissions }: Props) {
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell><strong>Code</strong></TableCell>
          <TableCell><strong>Name</strong></TableCell>
          <TableCell><strong>Scope</strong></TableCell>
          <TableCell><strong>Org</strong></TableCell>
          <TableCell align="right"><strong>Actions</strong></TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {permissions.map((p) => (
          <TableRow key={p.permissionId} hover>
            <TableCell>{p.code}</TableCell>
            <TableCell>{p.name}</TableCell>

            <TableCell>
              {p.orgId ? (
                <Chip label="ORG" color="primary" size="small" />
              ) : (
                <Chip label="GLOBAL" size="small" />
              )}
            </TableCell>

            <TableCell>{p.orgId ?? "—"}</TableCell>

            <TableCell align="right">
              <Tooltip title="Edit Permission">
                <IconButton size="small">
                  <EditIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
