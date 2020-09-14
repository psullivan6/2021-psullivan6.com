import styled from 'styled-components';

// Utilities
import themeGet from '../../utilities/themeGet';

export const StyledTextLink = styled.a`
  position: relative;
  display: inline-flex;
  padding: ${themeGet('space.3')} ${themeGet('space.4')};
  border: 2px solid var(--colors-primary);
  border-radius: 1em;
  font-family: Work Sans, sans-serif;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  text-decoration: none;
  color: var(--colors-primary);
  transition: border-radius 0.2s ease, background-color 0.2s ease,
    color 0.2s ease;

  &::after {
    content: '\\27F6';
    margin-left: 0;
    overflow: hidden;
    display: inline-block;
    line-height: 1;
    max-width: 0;
    transition: max-width 0.1s ease, margin 0.1s ease;
  }

  &:hover {
    border-radius: 6em;
    background-color: var(--colors-primary);
    color: var(--colors-background);
    transition: border-radius 0.3s ease, background-color 0.3s ease,
      color 0.3s ease;

    &::after {
      max-width: 2em;
      margin-left: 1em;
      transition: max-width 0.3s ease, margin 0.5s ease;
    }
  }
`;
