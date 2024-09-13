import { createTheme } from '@mui/material';
import { typography } from './typography';

export const lightMode = createTheme({
  palette: {
    mode: 'light',
  },
  typography,
});
