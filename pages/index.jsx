import React from 'react';
import Link from 'next/link';

// Components
import Page from '../src/components/Page';

export default function Home() {
  return (
    <Page>
      <section>
        <h1>Patrick Sullivan</h1>
        <p>
          Brief about me description. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. A reprehenderit nobis maxime aspernatur quas totam
          quae.
        </p>
        <Link href="/about">
          <a>More About Me</a>
        </Link>
      </section>

      <section>
        <h1>Projects</h1>
        <ul>
          <li>
            <Link href="/projects/123">
              <a>Featured Project 1</a>
            </Link>
          </li>
          <li>Featured Project 2</li>
          <li>Featured Project 3</li>
          <li>Featured Project 4</li>
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
