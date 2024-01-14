import { FC, useState } from 'react';
import { ThemeSwitcher } from './ToggleBtn.styled';
import useTheme from 'hooks/useTheme';

const ToggleBtn: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [checked, setChecked] = useState<boolean>(
    theme === 'light' ? true : false
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    toggleTheme();
  };

  return <ThemeSwitcher checked={checked} onChange={handleChange} />;
};

export default ToggleBtn;
