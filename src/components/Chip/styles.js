import styled from 'styled-components';
import { lighten } from 'polished';

// Utilities
import themeGet from '../../utilities/themeGet';

// Components
import Box from '../Box';
import { StyledText } from '../Text';

export const StyledChip = styled(Box).attrs((props) => ({
  style: {
    backgroundColor: lighten(0.67, props.chipColor),
    color: props.chipColor,
  },
}))`
  position: relative;
  display: inline-flex;
  margin: auto auto auto 0;
  padding: 0.5em 1em;
  border: none;
  border-radius: 120px;
  font-size: 1rem;

  &:hover {
    background-color: ${(props) => lighten(0.4, props.chipColor)};
    color: ${(props) => props.chipColor};
  }
`;

// export const Dot = styled(StyledText).attrs((props) => ({
//   as: 'span',
//   style: {
//     backgroundColor: props.color,
//   },
// }))`
//   display: inline-block;
//   width: 0.4em;
//   height: 0.4em;
//   margin: auto 0.5em auto 0;
//   border-radius: 50%;
// `;

export const Dot = styled.span``;
