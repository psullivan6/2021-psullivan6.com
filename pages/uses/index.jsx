import React from 'react';
import Head from 'next/head';

// Sections
import Nav from '../../src/sections/Nav';

// Components
import Page from '../../src/components/Page';

function UsesPage() {
  return (
    <Page>
      <Head>
        <title>Uses | Patrick Sullivan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <h1>Uses Content Here</h1>

        <section>
          <h1>Development</h1>
        </section>

        <section>
          <h1>Apps</h1>
        </section>

        <section>
          <h1>Physical</h1>
        </section>
      </main>
    </Page>
  );
}

export default UsesPage;
