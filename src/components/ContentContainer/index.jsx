import styled from 'styled-components';

// Utilities
import themeGet from '../../utilities/themeGet';

// Components
import Box from '../Box';

const ContentContainer = styled(Box)`
  max-width: ${themeGet('breakpoints.l')};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${themeGet('space.4')};
  padding-right: ${themeGet('space.4')};
`;

export default ContentContainer;
