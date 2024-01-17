import styled from 'styled-components';

export const AuthPositionWrap = styled.div`
  width: 100%;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 500px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 550px;
  }
`;

export const AuthFormContainer = styled.div`
  width: 100%;
  min-height: 315px;
  border-radius: 30px;
  padding: 32px 28px 40px 28px;
  margin-top: -30px;
  margin-bottom: 18px;
  background-color: var(--lightDark);

  @media screen and (min-width: 768px) {
    padding: 44px 50px;
    margin-top: 0;
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

interface AuthTitleProps {
  $login?: boolean;
}

export const AuthFormTitle = styled.h2<AuthTitleProps>`
  color: var(--light);
  font-size: 24px;
  font-weight: 600;
  line-height: 1.17;
  letter-spacing: -0.48px;
  margin-bottom: ${({ $login }) => ($login ? '40px' : '18px')};

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.07;
    letter-spacing: -0.56px;
    ${({ $login }) => ($login ? '50px' : '32px')};
  }
`;

export const AuthFormBtn = styled.button`
  font-size: 16px;
  line-height: 1.13;
  width: 100%;
  border-radius: 6px;
  padding: 14px;
  margin-top: 16px;
  background-color: var(--accentGreen);
  color: var(--light);
  transition: color var(--easedTransition),
    background-color var(--easedTransition), outline var(--easedTransition);

  &:hover,
  &:focus {
    color: var(--accentGreen);
    background-color: transparent;
    outline: 1px solid var(--accentGreen);
  }

  @media screen and (min-width: 768px) {
    padding: 21px;
    margin-top: 26px;
  }
`;
