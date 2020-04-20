import styled from 'styled-components';

// Utilities
import themeGet from '../../utilities/themeGet';

const Grid = styled.ul`
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: ${themeGet('space.4')};
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default Grid;
