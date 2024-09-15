// in order to extend the Theme interface and add the colorPalette property
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    colorPalette: {
      header: {
        text: string;
      };
      common: {
        white: string;
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
