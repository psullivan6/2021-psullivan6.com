import React, { createContext, useContext, useState } from 'react';

const ColorSchemeContext = createContext();

export function useColorScheme() {
  const context = useContext(ColorSchemeContext);

  if (!context) {
    throw new Error('useColorScheme must be used within a ColorSchemeProvider');
  }

  return context;
}

export function usePartyMode() {
  const context = useContext(ColorSchemeContext);

  if (!context) {
    throw new Error('useColorScheme must be used within a ColorSchemeProvider');
  }

  return { isPartyMode: context.colorScheme === 'party' };
}

export function ColorSchemeProvider(props) {
  const [colorScheme, setColorScheme] = useState('light');

  const value = {
    colorScheme,
    setColorScheme,
  };

  return <ColorSchemeContext.Provider value={value} {...props} />;
}

export default {
  ColorSchemeProvider,
  useColorScheme,
};
