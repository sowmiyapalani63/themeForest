// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const ThemeContext = createContext();

// ThemeProvider Component
export const ThemeProvider = ({ children }) => {
  // Theme state to hold current theme settings
  const [theme, setTheme] = useState({
    color: 'theme-color-1', // Default color theme class
    logo: '/images/default-logo.png', // Default logo
    loader: '/images/default-loader.gif', // Default preloader
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the Theme Context
export const useTheme = () => useContext(ThemeContext);
