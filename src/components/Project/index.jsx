import React from 'react';
import Image from '../../components/Image';
import {
  Container,
  Header,
  Headline,
  StyledFigure,
  SubHeadline,
} from './styles';

const Project = ({ align, alt, color, eyebrow, src, title }) => {
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
      </Header>
    </Container>
  );
};

export default Project;
