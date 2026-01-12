import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { permissionApi } from "../../services/permission";
import { useOrg } from "../../store/OrgContext";

export default function CreatePermissionDialog({
  open,
  onClose,
  onCreated,
}: any) {
  const { org } = useOrg();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [isGlobal, setIsGlobal] = useState(false);

  const handleCreate = async () => {
    await permissionApi.create({
      name,
      code,
    //   scope: isGlobal ? "GLOBAL" : "ORG",
      orgId: isGlobal ? null : org?.orgId,
    });
    onCreated();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Create Permission</DialogTitle>

      <DialogContent>
        <TextField
          label="Permission Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Permission Code (e.g ORDER_CREATE)"
          fullWidth
          margin="normal"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={isGlobal}
              onChange={(e) => setIsGlobal(e.target.checked)}
            />
          }
          label="Global Permission"
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleCreate}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
