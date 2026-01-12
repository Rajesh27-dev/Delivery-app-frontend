import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
} from "@mui/material";
import type { AdminUser } from "../../services/user.service";
// import { AdminUser } from "../../services/adminUserService";

export default function UserTable({ users }: { users: AdminUser[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>User ID</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {users.map((u) => (
          <TableRow key={u.id}>
            <TableCell>{u.name}</TableCell>
            <TableCell>{u.email}</TableCell>
            <TableCell>{u.id}</TableCell>
            <TableCell>
              {u.role ? (
                <Chip label={u.role} size="small" />
              ) : (
                <Chip label="UNASSIGNED" size="small" color="warning" />
              )}
            </TableCell>
            <TableCell>
              <Chip
                label={u.status || "ACTIVE"}
                size="small"
                color={u.status === "DISABLED" ? "default" : "success"}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
