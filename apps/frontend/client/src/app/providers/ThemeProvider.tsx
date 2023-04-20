import React, { Fragment } from 'react';
import {
  CssBaseline,
  PaletteMode,
  ThemeProvider as ThemeProviderMUI,
} from '@mui/material';

type ThemeProviderProps = React.PropsWithChildren & {
  theme?: PaletteMode;
};

export function ThemeProvider({
  theme = 'light',
  children,
}: ThemeProviderProps) {
  return (
    <Fragment>
      <CssBaseline enableColorScheme />
      <ThemeProviderMUI theme={theme}>{children}</ThemeProviderMUI>;
    </Fragment>
  );
}
