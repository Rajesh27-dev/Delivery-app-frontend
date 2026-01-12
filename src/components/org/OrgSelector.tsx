import { Box, MenuItem, Select, Typography } from "@mui/material";
import { useOrg } from "../../store/OrgContext";

export default function OrgSelector() {
  const { org, setOrg } = useOrg();

  return (
    <Box mb={2} display="flex" alignItems="center" gap={2}>
      <Typography fontWeight={600}>Scope</Typography>

      <Select
        value={org?.orgId ?? "GLOBAL"}
        onChange={e =>
          e.target.value === "GLOBAL"
            ? setOrg(null)
            : setOrg({ orgId: e.target.value, name: e.target.value })
        }
        size="small"
      >
        <MenuItem value="GLOBAL">🌍 Global</MenuItem>
        <MenuItem value="ORG_PIZZAHUB">🍕 PizzaHub</MenuItem>
      </Select>
    </Box>
  );
}
