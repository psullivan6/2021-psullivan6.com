import React from 'react';
import Head from 'next/head';

// Sections
import Nav from '../../src/sections/Nav';

// Components
import Page from '../../src/components/Page';

function AboutPage() {
  return (
    <Page>
      <Head>
        <title>About | Patrick Sullivan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <h1>About Content Here</h1>
      </main>
    </Page>
  );
}

export default AboutPage;
