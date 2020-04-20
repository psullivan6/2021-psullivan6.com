import styled from 'styled-components';

// Utilities
import themeGet from '../../utilities/themeGet';

// Components
import Box from '../Box';

const ContentContainer = styled(Box)`
  max-width: ${themeGet('breakpoints.l')};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${themeGet('space.3')};
  padding-right: ${themeGet('space.3')};

  ${themeGet('mediaQueries.xs')} {
    padding-left: ${themeGet('space.4')};
    padding-right: ${themeGet('space.4')};
  }

  ${themeGet('mediaQueries.s')} {
    padding-left: ${themeGet('space.6')};
    padding-right: ${themeGet('space.6')};
  }

  ${themeGet('mediaQueries.m')} {
    padding-left: ${themeGet('space.8')};
    padding-right: ${themeGet('space.8')};
  }

  ${themeGet('mediaQueries.l')} {
    padding-left: ${themeGet('space.8')};
    padding-right: ${themeGet('space.8')};
  }
`;

export default ContentContainer;
