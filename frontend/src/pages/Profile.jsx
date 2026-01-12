import { Box, Card, CardContent, Typography, Avatar, Grid, Button, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export default function Profile() {
  // TODO: Replace with real user data and edit logic
  const user = {
    name: "John Doe",
    email: "john@company.com",
    phone: "9876543210",
    address: "123 Main St, City",
    designation: "Software Engineer",
    department: "IT",
    joiningDate: "2022-01-01",
    salary: "₹60,000/mo"
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f4f8fb", py: 4 }}>
      <Card sx={{ maxWidth: 520, mx: "auto", mb: 3, borderRadius: 4, boxShadow: 6, p: 2, bgcolor: "#fff" }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={3} mb={3}>
            <Avatar sx={{ bgcolor: "primary.main", width: 80, height: 80, boxShadow: 2 }}>
              <PersonIcon fontSize="large" />
            </Avatar>
            <Box>
              <Typography variant="h5" fontWeight={700} color="primary.main">{user.name}</Typography>
              <Typography color="text.secondary" fontSize={16}>{user.email}</Typography>
            </Box>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Phone" value={user.phone} fullWidth margin="dense" InputProps={{ readOnly: true }} sx={{ bgcolor: "#f8fbff", borderRadius: 2 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Address" value={user.address} fullWidth margin="dense" InputProps={{ readOnly: true }} sx={{ bgcolor: "#f8fbff", borderRadius: 2 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Designation" value={user.designation} fullWidth margin="dense" InputProps={{ readOnly: true }} sx={{ bgcolor: "#f8fbff", borderRadius: 2 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Department" value={user.department} fullWidth margin="dense" InputProps={{ readOnly: true }} sx={{ bgcolor: "#f8fbff", borderRadius: 2 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Joining Date" value={user.joiningDate} fullWidth margin="dense" InputProps={{ readOnly: true }} sx={{ bgcolor: "#f8fbff", borderRadius: 2 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Salary" value={user.salary} fullWidth margin="dense" InputProps={{ readOnly: true }} sx={{ bgcolor: "#f8fbff", borderRadius: 2 }} />
            </Grid>
          </Grid>
          <Box mt={3} textAlign="right">
            <Button variant="contained" color="primary" sx={{ borderRadius: 2, fontWeight: 600, px: 4, py: 1, boxShadow: 2 }}>Edit</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

