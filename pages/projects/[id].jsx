import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Components
import Page from '../../src/components/Page';

function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    // [TODO] Make the title dynamic
    <Page title="Project">
      <header>
        <Link href="/projects">
          <a>Back to All</a>
        </Link>
      </header>
      <h1>Project Content Here for id: {id}</h1>
    </Page>
  );
}

export default ProjectPage;
