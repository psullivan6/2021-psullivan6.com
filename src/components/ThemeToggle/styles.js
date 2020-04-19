import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const Box = styled.div`
  position: relative;
  font-size: 16px;
`;

export const Inside = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1.5em;
  height: 1.5em;
  margin: 0.25em;
  border-radius: 50%;
  background-color: ${themeGet('colors.primaryText')};
  clip-path: url(#themeToggleCurve);
  transition: background-color 0.6s ease;
`;

function getEasing(index) {
  return `${0.06 * Math.pow(index + 1, 1)}s`;
}

export const ListItem = styled.li`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: ${themeGet('space.2')}px;
  padding: 0.25em 0.75em 0.25em 0.25em;
  border-radius: 1000px;
  color: ${themeGet('colors.primaryText')};
  line-height: 1;
  text-transform: uppercase;
  cursor: pointer;
  transform: translateY(${(props) => (props.index + 1) * -150}%);
  transition: transform ${(props) => getEasing(props.index)} ease-out;

  &:hover {
    background-color: ${(props) => props.colors.background};
    color: ${(props) => props.colors.text};
  }

  &:before {
    content: '';
    display: block;
    width: 1.25em;
    height: 1.25em;
    margin-right: ${themeGet('space.1')}px;
    border-radius: 50%;
    border: 0.125em solid ${themeGet('colors.primaryText')};
  }

  &:hover:before {
    border-color: ${(props) => props.colors.text};
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0.5em;
    left: 0.5em;
    width: 1em;
    height: 1em;
    border-radius: 50%;

    ${(props) =>
      props.active &&
      `
      background-color: ${themeGet('colors.primaryText')(props)};
    `}
  }
`;

export const List = styled.ul`
  z-index: 1;
  opacity: ${(props) => (props.active ? 1 : 0)};
  visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
  position: absolute;
  top: 3em;
  left: -0.4em;
  list-style: none;
  margin: 0;
  padding: 0.5em;
  border-radius: 0.5em;
  transition: opacity 0.2s ease, transform 0.2s ease;

  ${(props) =>
    props.active &&
    `
    ${ListItem} {
      transform: translateY(0);
    }
  `}
`;

export const Container = styled.button`
  box-sizing: content-box;
  display: block;
  z-index: 2;
  position: relative;
  width: 2em;
  height: 2em;
  margin: 0;
  padding: 0;
  outline: none;
  background: none;
  border: 0.125em solid ${themeGet('colors.primaryText')};
  border-radius: 50%;
  font-size: 1em;
  transition: background-color 0.6s ease, border-color 0.6s ease;
  cursor: pointer;

  &:hover {
    border-color: ${themeGet('colors.accent')};

    ${Inside} {
      background-color: ${themeGet('colors.accent')};
    }
  }
`;
