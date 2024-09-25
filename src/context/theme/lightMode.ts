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
    icon: '#2860A8',
  },
  colors: {
    primary: '#474E72',
    secondary: '#1B1E2D',
    spGray_10: '#BDC1D3',
    spWhite: '#FFFFFF',
    spBlack: '#000000',
    spLightGray_50: '#D3D3D3',
    spLightGray_40: '#ECEBEB',
    spOrange10: '#FFEADB',
    spOrange50: '#FA9349',
    spBlue: '#1877F2',
  },
  filters: {
    headers: {
      color: '#E9EFF9',
    },
  },
  button: {
    searchType: {
      stroke: '#3C4158',
      selected: {
        fill: '#3C4158',
      },
    },
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
          color: colorPalette.checkbox.border,
          '&.Mui-checked': {
            color: colorPalette.checkbox.border,
          },
        },
      },
    },
  },
});
