// in order to extend the Theme interface and add the colorPalette property
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface ColorPalette {
    primary: any;
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
      spOrange_10: string;
      spOrange_50: string;
      spBlue: string;
      spLightGray_50: string;
      spLightGray_40: string;
      spBlue_20: string;
      spBlue_10: string;
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
