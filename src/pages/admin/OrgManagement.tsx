import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { createOrg, getOrgs, type Org } from "../../services/orgService";
// import { createOrg, getOrgs, Org } from "../../services/orgService";

export default function OrgManagementPage() {
  const [name, setName] = useState("");
  const [orgs, setOrgs] = useState<Org[]>([]);

  const loadOrgs = async () => {
    const data = await getOrgs();
    setOrgs(data);
  };

  useEffect(() => {
    loadOrgs();
  }, []);

  const handleCreate = async () => {
    if (!name.trim()) return;
    await createOrg(name);
    setName("");
    loadOrgs();
  };

  return (
    <Box p={2}>
      <Typography variant="h5" mb={2}>
        Organization Management
      </Typography>

      <Box display="flex" gap={2} mb={3}>
        <TextField
          label="Organization Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="contained" onClick={handleCreate}>
          Create
        </Button>
      </Box>

      <List>
        {orgs.map((o) => (
          <ListItem key={o.orgId}>
            <ListItemText
              primary={o.name}
              secondary={`ID: ${o.orgId}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
