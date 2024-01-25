import { FC } from 'react';
import sprite from 'assets/icons/sprite.svg';
import { MainContainer } from 'components/App/App.styled';
import {
  MainPage,
  MainTextWrap,
  MainLogo,
  MainGreeting,
  MainText,
  MainBtnWrap,
  MainRegisterBtn,
  MainLoginBtn,
} from './Welcome.styled';

const Welcome: FC = () => {
  return (
    <MainPage>
      <MainContainer>
        <MainTextWrap>
          <MainLogo width={30} height={30}>
            <use href={`${sprite}#icon-logo`}></use>
          </MainLogo>
          <MainGreeting>Welcome to the app!</MainGreeting>
          <MainText>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </MainText>
        </MainTextWrap>

        <MainBtnWrap>
          <MainRegisterBtn type="button">Registration</MainRegisterBtn>
          <MainLoginBtn type="button">Sign In</MainLoginBtn>
        </MainBtnWrap>
      </MainContainer>
    </MainPage>
  );
};

export default Welcome;
