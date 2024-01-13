import { FC, useContext } from 'react';
import { ThemeContext } from 'contexts/themeContext';
import { MainContainer } from 'components/App/App.styled';
import ToggleBtn from './ToggleBtn';

const Header: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <MainContainer>
        <ToggleBtn $theme={theme} toggleTheme={toggleTheme} />
      </MainContainer>
    </header>
  );
};

export default Header;
