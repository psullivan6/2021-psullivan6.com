import React from 'react';
// import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

// Components
import Page from '../../src/components/Page';

function ProjectsPage({ projects }) {
  return (
    <Page title="Projects">
      <h1>Projects Content Here</h1>

      <ul>
        {projects.map(({ slug, ...project }) => (
          <li>
            <Link href={`/projects/${slug}`}>
              <a>{slug}</a>
            </Link>
            <pre>{JSON.stringify(project, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </Page>
  );
}

export async function getStaticProps() {
  const jsonPath = path.join(process.cwd(), 'src/data/projects.json');
  const projects = JSON.parse(fs.readFileSync(jsonPath));

  return {
    props: {
      projects,
    },
  };
}

export default ProjectsPage;
