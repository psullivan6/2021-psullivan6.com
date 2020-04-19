import React, { useState } from 'react';
import { colorSchemes } from '../../styles/theme';

// Components
import Box from '../Box';

// Styles
import { Container, Inside, List, ListItem } from './styles';

const ThemeToggle = ({ colorScheme, onChange, ...props }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleThemeSelection = (schemeKey) => {
    onChange(schemeKey);
    setMenuOpen(false);
  };

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
          <ListItem
            key={schemeKey}
            index={index}
            active={schemeKey === colorScheme}
            colors={colorSchemes[schemeKey]}
            onClick={() => handleThemeSelection(schemeKey)}
          >
            {schemeKey}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ThemeToggle;
