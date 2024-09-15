import { createTheme } from '@mui/material';
import { typography } from './typography';

export const colorPalette = {
  header: {
    text: '#F2F2F2',
    background: '#1B1E2D',
  },
  divider: {
    color: '#CED0D4',
  },
  common: {
    white: '#FFFFFF',
    highlight: '#FFDF5F',
  },
};

export const lightMode = createTheme({
  palette: {
    mode: 'light',
  },
  typography,
  colorPalette,
});
