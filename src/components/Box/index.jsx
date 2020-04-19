import React from 'react';
import styled from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  space,
} from 'styled-system';

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  space
);

export const Flex = (props) => (
  <Box display="flex" justifyContent="center" alignItems="center" {...props} />
);

export default Box;
