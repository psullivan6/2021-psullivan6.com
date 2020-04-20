import styled from 'styled-components';
import { darken, meetsContrastGuidelines, saturate } from 'polished';
import themeGet from '../../utilities/themeGet';
import { StyledText } from '../../components/Text';

export const StyledFigure = styled.figure`
  position: relative;
  width: 90%;
  border-radius: 0.5rem;

  &:after {
    content: '';
    position: absolute;
  }

  &:after {
    z-index: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border-radius: 0.5rem;
    box-shadow: 0 10px 32px -6px ${(props) => darken(0.3, saturate(0.2, props.color))};
  }

  picture,
  img {
    z-index: 1;
    position: relative;
    display: block;
    width: 100%;
    margin: 0;
    padding: 0;
    border-radius: 0.5rem;
  }
`;

export const Headline = styled(StyledText).attrs(() => ({
  as: 'h1',
  variant: 'h4',
}))``;

export const SubHeadline = styled(StyledText).attrs(() => ({
  as: 'h2',
}))``;

export const Header = styled.header`
  z-index: 2;
  position: absolute;
  bottom: ${themeGet('space.4')};
  width: 80%;

  ${Headline},
  ${SubHeadline} {
    margin: 0;
    font-weight: 600;
    letter-spacing: 0.025em;
    font-family: 'Work Sans', sans-serif;
  }

  ${Headline} {
    font-weight: 900;
    line-height: 1.2;
    text-transform: uppercase;

    span {
      background-color: ${(props) => darken(0.2, saturate(0.2, props.color))};
      display: inline;
      padding: 0.1rem 0.4rem;
      line-height: inherit;
      color: ${(props) =>
        meetsContrastGuidelines(
          darken(0.2, saturate(0.2, props.color)),
          '#ffffff'
        ).AA
          ? 'white'
          : 'black'};

      /* Needs prefixing */
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
    }
  }

  ${SubHeadline} {
    letter-spacing: -0.025em;
    font-size: 0.875rem;
    line-height: ${themeGet('space.4')};
  }
`;

export const Container = styled.div`
  position: relative;
  /* background-color: ${(props) => props.color}; */
  background-color: transparent;

  ${(props) =>
    props.align === 'start' &&
    `
    ${StyledFigure} {
      margin: 0 auto auto 0;
    }

    ${Header} {
      // right: ${themeGet('space.4')(props)};
      text-align: right;
    }
  `}

  ${(props) =>
    props.align === 'end' &&
    `
    ${StyledFigure} {
      margin: 0 0 auto auto;
    }

    ${Header} {
      // left: ${themeGet('space.4')(props)};
      text-align: left;
    }
  `}
`;
