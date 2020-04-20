import styled from 'styled-components';

// Utilities
import themeGet from '../../utilities/themeGet';

const TextLink = styled.a`
  position: relative;
  font-family: Work Sans, sans-serif;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 50%;
    left: -5%;
    width: 110%;
    height: 30%;
    background-color: ${themeGet('colors.accent')};
    transform: skewY(-3deg) translateY(60%);
    border-radius: 0.25em 0;
    transition: transform 0.3s ease, height 0.3s ease;
  }

  &:hover::after {
    transform: skewY(-3deg) translateY(-20%);
    height: 60%;
  }
`;

export default TextLink;
