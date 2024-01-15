import styled from 'styled-components';

export const AuthFormContainer = styled.div`
  min-height: 315px;
  border-radius: 30px;
  padding: 32px 28px 40px 28px;
  margin-top: -30px;
  background-color: var(--lightDark);

  @media screen and (min-width: 768px) {
    max-width: 500px;
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

export const AuthFormTitle = styled.h2`
  color: var(--light);
  font-size: 24px;
  font-weight: 600;
  line-height: 1.17;
  letter-spacing: -0.48px;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.07;
    letter-spacing: -0.56px;
    margin-bottom: 32px;
  }
`;

export const AuthFormBtn = styled.button`
  font-size: 16px;
  line-height: 1.13;
  width: 100%;
  border-radius: 6px;
  padding: 14px;
  margin-top: 28px;
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
    margin-top: 50px;
  }
`;
