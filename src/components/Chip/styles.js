import styled from 'styled-components';
import { lighten } from 'polished';

// Components
import Box from '../Box';

export const StyledChip = styled(Box)`
  display: inline-block;
  margin: 0 1em 1em 0;
  padding: 0.5em 1em;
  border: none;
  border-radius: 120px;
  font-size: 1rem;
  background-color: ${(props) => lighten(0.46, props.color)};

  &:hover {
    background-color: ${(props) => lighten(0.36, props.color)};
  }
`;
