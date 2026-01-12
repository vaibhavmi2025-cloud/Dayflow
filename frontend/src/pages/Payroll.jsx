import { Box, Card, CardContent, Typography, Grid, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Chip } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";

// Dummy data for demo
const salaryData = [
  { month: "Jan 2026", basic: 40000, hra: 12000, bonus: 3000, total: 55000, status: "Paid" },
  { month: "Dec 2025", basic: 40000, hra: 12000, bonus: 2000, total: 54000, status: "Paid" },
  { month: "Nov 2025", basic: 40000, hra: 12000, bonus: 0, total: 52000, status: "Paid" },
];

const statusColor = {
  Paid: "success",
  Pending: "warning"
};

export default function Payroll() {
  // TODO: Replace with real data from API, add admin view
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="primary" mb={2}>
                Salary Structure
              </Typography>
              <Typography>Basic: ₹40,000</Typography>
              <Typography>HRA: ₹12,000</Typography>
              <Typography>Bonus: Variable</Typography>
              <Typography fontWeight={600} mt={1}>Total: ₹52,000+</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="primary" mb={2}>
                Monthly Salary Breakdown
              </Typography>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Month</TableCell>
                      <TableCell>Basic</TableCell>
                      <TableCell>HRA</TableCell>
                      <TableCell>Bonus</TableCell>
                      <TableCell>Total</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {salaryData.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell>{row.month}</TableCell>
                        <TableCell>₹{row.basic}</TableCell>
                        <TableCell>₹{row.hra}</TableCell>
                        <TableCell>₹{row.bonus}</TableCell>
                        <TableCell>₹{row.total}</TableCell>
                        <TableCell>
                          <Chip icon={<PaidIcon />} label={row.status} color={statusColor[row.status]} size="small" />
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
