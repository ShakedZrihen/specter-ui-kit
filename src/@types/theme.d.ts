// in order to extend the Theme interface and add the colorPalette property
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    colorPalette: {
      link: {
        color: string;
      };
      header: {
        text: string;
      };
      divider: {
        color: string;
      };
      text: {
        secondary: string;
        primary: string;
      };
      common: {
        white: string;
        highlight: string;
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
