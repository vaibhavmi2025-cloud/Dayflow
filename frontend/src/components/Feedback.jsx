import { Snackbar, Alert, CircularProgress, Box, Typography } from "@mui/material";
import { useState } from "react";

export function Notification({ open, message, severity = "info", onClose }) {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export function Loading() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="40vh">
      <CircularProgress color="primary" />
      <Typography mt={2} color="text.secondary">Loading...</Typography>
    </Box>
  );
}

export function Empty({ message = "No data found." }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="30vh">
      <Typography color="text.secondary">{message}</Typography>
    </Box>
  );
}
