import { Box, Card, CardContent, Typography, Grid, Avatar, Chip } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export default function EmployeeDashboard() {
  // TODO: Replace with real data from API
  const profile = { name: "John Doe", email: "john@company.com", role: "employee" };
  const attendance = { present: 20, absent: 2, leave: 1 };
  const leave = { pending: 1, approved: 3, rejected: 0 };
  const alerts = ["Your leave request is pending approval.", "Attendance marked for today."];

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56 }}>
                  <PersonIcon fontSize="large" />
                </Avatar>
                <Box>
                  <Typography variant="h6">{profile.name}</Typography>
                  <Typography color="text.secondary">{profile.email}</Typography>
                  <Chip label="Employee" color="primary" size="small" sx={{ mt: 1 }} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" color="primary" fontWeight={600} mb={1}>
                Attendance Overview
              </Typography>
              <Box display="flex" gap={2}>
                <Chip icon={<EventAvailableIcon />} label={`Present: ${attendance.present}`} color="success" />
                <Chip icon={<EventAvailableIcon />} label={`Absent: ${attendance.absent}`} color="error" />
                <Chip icon={<EventAvailableIcon />} label={`Leave: ${attendance.leave}`} color="info" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" color="primary" fontWeight={600} mb={1}>
                Leave Status
              </Typography>
              <Box display="flex" gap={2}>
                <Chip icon={<AssignmentIndIcon />} label={`Pending: ${leave.pending}`} color="warning" />
                <Chip icon={<AssignmentIndIcon />} label={`Approved: ${leave.approved}`} color="success" />
                <Chip icon={<AssignmentIndIcon />} label={`Rejected: ${leave.rejected}`} color="error" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" color="primary" fontWeight={600} mb={1}>
                Recent Activity / Alerts
              </Typography>
              {alerts.map((alert, i) => (
                <Box key={i} display="flex" alignItems="center" gap={1} mb={0.5}>
                  <NotificationsActiveIcon color="info" fontSize="small" />
                  <Typography variant="body2">{alert}</Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
