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
import type { Role } from "../../types/role";

type Props = {
  roles: Role[];
};

export default function RoleTable({ roles }: Props) {
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell><strong>Role Name</strong></TableCell>
          <TableCell><strong>Scope</strong></TableCell>
          <TableCell><strong>Org</strong></TableCell>
          <TableCell align="right"><strong>Actions</strong></TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {roles.map((role) => (
          <TableRow key={role.roleId} hover>
            <TableCell>{role.name}</TableCell>

            <TableCell>
              {role.orgId ? (
                <Chip label="ORG" color="primary" size="small" />
              ) : (
                <Chip label="GLOBAL" color="default" size="small" />
              )}
            </TableCell>

            <TableCell>
              {role.orgId ?? "—"}
            </TableCell>

            <TableCell align="right">
              <Tooltip title="Edit Role">
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
