import styled from 'styled-components';

import Box from '../Box';
import { StyledText } from '../Text';

export const LinkBox = styled(Box)`
  position: relative;

  > * {
    z-index: 1;
    position: relative;
  }

  b {
    border-bottom: 2px solid transparent;
    font-family: serif;
    letter-spacing: 0;
    font-size: 1.25rem;
    transition: border 0.6s ease, color 0.6s ease;
  }

  &:hover {
    cursor: pointer;

    b {
      color: var(--colors-primary);
      border-bottom-color: var(--colors-accent);
      transition: border 0.3s ease, color 0.3s ease;
    }
  }
`;

export const ListItem = styled(Box)``;

export const Headline = styled(StyledText)`
  position: sticky;

  /* Headline padding + main section padding + half of the curve box height */
  top: ${77 / 2 + 48}px;
  height: 3rem;
`;
