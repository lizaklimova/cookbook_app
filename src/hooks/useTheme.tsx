import { lightTheme, darkTheme } from 'assets/theme';
import { ThemeContext } from 'contexts/themeContext';
import { useContext } from 'react';

interface CurrentTheme {
  theme: string;
  toggleTheme: () => void;
  currentTheme: {
    [key: string]: string;
  };
}

const useTheme = (): CurrentTheme => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return { theme, toggleTheme, currentTheme };
};

export default useTheme;
