import React from 'react';
import Link from 'next/link';

// Context
import { useColorScheme } from '../../context/color-scheme';

// Components
import ContentContainer from '../ContentContainer';
import ThemeToggle from '../ThemeToggle';

// Styles
import { NavContainer } from './styles';

function Nav() {
  const { colorScheme, setColorScheme } = useColorScheme();

  function handleSchemeChange(newColorScheme) {
    setColorScheme(newColorScheme);
  }

  return (
    <NavContainer>
      <ContentContainer>
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
        <ThemeToggle
          onChange={handleSchemeChange}
          colorScheme={colorScheme}
          position="fixed"
          top={4}
          right={4}
        />
      </ContentContainer>
    </NavContainer>
  );
}

export default Nav;
