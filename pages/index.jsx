import React from 'react';
import Link from 'next/link';

// Services
import { get } from '../src/services/projects';

// Components
import Box from '../src/components/Box';
import Grid from '../src/components/Grid';
import GridItem from '../src/components/GridItem';
import Page from '../src/components/Page';
import Project from '../src/components/Project';
import Text from '../src/components/Text';
import TextLink from '../src/components/TextLink';

const gridItemProps = [
  {
    gridArea: '1 / 1 / 2 / 2',
    image: 'https://via.placeholder.com/300x400',
  },
  {
    gridArea: '1 / 2 / 2 / 4',
    image: 'https://via.placeholder.com/300x168',
  },
  {
    gridArea: '2 / 1 / 4 / 3',
    image: 'https://via.placeholder.com/300',
  },
  {
    gridArea: '2 / 3 / 3 / 4',
    image: 'https://via.placeholder.com/300x400',
  },
];

function HomePage({ projects }) {
  return (
    <Page>
      <Box as="section" py={8}>
        <Text
          as="h1"
          variant="h3"
          fontFamily="Work Sans, sans-serif"
          fontWeight={400}
          letterSpacing="-0.05em"
          maxWidth="20em"
        >
          <Text as="span" display="block" fontWeight={600} marginBottom={2}>
            Hey I&rsquo;m Patrick,
          </Text>
          <Text as="span" variant="h4">
            I&rsquo;m a Tech Lead in Charlotte, NC and I build awesome websites
            and lead talented Developers.
          </Text>
        </Text>
        <Link href="/about" passHref>
          <TextLink>More About Me</TextLink>
        </Link>
      </Box>

      <Box as="section" pb={8}>
        <Text as="h1" variant="h2">
          Projects
        </Text>
        <Grid>
          {projects.map(({ slug, title }, index) => (
            <GridItem key={slug} {...gridItemProps[index]}>
              <Link href={`/projects/${slug}`} passHref>
                <Box as="a" display="block">
                  <Project
                    src={gridItemProps[index].image}
                    alt="Jack in the Box Buttery Jack Burger"
                    title="Nick Animation Studio"
                    eyebrow="AOR Website"
                    color="#01b1f0"
                    align="end"
                  />
                </Box>
              </Link>
            </GridItem>
          ))}

          <li>
            <Link href="/projects" passHref>
              <TextLink>See the Rest</TextLink>
            </Link>
          </li>
        </Grid>
      </Box>
    </Page>
  );
}

export async function getStaticProps() {
  const projects = (await get()).filter((project) => project.featured);

  return {
    props: {
      projects,
    },
  };
}

export default HomePage;
