import styled from 'styled-components';

// Utilities
import themeGet from '../../utilities/themeGet';

export const StyledTextLink = styled.a`
  position: relative;
  font-family: Work Sans, sans-serif;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  text-decoration: none;

  &::after {
    content: '';
    z-index: 0;
    position: absolute;
    top: 50%;
    left: -5%;
    width: 110%;
    height: 20%;
    background-color: var(--colors-accent);
    transform: skewY(-1.5deg) translateY(180%);
    border-radius: 0.25em 0;
    transition: transform 0.3s ease, height 0.3s ease;
  }

  &:hover::after {
    transform: skewY(-1.5deg) translateY(-20%);
    height: 60%;
  }
`;

export const StyledTextLinkCopy = styled.span`
  position: relative;
  z-index: 1;
`;
