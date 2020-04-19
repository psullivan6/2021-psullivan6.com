import { em } from 'polished';

const breakpoints = [em(432), em(624), em(816), em(1008), em(1200)];
breakpoints.xs = breakpoints[0];
breakpoints.s = breakpoints[1];
breakpoints.m = breakpoints[2];
breakpoints.l = breakpoints[3];
breakpoints.xl = breakpoints[4];

export const colorSchemes = {
  light: {
    background: '#fff',
    primary: '#039',
    primaryText: '#fff',
    accent: '#3fc',
    highlight: 'hsl(210, 18%, 90%)',
    highlightText: '#333',
    text: '#333',
  },
  dark: {
    background: '#000',
    primary: 'hsl(0, 0%, 15%)',
    primaryText: '#cc9',
    accent: '#36f',
    highlight: '#ccc',
    highlightText: '#333',
    text: '#fff',
  },
};

const theme = {
  breakpoints,
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints.small})`,
    medium: `@media screen and (min-width: ${breakpoints.medium})`,
    large: `@media screen and (min-width: ${breakpoints.large})`,
  },
  space: [0, 6, 9, 12, 24, 36, 48, 60, 90, 120],
};

export function getTheme(colorScheme) {
  return {
    ...theme,
    colors: colorSchemes[colorScheme],
  };
}

export default theme;
