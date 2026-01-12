import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useOrg } from "../../store/OrgContext";
import RoleTable from "../../components/rbac/RoleTable";
import RoleCardList from "../../components/rbac/RoleCardList";
import { roleApi } from "../../services/role";
import CreateRoleDialog from "../../components/rbac/CreateRoleDialog";

export default function RolesPage() {
    const { org } = useOrg();
    const isDesktop = useMediaQuery("(min-width:900px)");
    const [roles, setRoles] = useState<any>([]);
    const [roleCreateDialog, setRoleCreateDialog] = useState(false);

    useEffect(() => {
        roleApi.list(org?.orgId ?? null).then(setRoles);
    }, [org]);

    return (
        <Box>
            <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography variant="h5">Roles</Typography>
                <Button onClick={() => {
                    setRoleCreateDialog(true)
                }}
                    variant="contained">Create Role</Button>
            </Box>
            {roleCreateDialog ? <CreateRoleDialog open={roleCreateDialog} onClose={() => {
                setRoleCreateDialog(false)
            }} /> : null}

            {isDesktop ? (
                <RoleTable roles={roles} />
            ) : (
                <RoleCardList roles={roles} />
            )}
        </Box>
    );
}
