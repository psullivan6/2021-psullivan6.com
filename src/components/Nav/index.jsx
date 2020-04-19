import React from 'react';
import Link from 'next/link';

// Styles
import { NavContainer } from './styles';

function Nav() {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>

        <li>
          <Link href="/about">
            <a>About Me</a>
          </Link>
        </li>

        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
      </ul>
    </NavContainer>
  );
}

export default Nav;
