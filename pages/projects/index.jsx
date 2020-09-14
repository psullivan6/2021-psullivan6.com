import React from 'react';
import Link from 'next/link';

// Services
import { get } from '../../src/services/projects';

// Components
import Box from '../../src/components/Box';
import Page from '../../src/components/Page';
import Text from '../../src/components/Text';
import ProjectListItem from '../../src/components/ProjectListItem';
import { Headline } from '../../src/components/ProjectListItem/styles';

function ProjectsPage({ projects }) {
  return (
    <Page title="Projects" mt={6}>
      <Box display="flex">
        <Headline as="h1" variant="h2" width="33.333333%" mt={0}>
          Projects
        </Headline>

        <Box as="ul" width="66.666666%" mt={0}>
          {projects.map((projectProps) => (
            <ProjectListItem {...projectProps} />
          ))}
        </Box>
      </Box>
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
