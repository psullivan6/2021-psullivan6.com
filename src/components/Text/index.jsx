import React from 'react';
import styled from 'styled-components';
import { color, space, typography, variant } from 'styled-system';

export const variants = {
  small: {
    fontSize: '0.75rem',
  },
  p: {
    fontSize: '1rem',
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    lineHeight: 1.25,
    letterSpacing: '0.01em',
    maxWidth: '30em',
    fontWeight: 300,
    color: '#666',
  },
  h6: {
    fontSize: '1rem',
  },
  h5: {
    fontSize: '1.25rem',
  },
  h4: {
    fontSize: '1.5625rem',
  },
  h3: {
    fontSize: '1.9375rem',
  },
  h2: {
    fontSize: '2.4375rem',
    fontFamily: `'Work Sans', sans-serif`,
    textTransform: 'uppercase',
  },
  h1: {
    marginTop: 0,
    fontSize: '3.0625rem',
    fontFamily: 'Georgia, serif',
  },
  title: {
    marginTop: 0,
    fontSize: '3.0625rem',
  },
};

export const StyledText = styled.p`
  ${variant({
    variants,
  })}
  ${color};
  ${space};
  ${typography};
`;

StyledText.defaultProps = {
  // lineHeight: 1, // [TODO] Figure out how to keep this AND have variant above able to override it
  variant: 'p',
};

const Text = (props) => {
  if (props.as != null && props.variant == null) {
    return <StyledText variant={props.as} {...props} />;
  }

  return <StyledText {...props} />;
};

export default Text;
