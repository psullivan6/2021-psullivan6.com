import styled from 'styled-components';

// Utilities
import themeGet from '../../utilities/themeGet';

// Components
import Box from '../Box';

const ProjectGallery = styled(Box).attrs(() => {
  as: 'ul';
})`
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: 1fr;
  grid-gap: ${themeGet('space.4')};
  margin: 0;
  padding: 0;
  list-style: none;

  ${themeGet('mediaQueries.s')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default ProjectGallery;
