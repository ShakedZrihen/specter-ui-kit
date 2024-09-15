import { createTheme } from '@mui/material';
import { typography } from './typography';

export const colorPalette = {
  header: {
    text: '#F2F2F2',
    background: '#1B1E2D',
  },
  link: {
    color: '#1877f2',
  },
  text: {
    secondary: '#6E747F',
    primary: '#050505',
  },
  checkbox: {
    border: '#116DFF',
  },
  filterChip: {
    background: '#F2F3F6',
  },
  divider: {
    color: '#CED0D4',
    blue: '#D2DEF2',
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
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          // This changes the border color (line color)
          color: colorPalette.checkbox.border,
          '&.Mui-checked': {
            color: colorPalette.checkbox.border, // Color when checked
          },
        },
      },
    },
  },
});
