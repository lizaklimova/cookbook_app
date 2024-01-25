import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import sprite from 'assets/icons/sprite.svg';
import { MainContainer } from 'components/App/App.styled';
import {
  MainPage,
  MainPageWrap,
  MainTextWrap,
  MainLogo,
  MainGreeting,
  MainText,
  MainBtnWrap,
  MainRegisterBtn,
  MainLoginBtn,
} from './Welcome.styled';

const Welcome: FC = () => {
  const navigate = useNavigate();

  return (
    <MainPage>
      <MainContainer>
        <MainPageWrap>
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
            <MainRegisterBtn
              type="button"
              onClick={() => navigate('/register')}
            >
              Registration
            </MainRegisterBtn>
            <MainLoginBtn type="button" onClick={() => navigate('/login')}>
              Sign In
            </MainLoginBtn>
          </MainBtnWrap>
        </MainPageWrap>
      </MainContainer>
    </MainPage>
  );
};

export default Welcome;
