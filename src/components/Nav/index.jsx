import React, { useRef } from 'react';

// Context
import { useColorScheme } from '../../context/color-scheme';

// Components
import ContentContainer from '../ContentContainer';
import Logo from '../Logo';
import ActiveNavLink from '../ActiveNavLink';
import ThemeToggle from '../ThemeToggle';
import CurveBox from './components/CurveBox';

// Styles
import { NavContainer, NavList, NavListItem, StyledNavLink } from './styles';
import { colorSchemes } from '../../styles/theme/colors';

function Nav() {
  const root = useRef();
  const { colorScheme, setColorScheme } = useColorScheme();

  function handleSchemeChange(newColorScheme) {
    setColorScheme(newColorScheme);

    localStorage.setItem('color-scheme', newColorScheme);

    function schemeLoop(key) {
      document.documentElement.style.setProperty(
        `--colors-${key}`,
        colorSchemes[newColorScheme][key]
      );
    }

    Object.keys(colorSchemes[newColorScheme]).forEach(schemeLoop);
  }

  return (
    <>
      <NavContainer ref={root}>
        <ContentContainer>
          <NavList>
            <NavListItem>
              <ActiveNavLink href="/about" passHref>
                <StyledNavLink>About Me</StyledNavLink>
              </ActiveNavLink>
            </NavListItem>

            <NavListItem primary>
              <ActiveNavLink href="/" passHref>
                <StyledNavLink>
                  <Logo mx={6} />
                </StyledNavLink>
              </ActiveNavLink>
            </NavListItem>

            <NavListItem>
              <ActiveNavLink href="/projects" passHref>
                <StyledNavLink>Projects</StyledNavLink>
              </ActiveNavLink>
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
      <CurveBox navContainerRef={root} mb={8} />
    </>
  );
}

export default Nav;
