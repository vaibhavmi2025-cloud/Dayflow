import { Box, Card, CardContent, Typography, Grid, Chip } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PaidIcon from "@mui/icons-material/Paid";

export default function AdminDashboard() {
  // TODO: Replace with real data from API
  const stats = {
    totalEmployees: 42,
    pendingLeaves: 3,
    attendanceSummary: "95% Present",
    payrollOverview: "All salaries processed"
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Total Employees
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <PeopleIcon color="primary" />
                <Typography variant="h5">{stats.totalEmployees}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Pending Leave Requests
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <AssignmentIndIcon color="warning" />
                <Typography variant="h5">{stats.pendingLeaves}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Attendance Summary
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <EventAvailableIcon color="success" />
                <Typography variant="h6">{stats.attendanceSummary}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Payroll Overview
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <PaidIcon color="info" />
                <Typography variant="h6">{stats.payrollOverview}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
