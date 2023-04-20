import { CssVarsThemeOptions } from '@mui/material';
import { grey } from './colors';
import { PRIMARY_FONT } from './fonts';

export const themeOptions: CssVarsThemeOptions = {
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: grey[98],
          paper: grey[100],
        },
        primary: {},
        secondary: {},
        error: {},
        warning: {},
        info: {},
        success: {},
        text: {},
        tonalOffset: 0.2,
        contrastThreshold: 4.5,
      },
    },
    dark: {
      palette: {
        background: {
          default: grey[98],
          paper: grey[100],
        },
        primary: {},
        secondary: {},
        error: {},
        warning: {},
        info: {},
        success: {},
        text: {},
        tonalOffset: 0.2,
        contrastThreshold: 4.5,
      },
    },
  },
  typography: {
    fontFamily: PRIMARY_FONT,
    fontSize: 16,
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: undefined,
    subtitle1: {},
    subtitle2: {},
    body1: {},
    body2: {},
    button: {},
    caption: {},
    overline: {},
  },
};
