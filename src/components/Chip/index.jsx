import React from 'react';

// Styles
import { StyledChip, Dot } from './styles';

function Chip({ color, children }) {
  function handleClick(event) {
    console.log('CLICK ON CHIP', event);
  }

  return (
    <StyledChip as="button" chipColor={color} onClick={handleClick}>
      <Dot color={color} />
      {children}
    </StyledChip>
  );
}

export default Chip;
