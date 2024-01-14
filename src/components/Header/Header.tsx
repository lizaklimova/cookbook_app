import { FC } from 'react';
import { MainContainer } from 'components/App/App.styled';
import ToggleBtn from './ToggleBtn';

const Header: FC = () => {
  return (
    <header>
      <MainContainer>
        <ToggleBtn />
      </MainContainer>
    </header>
  );
};

export default Header;
