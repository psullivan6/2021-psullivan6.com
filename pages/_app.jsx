import React from 'react';
import { ThemeProvider } from 'styled-components';

// Sections
import Nav from '../src/components/Nav';
import Footer from '../src/sections/Footer';

// Styles
import GlobalStyles from '../src/styles/global';
import theme from '../src/styles/theme';

function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
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

export default App;
