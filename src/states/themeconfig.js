import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { themeConfig } from './themeConfig';
import { useTheme } from './ThemeContext';

const useRouteChange = () => {
  const { setTheme } = useTheme(); // Access setTheme from context
  const location = useLocation();

  useEffect(() => {
    // Get theme settings for the current route
    const theme = themeConfig[location.pathname] || {
      color: 'theme-color-1',
      logo: '/images/default-logo.png',
      loader: '/images/default-loader.gif',
    };

    // Update the context state
    setTheme(theme);

    // Apply the theme class to the body element
    document.body.className = theme.color;
  }, [location.pathname, setTheme]);
};

export default useRouteChange;
