import { FC, useState } from 'react';
import { ThemeSwitcher } from './ToggleBtn.styled';

interface ToggleBtnProps {
  $theme: string;
  toggleTheme: () => void;
}

const ToggleBtn: FC<ToggleBtnProps> = ({ $theme, toggleTheme }) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
    toggleTheme();
  };

  return (
    <div style={{ width: '100px', height: '10px' }}>
      <ThemeSwitcher
        $theme={$theme}
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </div>
  );
};

export default ToggleBtn;
