import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@store';
import ThemeMuiProvider from '@styles/theme.mui';
import GlobalStyle from '@styles/global';
import useTheme from '@styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { theme } = useTheme('DARK');
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeMuiProvider>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <GlobalStyle />
          </ThemeProvider>
        </ThemeMuiProvider>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
