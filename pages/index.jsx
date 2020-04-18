import React from 'react';
import Link from 'next/link';

// Services
import { get } from '../src/services/projects';

// Components
import Page from '../src/components/Page';

function HomePage({ projects }) {
  return (
    <Page>
      <section>
        <h1>
          <span>Hey I&rsquo;m Patrick,</span>
          <br />
          <span>
            I&rsquo;m a Tech Lead in Charlotte, NC and I build awesome websites
            and lead talented Developers.
          </span>
        </h1>
        <Link href="/about">
          <a>More About Me</a>
        </Link>
      </section>

      <section>
        <h1>Projects</h1>
        <ul>
          {projects.map(({ slug, title }) => (
            <li>
              <Link href={`/projects/${slug}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}

          <li>
            <Link href="/projects">
              <a>See the Rest</a>
            </Link>
          </li>
        </ul>
      </section>
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
