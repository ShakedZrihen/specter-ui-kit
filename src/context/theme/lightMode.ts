import { createTheme } from '@mui/material';
import { typography } from './typography';

export const colorPalette = {
  header: {
    text: '#F2F2F2',
    background: '#1B1E2D',
  },
  common: {
    white: '#FFFFFF',
  },
};

export const lightMode = createTheme({
  palette: {
    mode: 'light',
  },
  typography,
  colorPalette,
});
