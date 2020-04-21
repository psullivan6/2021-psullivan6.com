import React, { useRef } from 'react';
import dynamic from 'next/dynamic';

// Context
import { useColorScheme } from '../../context/color-scheme';

// Components
import ContentContainer from '../ContentContainer';
import Logo from '../Logo';
import ActiveLink from '../ActiveLink';
import ThemeToggle from '../ThemeToggle';

// Styles
import { NavContainer, NavList, NavListItem, StyledNavLink } from './styles';

const DynamicCurveBox = dynamic(() => import('./components/CurveBox'), {
  loading: () => null,
  ssr: false,
});

function Nav() {
  const root = useRef();
  const { colorScheme, setColorScheme } = useColorScheme();

  function handleSchemeChange(newColorScheme) {
    setColorScheme(newColorScheme);
  }

  return (
    <>
      <NavContainer ref={root}>
        <ContentContainer>
          <NavList>
            <NavListItem>
              <ActiveLink href="/about" passHref>
                <StyledNavLink>About Me</StyledNavLink>
              </ActiveLink>
            </NavListItem>

            <NavListItem primary>
              <ActiveLink href="/" passHref>
                <StyledNavLink>
                  <Logo mx={6} />
                </StyledNavLink>
              </ActiveLink>
            </NavListItem>

            <NavListItem>
              <ActiveLink href="/projects" passHref>
                <StyledNavLink>Projects</StyledNavLink>
              </ActiveLink>
            </NavListItem>
          </NavList>
          <ThemeToggle
            onChange={handleSchemeChange}
            colorScheme={colorScheme}
            position="fixed"
            top={4}
            right={4}
          />
        </ContentContainer>
      </NavContainer>
      <DynamicCurveBox navContainerRef={root} />
    </>
  );
}

export default Nav;
