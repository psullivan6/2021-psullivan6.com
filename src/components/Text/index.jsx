import React from 'react';
import styled from 'styled-components';
import { color, space, typography, variant } from 'styled-system';

export const variants = {
  small: {
    fontSize: '0.75rem'
  },
  p: {
    fontSize: '1rem',
    lineHeight: 1.25
  },
  h6: {
    fontSize: '1rem'
  },
  h5: {
    fontSize: '1.25rem'
  },
  h4: {
    fontSize: '1.5625rem'
  },
  h3: {
    fontSize: '1.9375rem'
  },
  h2: {
    fontSize: '2.4375rem'
  },
  h1: {
    marginTop: 0,
    fontSize: '3.0625rem'
  }
};

export const StyledText = styled.p`
  ${variant({
    variants
  })}
  ${color};
  ${space};
  ${typography};
`;

StyledText.defaultProps = {
  // lineHeight: 1, // [TODO] Figure out how to keep this AND have variant above able to override it
  variant: 'p'
};

const Text = props => {
  if (props.as != null && props.variant == null) {
    return <StyledText variant={props.as} {...props} />;
  }

  return <StyledText {...props} />;
};

export default Text;
