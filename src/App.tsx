import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyles from './styles/global';
import Dashboard from './pages/Dashboard';
import AppProvider from './context';

const App = () => (
  <ThemeProvider theme={theme}>
    <AppProvider>
      <Dashboard />
      <GlobalStyles />
    </AppProvider>
  </ThemeProvider>
);

export default App;
