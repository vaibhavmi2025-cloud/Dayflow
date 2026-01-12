import { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, AppBar, Typography, IconButton, Box, Avatar, Divider } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaidIcon from "@mui/icons-material/Paid";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useNavigate } from "react-router-dom";

const drawerWidth = 220;

const navConfig = {
  employee: [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Profile", icon: <AccountCircleIcon />, path: "/profile" },
    { text: "Attendance", icon: <EventAvailableIcon />, path: "/attendance" },
    { text: "Leave Requests", icon: <AssignmentIndIcon />, path: "/leave" },
    { text: "Payroll", icon: <PaidIcon />, path: "/payroll" },
  ],
  admin: [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Employee Mgmt", icon: <PeopleIcon />, path: "/employees" },
    { text: "Attendance Records", icon: <EventAvailableIcon />, path: "/attendance" },
    { text: "Leave Approvals", icon: <AssignmentIndIcon />, path: "/leave-approvals" },
    { text: "Payroll", icon: <PaidIcon />, path: "/payroll" },
    { text: "Reports", icon: <BarChartIcon />, path: "/reports" },
  ],
};

export default function Layout({ children }) {
  // TODO: Replace with real user/role from context or JWT
  const [role] = useState(localStorage.getItem("role") || "employee");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" color="primary" fontWeight={700} sx={{ flexGrow: 1 }}>
          Dayflow
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {navConfig[role].map((item) => (
          <ListItem button key={item.text} onClick={() => navigate(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem button onClick={handleLogout} sx={{ mt: 2 }}>
          <ListItemIcon><LogoutIcon color="error" /></ListItemIcon>
          <ListItemText primary="Logout" primaryTypographyProps={{ color: 'error' }} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: 1201, bgcolor: "#fff", color: "primary.main", boxShadow: 1 }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={() => setMobileOpen(!mobileOpen)} sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" fontWeight={700} sx={{ flexGrow: 1 }}>
            Dayflow HRMS
          </Typography>
          <Avatar sx={{ bgcolor: "primary.main" }}>U</Avatar>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: "block", sm: "none" }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{ display: { xs: "none", sm: "block" }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: "background.default", minHeight: "100vh" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
