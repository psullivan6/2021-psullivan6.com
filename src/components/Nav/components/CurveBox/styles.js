import styled from 'styled-components';

// Utilities
import themeGet from '../../../../utilities/themeGet';

export const Curve = styled.svg`
  fill: ${themeGet('colors.primary')};
  transition: fill 0.25s ease;
`;
