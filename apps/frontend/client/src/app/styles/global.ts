import { createGlobalStyle } from 'styled-components';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

export const GlobalStyles = createGlobalStyle({
  body: {
    lineHeight: 1.5,
  },
  '#root': {
    display: 'flex',
    minHeight: '100vh',
  },
});
