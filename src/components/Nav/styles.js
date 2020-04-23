import styled from 'styled-components';
import themeGet from '../../utilities/themeGet';

// Components
import Box from '../Box';

export const NavContainer = styled(Box).attrs(() => ({
  as: 'nav',
}))`
  background-color: var(--colors-primary);
  color: white;
  padding: ${themeGet('space.6')} ${themeGet('space.3')};
  transition: padding 0.3s ease, background-color 0.25s ease;

  ${themeGet('mediaQueries.m')} {
    padding: ${themeGet('space.8')} ${themeGet('space.3')};
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  ${themeGet('mediaQueries.s')} {
    flex-direction: row;
  }
`;

export const NavListItem = styled.li`
  order: ${(props) => (props.primary ? 2 : 1)};

  ${(props) =>
    props.primary &&
    `
    margin-top: ${themeGet('space.4')(props)};
  `}

  ${themeGet('mediaQueries.s')} {
    order: 1;
  }
`;

export const StyledNavLink = styled.a`
  color: var(--colors-primaryText);
  font-weight: 900;
  font-size: 1.25rem;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.1em;

  ${(props) =>
    props.isActive &&
    `
    color: var(--colors-accent);
  `}
`;
