import React from 'react';
import Link from 'next/link';

// Services
import { get, getProjectImages } from '../../src/services/projects';

// Components
import Box from '../../src/components/Box';
import Image from '../../src/components/Image';
import Page from '../../src/components/Page';
import ProjectGallery from '../../src/components/ProjectGallery';
import Text from '../../src/components/Text';
import TextLink from '../../src/components/TextLink';

function Links({ links, ...props }) {
  if (!links) {
    return null;
  }
  return (
    <Box {...props}>
      <Text variant="eyebrow" fontWeight={900} mb={5}>
        Links
      </Text>
      <ul>
        {links.map((linkArray) => (
          <Box as="li" mb={3}>
            <TextLink href={linkArray[1]} target="_blank">
              {linkArray[0]}
            </TextLink>
          </Box>
        ))}
      </ul>
    </Box>
  );
}

function TechStack({ tech, ...props }) {
  if (!tech) {
    return null;
  }

  return (
    <Box mr={6} {...props}>
      <Text variant="eyebrow" fontWeight={900} mb={5}>
        Tech Stack
      </Text>
      <ul>
        {tech.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </Box>
  );
}

function ProjectPage({
  agency,
  client,
  description,
  images,
  links,
  tech,
  title,
}) {
  return (
    <Page title={title}>
      <Box my={5} mb={7}>
        <Link href="/projects" passHref>
          <TextLink>&larr; Back to All</TextLink>
        </Link>
      </Box>

      <Box as="article" mb={7}>
        <Box as="header" mb={7}>
          <Text as="h2" variant="eyebrow" mb={1} color="textAccent">
            {client}
            {agency ? ` | ${agency}` : ''}
          </Text>
          <Text as="h1">{title}</Text>
          <Text>{description}</Text>
        </Box>

        <Box display="flex" alignItems="flex-start" mb={7}>
          <TechStack tech={tech} width={{ zero: '50%', s: '25%' }} />
          <Links links={links} width={{ zero: '50%', s: '25%' }} />
        </Box>

        <ProjectGallery>
          {images.map((image) => (
            <Image withFigure={true} {...image} />
          ))}
        </ProjectGallery>
      </Box>
    </Page>
  );
}

export async function getStaticPaths() {
  const projects = await get();

  return {
    paths: projects.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = (await get()).find((project) => project.slug === params.slug);
  const images = await getProjectImages(project.slug);

  return {
    props: {
      ...project,
      images,
    },
  };
}

export default ProjectPage;
