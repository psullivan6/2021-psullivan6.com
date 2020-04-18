import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Sections
import Nav from '../../src/sections/Nav';

// Components
import Page from '../../src/components/Page';

function ProjectsPage() {
  return (
    <Page>
      <Head>
        <title>Projects | Patrick Sullivan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <h1>Projects Content Here</h1>

        <ul>
          <li>
            <Link href="/projects/420">
              <a>Project 420</a>
            </Link>
          </li>
        </ul>
      </main>
    </Page>
  );
}

export default ProjectsPage;
