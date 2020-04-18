import React from 'react';

// Sections
import Nav from '../src/sections/Nav';
import Footer from '../src/sections/Footer';

function App({ Component, pageProps }) {
  return (
    <>
      <Nav />

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}

export default App;
