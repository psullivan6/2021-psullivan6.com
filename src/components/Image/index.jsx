import React from 'react';

const Image = ({ alt, src, fallback, type = 'image/webp', ...props }) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img alt={alt} src={fallback} {...props} />
    </picture>
  );
};

export default Image;
