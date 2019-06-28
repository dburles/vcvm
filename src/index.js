import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './components/App';
import GlobalStyle from './components/GlobalStyle';
import theme from './theme';

render(
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <App />
    </>
  </ThemeProvider>,
  document.getElementById('root'),
);
