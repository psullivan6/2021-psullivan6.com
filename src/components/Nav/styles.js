import styled from 'styled-components';
import themeGet from '../../utilities/themeGet';

// Components
import Box from '../Box';

export const NavContainer = styled(Box).attrs(() => ({
  as: 'nav',
}))`
  background-color: ${themeGet('colors.primary')};
  color: white;
  padding: ${themeGet('space.3')} ${themeGet('space.3')} ${themeGet('space.8')}
    ${themeGet('space.3')};
  transition: background-color 0.25s ease;
`;
