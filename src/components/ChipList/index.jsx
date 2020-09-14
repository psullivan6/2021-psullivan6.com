import styled from 'styled-components';

// Utilities
import themeGet from '../../utilities/themeGet';

const ChipList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${themeGet('space.3')};
`;

export default ChipList;
