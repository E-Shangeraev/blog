import { Fragment, useMemo, useState } from 'react';
import { createTheme, PaletteMode } from '@mui/material';
import { ui } from '@blog/frontend/shared';
import { GlobalStyles } from './styles';
import { ThemeProvider, RouterProvider } from './providers';

const { getDesignTokens } = ui;

export function App() {
  const [mode, setMode] = useState<PaletteMode>('light');
  const colorMode = useMemo(() => {
    setMode((prevMode: PaletteMode) =>
      prevMode === 'light' ? 'dark' : 'light'
    );
  }, []);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <Fragment>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <RouterProvider />
      </ThemeProvider>
    </Fragment>
  );
}
