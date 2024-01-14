import { FC, useState, useContext } from 'react';
import { ThemeSwitcher } from './ToggleBtn.styled';
import { ThemeContext } from 'contexts/themeContext';

const ToggleBtn: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(theme === 'light' ? true : false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    toggleTheme();
  };

  return (
    <ThemeSwitcher
      inputProps={{ 'aria-label': 'ant design' }}
      checked={checked}
      onChange={handleChange}
    />
  );
};

export default ToggleBtn;
