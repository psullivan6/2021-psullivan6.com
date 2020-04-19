import styled from 'styled-components';

// Utilities
import themeGet from '../../utilities/themeGet';

export const FooterContainer = styled.footer`
  padding: ${themeGet('space.3')};
  background-color: hsl(0, 0%, 96%);
`;

export const FooterLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 1.25em;

    li:not(:last-child) {
      margin-right: ${themeGet('space.2')};
    }
  }
`;
