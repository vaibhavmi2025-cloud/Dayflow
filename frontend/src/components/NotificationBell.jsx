import { useEffect, useState } from "react";
import API from "../services/api";
import { IconButton, Badge, Menu, MenuItem, ListItemText } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function NotificationBell() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    API.get("/notifications").then(res => {
      setNotifications(res.data);
      setUnread(res.data.filter(n => !n.read).length);
    });
  }, []);

  const handleOpen = e => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton color="inherit" onClick={handleOpen}>
        <Badge badgeContent={unread} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
        {notifications.length === 0 ? (
          <MenuItem disabled>No notifications</MenuItem>
        ) : (
          notifications.map(n => (
            <MenuItem key={n._id} selected={!n.read}>
              <ListItemText primary={n.message} />
            </MenuItem>
          ))
        )}
      </Menu>
    </>
  );
}
