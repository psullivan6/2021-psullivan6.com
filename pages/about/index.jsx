import React from 'react';

// Utilities
import slugify from '../../src/utilities/slugify';

// Services
// import { get as getProjects } from '../../src/services/projects';
import { get } from '../../src/services/tech';

// Components
import Chip from '../../src/components/Chip';
import ChipList from '../../src/components/ChipList';
import Page from '../../src/components/Page';
import Text from '../../src/components/Text';

function AboutPage({ colors, tech, types }) {
  return (
    <Page title="About">
      <Text as="h1" variant="h2">
        About
      </Text>

      <ul>
        {types.map((item) => {
          return (
            <Chip key={`type-${slugify(item)}`} color={colors[item]}>
              {item}
            </Chip>
          );
        })}
      </ul>

      <hr />

      <ChipList>
        {tech.map((item) => {
          return (
            <Chip key={`tech-${slugify(item.name)}`} color={colors[item.type]}>
              {item.name}
            </Chip>
          );
        })}
      </ChipList>
    </Page>
  );
}

export async function getStaticProps() {
  const { data, colors, types } = await get();

  return {
    props: {
      colors,
      tech: data,
      types,
    },
  };
}

export default AboutPage;
