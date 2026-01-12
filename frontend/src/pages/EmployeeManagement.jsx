import { useEffect, useState } from "react";
import API from "../services/api";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import EmptyState from "../components/EmptyState";
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";


import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ employeeId: "", name: "", email: "", password: "" });
  const [editId, setEditId] = useState(null);
  const [touched, setTouched] = useState({});

  const validate = () => {
    if (!form.employeeId) return "Employee ID is required";
    if (!form.name) return "Name is required";
    if (!form.email) return "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Invalid email";
    if (!editId && !form.password) return "Password is required";
    if (form.password && form.password.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const fetchEmployees = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await API.get("/employees");
      setEmployees(res.data);
    } catch {
      setError("Failed to load employees");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => { await fetchEmployees(); })();
  }, []);

  const handleOpen = (emp = null) => {
    setEditId(emp?._id || null);
    setForm(emp ? { ...emp, password: "" } : { employeeId: "", name: "", email: "", password: "" });
    setTouched({});
    setOpen(true);
    setError("");
    setSuccess("");
  };
  const handleClose = () => setOpen(false);

  const handleSave = async () => {
    setError("");
    setSuccess("");
    const errMsg = validate();
    if (errMsg) {
      setError(errMsg);
      return;
    }
    try {
      if (editId) {
        await API.put(`/employees/${editId}`, form);
        setSuccess("Employee updated successfully");
      } else {
        await API.post("/employees", form);
        setSuccess("Employee added successfully");
      }
      handleClose();
      fetchEmployees();
    } catch {
      setError("Failed to save employee");
    }
  };

  const handleDelete = async id => {
    if (!window.confirm("Delete this employee?")) return;
    try {
      await API.delete(`/employees/${id}`);
      setSuccess("Employee deleted");
      fetchEmployees();
    } catch {
      setError("Failed to delete employee");
    }
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!employees.length) return <EmptyState message="No employees found." />;

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f4f8fb", py: 4 }}>
      <Card sx={{ maxWidth: 950, mx: "auto", p: 3, borderRadius: 4, boxShadow: 6, bgcolor: "#fff" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5" fontWeight={700} color="primary.main">Employee Management</Typography>
          <Button variant="contained" onClick={() => handleOpen()} sx={{ borderRadius: 2, fontWeight: 600, px: 3, py: 1, boxShadow: 2 }}>Add Employee</Button>
        </Box>
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
        <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: 2 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#f8fbff" }}>
                <TableCell><PersonIcon sx={{ verticalAlign: "middle", mr: 1 }} />Employee ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map(emp => (
                <TableRow key={emp._id} hover>
                  <TableCell>{emp.employeeId}</TableCell>
                  <TableCell>{emp.name}</TableCell>
                  <TableCell>{emp.email}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="Edit">
                      <IconButton color="primary" onClick={() => handleOpen(emp)} aria-label="Edit employee">
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton color="error" onClick={() => handleDelete(emp._id)} aria-label="Delete employee">
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 700 }}>{editId ? "Edit Employee" : "Add Employee"}</DialogTitle>
        <DialogContent sx={{ pb: 1 }}>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <TextField label="Employee ID" value={form.employeeId} onChange={e => setForm(f => ({ ...f, employeeId: e.target.value }))} onBlur={() => setTouched(t => ({ ...t, employeeId: true }))} error={touched.employeeId && !form.employeeId} helperText={touched.employeeId && !form.employeeId ? "Required" : ""} fullWidth margin="dense" inputProps={{ maxLength: 20, "aria-label": "Employee ID" }} autoFocus />
          <TextField label="Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} onBlur={() => setTouched(t => ({ ...t, name: true }))} error={touched.name && !form.name} helperText={touched.name && !form.name ? "Required" : ""} fullWidth margin="dense" inputProps={{ maxLength: 40, "aria-label": "Name" }} />
          <TextField label="Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} onBlur={() => setTouched(t => ({ ...t, email: true }))} error={touched.email && (!form.email || !/^\S+@\S+\.\S+$/.test(form.email))} helperText={touched.email && !form.email ? "Required" : touched.email && !/^\S+@\S+\.\S+$/.test(form.email) ? "Invalid email" : ""} fullWidth margin="dense" inputProps={{ "aria-label": "Email address" }} />
          <TextField label="Password" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} onBlur={() => setTouched(t => ({ ...t, password: true }))} error={touched.password && !editId && !form.password} helperText={editId ? "Leave blank to keep unchanged" : touched.password && !form.password ? "Required" : touched.password && form.password && form.password.length < 6 ? "Min 6 chars" : ""} fullWidth margin="dense" type="password" inputProps={{ "aria-label": "Password" }} />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={handleClose} sx={{ borderRadius: 2 }}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" sx={{ borderRadius: 2, fontWeight: 600 }}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
