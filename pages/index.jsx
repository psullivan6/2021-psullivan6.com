import React from 'react';
import Link from 'next/link';

// Components
import Page from '../src/components/Page';

export default function Home() {
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
