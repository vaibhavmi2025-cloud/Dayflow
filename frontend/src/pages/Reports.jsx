import { useEffect, useState } from "react";
import API from "../services/api";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import EmptyState from "../components/EmptyState";

export default function Reports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    API.get("/reports")
      .then(res => setReports(res.data))
      .catch(() => setError("Failed to load reports"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!reports.length) return <EmptyState message="No reports found." />;

  return (
    <Box>
      <Typography variant="h5" mb={2}>Reports & Analytics</Typography>
      <Grid container spacing={2}>
        {reports.map(r => (
          <Grid item xs={12} md={4} key={r._id}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1">{r.type.toUpperCase()}</Typography>
                <Typography variant="body2" color="text.secondary">Generated: {new Date(r.createdAt).toLocaleString()}</Typography>
                <pre style={{ fontSize: 12 }}>{JSON.stringify(r.data, null, 2)}</pre>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
