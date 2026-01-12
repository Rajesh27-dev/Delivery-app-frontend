import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { permissionApi } from "../../services/permission";
import { useOrg } from "../../store/OrgContext";
import PermissionTable from "../../components/rbac/PermissionTable";
import PermissionCardList from "../../components/rbac/PermissionCardList";
import CreatePermissionDialog from "../../components/rbac/CreatePermissionDialog";

export default function PermissionsPage() {
    const { org } = useOrg();
    const isDesktop = useMediaQuery("(min-width:900px)");
    const [permissions, setPermissions] = useState<any>([]);
    const [roleCreateDialog, setRoleCreateDialog] = useState(false);

    useEffect(() => {
        permissionApi.list(org?.orgId ?? null).then(setPermissions);
    }, [org]);

    return (
        <Box>
            <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography variant="h5">Permissions</Typography>
                <Button onClick={() => {
                    setRoleCreateDialog(true)
                }} variant="contained">Add Permission</Button>
            </Box>
            {roleCreateDialog ? <CreatePermissionDialog open={roleCreateDialog} onClose={() => {
                setRoleCreateDialog(false)
            }} /> : null}

            {isDesktop ? (
                <PermissionTable permissions={permissions} />
            ) : (
                <PermissionCardList permissions={permissions} />
            )}
        </Box>
    );
}
