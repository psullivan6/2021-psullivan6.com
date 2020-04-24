import React from 'react';

// Services
// import { get as getProjects } from '../../src/services/projects';
import { get } from '../../src/services/tech';

// Components
import Chip from '../../src/components/Chip';
import Page from '../../src/components/Page';

function AboutPage({ colors, tech }) {
  return (
    <Page title="About">
      <h1>About Content Here</h1>
      <ul>
        {tech.map((item) => {
          return <Chip color={colors[item.type]}>{item.name}</Chip>;
        })}
      </ul>
    </Page>
  );
}

export async function getStaticProps() {
  const { data, colors } = await get();

  return {
    props: {
      tech: data,
      colors,
    },
  };
}

export default AboutPage;
