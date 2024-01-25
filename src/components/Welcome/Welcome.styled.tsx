import styled from 'styled-components';
import { MainMob, MainTab, MainDesk } from 'assets/images/main';

export const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${MainMob}) no-repeat center / cover;
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
`;

export const MainGreeting = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.48px;
  margin-bottom: 14px;
  color: var(--light);
`;

export const MainText = styled.p`
  text-align: center;
  letter-spacing: -0.28px;
  max-width: 100%;
  margin-bottom: 44px;
  color: var(--light);
`;

export const MainBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const MainRegisterBtn = styled.button`
  border-radius: 25px 60px;
  padding: 15px 24px;
  color: var(--light);
  background-color: var(--accentGreen);
`;

export const MainLoginBtn = styled.button`
  border: 2px solid var(--light);
  border-radius: 25px 60px;
  padding: 15px 24px;
  color: var(--light);
  background-color: transparent;
`;
