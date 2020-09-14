import React from 'react';
import Image from '../../components/Image';
import {
  Container,
  Excerpt,
  Header,
  Headline,
  StyledFigure,
  SubHeadline,
} from './styles';

const Project = ({
  align,
  alt,
  color,
  eyebrow,
  src,
  title,
  excerpt,
  ...props
}) => {
  console.log('props', props);
  console.log('title', title);

  return (
    <Container align={align} color={color}>
      <StyledFigure color={color}>
        <Image src={src} alt={alt} />
      </StyledFigure>
      <Header color={color}>
        <Headline>
          <span>{title}</span>
        </Headline>
        <SubHeadline>{eyebrow}</SubHeadline>
        {excerpt && <Excerpt>{excerpt}</Excerpt>}
      </Header>
    </Container>
  );
};

export default Project;
