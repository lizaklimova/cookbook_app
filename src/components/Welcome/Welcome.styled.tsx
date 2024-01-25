import styled from 'styled-components';
import { MainMob, MainTab, MainDesk } from 'assets/images/main';

export const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${MainMob}) no-repeat center / cover;

  @media screen and (min-width: 768px) {
    background-image: url(${MainTab});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${MainDesk});
  }
`;

export const MainPageWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MainTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainLogo = styled.svg`
  width: 54px;
  height: 54px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
    margin-bottom: 44px;
  }
`;

export const MainGreeting = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.48px;
  margin-bottom: 14px;
  color: var(--light);

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1;
    letter-spacing: -0.56px;
  }
`;

export const MainText = styled.p`
  text-align: center;
  letter-spacing: -0.28px;
  max-width: 100%;
  margin-bottom: 44px;
  color: var(--light);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
    margin-bottom: 40px;
    max-width: 505px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 540px;
  }
`;

export const MainBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const MainRegisterBtn = styled.button`
  border-radius: 25px 60px;
  padding: 15px 24px;
  color: var(--light);
  background-color: var(--accentGreen);
  transition: outline var(--easedTransition), color var(--easedTransition),
    background-color var(--easedTransition);

  &:hover,
  &:focus {
    outline: 2px solid var(--accentGreen);
    color: var(--accentGreen);
    background-color: transparent;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 22px 44px;
  }
`;

export const MainLoginBtn = styled.button`
  outline: 2px solid var(--light);
  border-radius: 25px 60px;
  padding: 15px 24px;
  color: var(--light);
  background-color: transparent;
  transition: outline var(--easedTransition), color var(--easedTransition);

  &:hover,
  &:focus {
    outline: 2px solid var(--accentGreen);
    color: var(--accentGreen);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 22px 44px;
  }
`;
