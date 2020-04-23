import styled from 'styled-components';
import themeGet from '../../utilities/themeGet';

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
  background-color: var(--colors-primaryText);
  clip-path: url(#themeToggleCurve);
  transition: background-color 0.6s ease;
`;

function getEasing(index) {
  return `${0.06 * Math.pow(index + 1, 1)}s`;
}

export const ListItemRadio = styled.input`
  position: relative;
  appearance: none;
  width: 1.25em;
  height: 1.25em;
  margin: 0 0 0 ${themeGet('space.1')};
  padding: 0;
  border-radius: 50%;
  border: 0.125em solid var(--colors-primaryText);
  font-size: inherit;

  &:checked::after {
    content: '';
    display: block;
    position: absolute;
    top: 0.125em;
    left: 0.125em;
    width: 0.75em;
    height: 0.75em;
    border-radius: 50%;
    background-color: var(--colors-primaryText);
  }
`;

export const ListItemLabel = styled.label`
  display: flex;
  margin-bottom: ${themeGet('space.2')};
  padding: 0.25em 0.25em 0.25em 0.75em;
  border-radius: 1200px;
  text-transform: uppercase;
  transform: translateY(${(props) => (props.index + 1) * -150}%);
  transition: transform ${(props) => getEasing(props.index)} ease-out;

  &:hover {
    background-color: ${(props) => props.colors.background};
    color: ${(props) => props.colors.text};

    ${ListItemRadio} {
      border-color: ${(props) => props.colors.text};

      &::after {
        background-color: ${(props) => props.colors.text};
      }
    }
  }
`;

export const List = styled.div`
  z-index: 1;
  opacity: ${(props) => (props.active ? 1 : 0)};
  visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 3em;
  right: 0.25em; /* 0.5em reg value - 0.25em ListItem padding */
  margin: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;

  ${(props) =>
    props.active &&
    `
    ${ListItemLabel} {
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
  border: 0.125em solid var(--colors-primaryText);
  border-radius: 50%;
  font-size: 1em;
  transition: background-color 0.6s ease, border-color 0.6s ease;
  cursor: pointer;

  &:hover {
    border-color: var(--colors-accent);

    ${Inside} {
      background-color: var(--colors-accent);
    }
  }
`;
