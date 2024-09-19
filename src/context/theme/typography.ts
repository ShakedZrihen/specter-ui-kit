import { TypographyOptions } from '@mui/material/styles/createTypography';

/**
 * Custom typography styles
 */
export const typography: TypographyOptions = {
  fontFamily: ['"Assistant"', 'sans-serif'].join(','),
  body1: {
    fontSize: '1.0769rem', // 14px
    direction: 'rtl',
  },
  h6: {
    fontSize: '1.4rem',
    direction: 'rtl',
  },
};
