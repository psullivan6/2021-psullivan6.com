import { em } from 'polished';

import { colorDefaults, colorSchemes } from './theme/colors';

const breakpoints = [em(432), em(624), em(816), em(1008), em(1200)];
breakpoints.xs = breakpoints[0];
breakpoints.s = breakpoints[1];
breakpoints.m = breakpoints[2];
breakpoints.l = breakpoints[3];
breakpoints.xl = breakpoints[4];

const theme = {
  breakpoints,
  mediaQueries: {
    xs: `@media screen and (min-width: ${breakpoints.xs})`,
    s: `@media screen and (min-width: ${breakpoints.s})`,
    m: `@media screen and (min-width: ${breakpoints.m})`,
    l: `@media screen and (min-width: ${breakpoints.l})`,
    xl: `@media screen and (min-width: ${breakpoints.xl})`,
  },
  space: [0, 6, 9, 12, 24, 36, 48, 60, 90, 120],
};

export function getTheme(colorScheme) {
  return {
    ...theme,
    colors: {
      ...colorSchemes[colorScheme],
      ...colorDefaults,
    },
  };
}

export default theme;
