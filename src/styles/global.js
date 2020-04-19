import { createGlobalStyle } from 'styled-components';

// Utilities
import themeGet from '../utilities/themeGet';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${themeGet('colors.background')};
    color: ${themeGet('colors.text')};
    transition: background-color 0.25s ease, color 0.25s ease;
  }
`;

export default GlobalStyles;
