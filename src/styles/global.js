import { createGlobalStyle } from 'styled-components';

// Utilities
import themeGet from '../utilities/themeGet';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;

    /* Light color scheme as default */
    --colors-background: #fff;
    --colors-primary: #039;
    --colors-primaryText: #fff;
    --colors-accent: #3fc;
    --colors-highlight: hsl(210, 18%, 90%);
    --colors-highlightText: #333;
    --colors-text: #333;
    --colors-textAccent: #036;

    background-color: var(--colors-primary);
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html,
  body,
  #__next{
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--colors-background);
    color: var(--colors-text);
    transition: background-color 0.25s ease, color 0.25s ease;
    /* font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; */
    font-family: Work Sans, sans-serif;
  }

  ::selection {
    background-color: var(--colors-highlight);
    color: var(--colors-highlightText);
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
