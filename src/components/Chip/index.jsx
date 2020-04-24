import React from 'react';

// Styles
import { StyledChip } from './styles';

function Chip({ color, children }) {
  function handleClick(event) {
    console.log('CLICK ON CHIP', event);
  }

  return (
    <StyledChip as="button" color={color} onClick={handleClick}>
      {children}
    </StyledChip>
  );
}

export default Chip;
