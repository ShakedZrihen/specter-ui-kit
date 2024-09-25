// in order to extend the Theme interface and add the colorPalette property
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface ColorPalette {
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
      // deprecated white color
      white: string;
      highlight: string;
      icon: string;
    };
    colors: {
      primary: string;
      secondary: string;
      spGray_10: string;
      spWhite: string;
      spBlack: string;
      spOrange10: string;
      spOrange50: string;
      spBlue: string;
    };
    filters: {
      headers: {
        color: string;
      };
    };
    button: {
      searchType: {
        stroke: string;
        selected: {
          fill: string;
        };
      };
    };
  }

  interface Theme {
    colorPalette: ColorPalette;
  }

  interface ThemeOptions {
    colorPalette?: ColorPalette;
  }
}
