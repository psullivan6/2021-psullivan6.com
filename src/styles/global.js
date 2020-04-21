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
  body,
  #__next{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${themeGet('colors.background')};
    color: ${themeGet('colors.text')};
    transition: background-color 0.25s ease, color 0.25s ease;
    /* font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; */
    font-family: Work Sans, sans-serif;
  }

  ::selection {
    background-color: ${themeGet('colors.highlight')};
    color: ${themeGet('colors.highlightText')};
  }

  ul {
    padding: 0;
    list-style: none;

    li {
      line-height: 1.75;
    }
  }
`;

export default GlobalStyles;
