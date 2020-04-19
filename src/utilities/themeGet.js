import { themeGet as styledThemeGet } from '@styled-system/theme-get';
import { rem } from 'polished';

// Function currying FTW
const themeGet = (themeGetProps) => (props) => {
  const value = styledThemeGet(themeGetProps)(props);
  return typeof value === 'number' ? rem(value) : value;
};

export default themeGet;
