import styled from 'styled-components';
import themeGet from '../../utilities/themeGet';

// Components
import Box from '../Box';

export const NavContainer = styled(Box).attrs(() => ({
  as: 'nav',
}))`
  background-color: #333;
  color: white;
  padding: ${themeGet('space.3')};
`;
