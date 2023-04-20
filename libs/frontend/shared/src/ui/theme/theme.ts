import { createTheme, PaletteMode } from '@mui/material';
import { themeOptions } from './themeOptions';

// export const createThemeByMode = (mode: PaletteMode = 'light') => {
//   const themeOptionsResult = themeOptions.colorSchemes?.[mode];
//   return createTheme({
//     ...themeOptionsResult,
//   });
// };

export const getDesignTokens = (mode: PaletteMode = 'light') => {
  const colorScheme = themeOptions.colorSchemes?.[mode];
  const palette = colorScheme?.palette;
  return {
    mode,
    ...palette,
  };
};
