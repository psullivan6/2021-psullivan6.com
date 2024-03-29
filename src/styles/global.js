import { createGlobalStyle } from 'styled-components';

// Utilities
import { colorSchemes } from './theme/colors';

const defaultTheme = colorSchemes.light;

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    --colors-background: ${defaultTheme.background};
    --colors-primary: ${defaultTheme.primary};
    --colors-primaryText: ${defaultTheme.primaryText};
    --colors-accent: ${defaultTheme.accent};
    --colors-highlight: ${defaultTheme.highlight};
    --colors-highlightText: ${defaultTheme.highlightText};
    --colors-text: ${defaultTheme.text};
    --colors-textAccent: ${defaultTheme.textAccent};

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
