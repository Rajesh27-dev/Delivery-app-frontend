import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemText,
//   ListItemSecondaryAction,
  FormControlLabel,
} from "@mui/material";
import { useEffect, useState } from "react";
import { permissionApi } from "../../services/permission";
import { roleApi } from "../../services/role";
import { useOrg } from "../../store/OrgContext";

export default function CreateRoleDialog({ open, onClose, onCreated }: any) {
  const { org } = useOrg();
  const [name, setName] = useState("");
  const [permissions, setPermissions] = useState<any[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [isGlobal, setIsGlobal] = useState(false);

  useEffect(() => {
    permissionApi.list(org?.orgId ?? null).then(setPermissions);
  }, [org]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleCreate = async () => {
    await roleApi.create({
      name,
      permissionIds: selected,
    //   scope: isGlobal ? "GLOBAL" : "ORG",
      orgId: isGlobal ? null : org?.orgId,
    });
    onCreated();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Create Role</DialogTitle>

      <DialogContent>
        <TextField
          label="Role Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={isGlobal}
              onChange={(e) => setIsGlobal(e.target.checked)}
            />
          }
          label="Global Role"
        />

        <List>
          {permissions.map((p) => (
            <div 
            // key={p.id} 
            onClick={() => toggle(p.id)}>
              <ListItemText primary={p.name} secondary={p.code} />
              {/* <ListItemSecondaryAction> */}
                <Checkbox checked={selected.includes(p.id)} />
              {/* </ListItemSecondaryAction> */}
            </div>
          ))}
        </List>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleCreate}>
          Create Role
        </Button>
      </DialogActions>
    </Dialog>
  );
}
