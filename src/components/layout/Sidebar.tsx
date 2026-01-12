import {
    Box,
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const menuItems = [
    { label: "Dashboard", path: "/admin" },
    { label: "Users", path: "/admin/users" },
    { label: "Organizations", path: "/admin/orgs" },
    { label: "Permissions", path: "/admin/permissions" },
    { label: "Roles", path: "/admin/roles" },
];


export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
        >
            <Toolbar>
                <Typography variant="h6" fontWeight={700}>
                    Delivery Admin
                </Typography>
            </Toolbar>

            <Divider />

            <List>
                {menuItems.map((item) => (
                    <ListItemButton
                        key={item.path}
                        selected={location.pathname.startsWith(item.path)}
                        onClick={() => navigate(item.path)}
                    >
                        {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                        <ListItemText primary={item.label} />
                    </ListItemButton>
                ))}
            </List>

            <Box flexGrow={1} />

            <Divider />
            <Box p={2}>
                <Typography variant="caption" color="text.secondary">
                    Super Admin Panel
                </Typography>
            </Box>
        </Drawer>
    );
}
