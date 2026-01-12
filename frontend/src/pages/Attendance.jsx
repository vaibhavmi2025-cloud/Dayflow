import { useState } from "react";
import { Box, Card, CardContent, Typography, Grid, Button, Chip, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventBusyIcon from "@mui/icons-material/EventBusy";

// Dummy data for demo
const attendanceData = [
  { date: "2026-01-10", status: "Present" },
  { date: "2026-01-09", status: "Absent" },
  { date: "2026-01-08", status: "Half-day" },
  { date: "2026-01-07", status: "Leave" },
  { date: "2026-01-06", status: "Present" },
];

const statusColor = {
  Present: "success",
  Absent: "error",
  "Half-day": "warning",
  Leave: "info"
};
const statusIcon = {
  Present: <CheckCircleIcon color="success" fontSize="small" />,
  Absent: <CancelIcon color="error" fontSize="small" />,
  "Half-day": <AccessTimeIcon color="warning" fontSize="small" />,
  Leave: <EventBusyIcon color="info" fontSize="small" />
};

export default function Attendance() {
  const [checkedIn, setCheckedIn] = useState(false);

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="primary" mb={2}>
                Today's Attendance
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  color={checkedIn ? "success" : "primary"}
                  onClick={() => setCheckedIn(!checkedIn)}
                  sx={{ fontWeight: 600 }}
                >
                  {checkedIn ? "Check Out" : "Check In"}
                </Button>
                {checkedIn && <Chip label="Checked In" color="success" />}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="primary" mb={2}>
                Attendance History
              </Typography>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {attendanceData.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>
                          <Chip
                            icon={statusIcon[row.status]}
                            label={row.status}
                            color={statusColor[row.status]}
                            size="small"
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
