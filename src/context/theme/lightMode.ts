import { createTheme } from '@mui/material';
import { typography } from './typography';

const colorPalette = {
  header: {
    text: '#F2F2F2',
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
