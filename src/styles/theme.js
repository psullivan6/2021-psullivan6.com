import { em } from 'polished';

const breakpoints = [em(432), em(624), em(816), em(1008), em(1200)];
breakpoints.xs = breakpoints[0];
breakpoints.s = breakpoints[1];
breakpoints.m = breakpoints[2];
breakpoints.l = breakpoints[3];
breakpoints.xl = breakpoints[4];

const theme = {
  breakpoints,
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints.small})`,
    medium: `@media screen and (min-width: ${breakpoints.medium})`,
    large: `@media screen and (min-width: ${breakpoints.large})`,
  },
  space: [0, 6, 9, 12, 24, 36, 48, 60, 90, 120],
};

export default theme;
