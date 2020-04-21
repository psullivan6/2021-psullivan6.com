import React, { forwardRef } from 'react';

// Styles
import { StyledTextLink, StyledTextLinkCopy } from './styles';

const TextLink = forwardRef(({ children, href, ...props }, ref) => {
  return (
    <StyledTextLink href={href} ref={ref} {...props}>
      <StyledTextLinkCopy>{children}</StyledTextLinkCopy>
    </StyledTextLink>
  );
});

export default TextLink;
