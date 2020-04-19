import React from 'react';
import { ThemeProvider } from 'styled-components';

// Sections
import Nav from '../src/components/Nav';
import Footer from '../src/sections/Footer';

// Context
import {
  ColorSchemeProvider,
  useColorScheme,
} from '../src/context/color-scheme';

// Styles
import GlobalStyles from '../src/styles/global';
import { getTheme } from '../src/styles/theme';

function App({ Component, pageProps }) {
  const { colorScheme } = useColorScheme();

  return (
    <>
      <ThemeProvider theme={getTheme(colorScheme)}>
        <GlobalStyles />
        <Nav />

        <main>
          <Component {...pageProps} />
        </main>

        <Footer />
      </ThemeProvider>
    </>
  );
}

function WrappedApp(props) {
  return (
    <ColorSchemeProvider>
      <App {...props} />
    </ColorSchemeProvider>
  );
}

export default WrappedApp;
