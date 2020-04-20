import React from 'react';

// Services
import { get } from '../../src/services/projects';

// Components
import Page from '../../src/components/Page';

function AboutPage({ tech }) {
  return (
    <Page title="About">
      <h1>About Content Here</h1>
      <ul>
        {tech.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </Page>
  );
}

export async function getStaticProps() {
  const projects = await get();
  const tech = projects
    .map((project) => project['tech-stack'])
    .flat()
    .filter((item) => item !== '')
    .sort();

  return {
    props: {
      tech: [...new Set([...tech])],
    },
  };
}

export default AboutPage;
