import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Services
import { get } from '../../src/services/projects';

// Components
import Page from '../../src/components/Page';

function ProjectPage({ project }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    // [TODO] Make the title dynamic
    <Page title="Project">
      <header>
        <Link href="/projects">
          <a>Back to All</a>
        </Link>
      </header>
      <h1>Project Content Here for id: {slug}</h1>
      <pre>{JSON.stringify(project, null, 2)}</pre>
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

  return {
    props: {
      project,
    },
  };
}

export default ProjectPage;
