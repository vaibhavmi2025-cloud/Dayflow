import { useState } from "react";
import { Box, Card, CardContent, Typography, Grid, Button, TextField, MenuItem, Chip, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Stack } from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const leaveTypes = [
  { value: "Paid", label: "Paid Leave" },
  { value: "Sick", label: "Sick Leave" },
  { value: "Unpaid", label: "Unpaid Leave" },
];

// Dummy data for demo
const leaveHistory = [
  { type: "Paid", from: "2026-01-05", to: "2026-01-07", status: "Pending" },
  { type: "Sick", from: "2025-12-20", to: "2025-12-21", status: "Approved" },
  { type: "Unpaid", from: "2025-11-10", to: "2025-11-12", status: "Rejected" },
];

const statusColor = {
  Pending: "warning",
  Approved: "success",
  Rejected: "error"
};
const statusIcon = {
  Pending: <AssignmentIndIcon color="warning" fontSize="small" />,
  Approved: <CheckCircleIcon color="success" fontSize="small" />,
  Rejected: <CancelIcon color="error" fontSize="small" />
};

export default function Leave() {
  const [form, setForm] = useState({
    type: "Paid",
    from: "",
    to: "",
    remarks: ""
  });
  const [success, setSuccess] = useState("");

  const handleApply = () => {
    setSuccess("Leave application submitted!");
    setTimeout(() => setSuccess(""), 1500);
    // TODO: API call to backend
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="primary" mb={2}>
                Apply for Leave
              </Typography>
              <Stack spacing={2}>
                <TextField
                  select
                  label="Leave Type"
                  value={form.type}
                  onChange={e => setForm({ ...form, type: e.target.value })}
                  fullWidth
                >
                  {leaveTypes.map(option => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="From"
                  type="date"
                  value={form.from}
                  onChange={e => setForm({ ...form, from: e.target.value })}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
                <TextField
                  label="To"
                  type="date"
                  value={form.to}
                  onChange={e => setForm({ ...form, to: e.target.value })}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
                <TextField
                  label="Remarks"
                  value={form.remarks}
                  onChange={e => setForm({ ...form, remarks: e.target.value })}
                  fullWidth
                  multiline
                  minRows={2}
                />
                <Button variant="contained" color="primary" onClick={handleApply} sx={{ fontWeight: 600 }}>
                  Submit
                </Button>
                {success && <Chip label={success} color="success" />}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={7}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="primary" mb={2}>
                Leave Status
              </Typography>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Type</TableCell>
                      <TableCell>From</TableCell>
                      <TableCell>To</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {leaveHistory.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell>{row.type}</TableCell>
                        <TableCell>{row.from}</TableCell>
                        <TableCell>{row.to}</TableCell>
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
