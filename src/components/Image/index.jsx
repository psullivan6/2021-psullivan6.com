import React from 'react';

// Styles
import {
  StyledFigure,
  StyledFigCaption,
  StyledImage,
  StyledPicture,
} from './styles';

function Picture({ alt, src, fallback, type = 'image/webp', ...props }) {
  return (
    <StyledPicture>
      <source srcSet={src} type={type} />
      <StyledImage alt={alt} src={fallback} {...props} />
    </StyledPicture>
  );
}

function Figure(props) {
  return (
    <StyledFigure>
      <Picture {...props} />
      <StyledFigCaption>{props.alt}</StyledFigCaption>
    </StyledFigure>
  );
}

function Image({ withFigure = false, ...props }) {
  if (withFigure) {
    return <Figure {...props} />;
  }

  return <Picture {...props} />;
}

export default Image;
