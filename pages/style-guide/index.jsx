import React from 'react';
import Head from 'next/head';

// Sections
import Nav from '../../src/sections/Nav';
import Footer from '../../src/sections/Footer';

// Components
import Page from '../../src/components/Page';

function StyleGuidePage() {
  return (
    <Page>
      <Head>
        <title>StyleGuide | Patrick Sullivan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <h1>StyleGuide Content Here</h1>
      </main>

      <Footer />
    </Page>
  );
}

export default StyleGuidePage;
