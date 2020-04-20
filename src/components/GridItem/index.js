import styled from 'styled-components';

const GridItem = styled.li`
  grid-area: ${(props) => props.gridArea};
  padding: 0;
`;

export default GridItem;
