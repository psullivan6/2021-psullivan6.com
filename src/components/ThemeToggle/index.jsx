import React, { useState } from 'react';
import { colorSchemes } from '../../styles/theme';

// Components
import Box from '../Box';

// Styles
import {
  Container,
  Inside,
  List,
  ListItemLabel,
  ListItemRadio,
} from './styles';

const ThemeToggle = ({ colorScheme, onChange, ...props }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  function handleChange(event) {
    const { value } = event.target;
    onChange(value);
    setMenuOpen(false);
  }

  return (
    <Box {...props}>
      <Container onClick={handleMenuToggle}>
        <svg width="0" height="0" stroke="none">
          <defs>
            <clipPath id="themeToggleCurve" clipPathUnits="objectBoundingBox">
              <path d="m 0 1 V 0.5 Q 0.5 0.25 1 0.5 V 1 z" />
            </clipPath>
          </defs>
        </svg>
        <Inside />
      </Container>
      <List active={menuOpen}>
        {Object.keys(colorSchemes).map((schemeKey, index) => (
          <ListItemLabel
            key={schemeKey}
            index={index}
            htmlFor={`ThemeToggle-${schemeKey}`}
            name="colorScheme"
            colors={colorSchemes[schemeKey]}
            active={schemeKey === colorScheme}
          >
            {schemeKey}
            <ListItemRadio
              id={`ThemeToggle-${schemeKey}`}
              type="radio"
              name="colorScheme"
              value={schemeKey}
              checked={schemeKey === colorScheme}
              onChange={handleChange}
            />
          </ListItemLabel>
        ))}
      </List>
    </Box>
  );
};

export default ThemeToggle;
