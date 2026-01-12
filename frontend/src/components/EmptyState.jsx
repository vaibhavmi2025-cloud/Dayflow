import { Box, Typography } from "@mui/material";

export default function EmptyState({ message = "No data found." }) {
  return (
    <Box textAlign="center" py={4} color="text.secondary">
      <Typography>{message}</Typography>
    </Box>
  );
}
