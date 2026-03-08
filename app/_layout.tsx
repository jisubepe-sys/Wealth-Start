import React from 'react';
import { ThemeProvider } from 'styled-components';
import { trpc } from '../utils/trpc';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from '../theme';

const Layout = ({ children }) => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {trpc.Provider({
          queryClient: trpc.queryClient,
        })}
        {children}
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default Layout;
