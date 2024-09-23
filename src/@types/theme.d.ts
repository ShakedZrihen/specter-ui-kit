// in order to extend the Theme interface and add the colorPalette property
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    colorPalette: {
      link: {
        color: string;
      };
      filterChip: { background: string };
      header: {
        text: string;
        background: string;
      };
      divider: {
        color: string;
        blue: string;
      };
      text: {
        secondary: string;
        primary: string;
      };
      common: {
        white: string;
        highlight: string;
        icon: string;
      };
      colors: {
        primary: string;
        secondary: string;
      };
      filters: {
        headers: {
          color: string;
        };
      };
    };
  }
  interface ThemeOptions {
    colorPalette?: {
      header?: {
        text?: string;
      };
      common?: {
        white?: string;
      };
    };
  }
}
