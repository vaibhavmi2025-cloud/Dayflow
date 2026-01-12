import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Blue/Indigo accent
    },
    background: {
      default: '#f5f7fa', // Light grey background
      paper: '#fff',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 16px 0 rgba(60,72,100,0.08)',
        },
      },
    },
  },
});

export default theme;
