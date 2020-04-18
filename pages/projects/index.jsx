import React from 'react';
import Link from 'next/link';

// Services
import { get } from '../../src/services/projects';

// Components
import Page from '../../src/components/Page';

function ProjectsPage({ projects }) {
  return (
    <Page title="Projects">
      <h1>Projects Content Here</h1>

      <ul>
        {projects.map(({ slug, title, ...project }) => (
          <li key={slug}>
            <Link href={`/projects/${slug}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  );
}

export async function getStaticProps() {
  const projects = await get();

  return {
    props: {
      projects,
    },
  };
}

export default ProjectsPage;
