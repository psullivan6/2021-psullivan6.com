import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

// Sections
import Nav from '../../src/sections/Nav';

// Components
import Page from '../../src/components/Page';

function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Page>
      <Head>
        <title>Project | Patrick Sullivan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <h1>Project Content Here for id: {id}</h1>
      </main>
    </Page>
  );
}

export default ProjectPage;
