import React from 'react';
import Link from 'next/link';

// Components
import Page from '../../src/components/Page';

function ProjectsPage() {
  return (
    <Page title="Projects">
      <h1>Projects Content Here</h1>

      <ul>
        <li>
          <Link href="/projects/420">
            <a>Project 420</a>
          </Link>
        </li>
      </ul>
    </Page>
  );
}

export default ProjectsPage;
