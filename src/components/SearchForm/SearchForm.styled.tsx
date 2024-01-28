import styled from 'styled-components';
import { Field, Form } from 'formik';

interface SearchButtonProps {
  $theme: 'light' | 'dark';
  $pathname: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled(Field)`
  width: 295px;
  height: 53px;
  border-radius: calc(0.35 * 53px) calc(0.65 * 53px);
  border: 1px solid var(--heroInput);
  padding: 16px calc(16px + 113px) 16px 32px;
  font-size: 12px;
  background-color: inherit;
  color: inherit;

  &::placeholder {
    color: #3e4462;
  }

  @media screen and (min-width: 768px) {
    width: 362px;
    height: 57px;
    border-radius: calc(0.35 * 57px) calc(0.65 * 57px);
    padding: 18px calc(18px + 161px) 18px 38px;
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    width: 510px;
    height: 70px;
    border-radius: calc(0.35 * 70px) calc(0.65 * 70px);
    padding: 22px calc(22px + 161px) 22px 48px;
    font-size: 16px;
  }
`;

export const SearchButton = styled.button<SearchButtonProps>`
  margin-left: -113px;
  width: 113px;
  height: 53px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: calc(0.35 * 53px) calc(0.65 * 53px);
  background-color: ${({ $pathname, $theme }) =>
    $pathname === '/main' && $theme === 'light'
      ? 'var(--dark)'
      : 'var(--accentGreen)'};
  color: var(--light);
  transition: all var(--easedTransition);

  &:hover {
    background-color: ${({ $pathname, $theme }) =>
      $pathname === '/main' && $theme === 'light'
        ? 'var(--accentGreen)'
        : 'var(--dark)'};
    border: ${({ $theme }) =>
      $theme === 'light' ? 'none' : '1px solid var(--heroInput)'};
  }

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 57px;
    border-radius: calc(0.35 * 57px) calc(0.65 * 57px);
    margin-left: -161px;
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 161px;
    height: 70px;
    border-radius: calc(0.35 * 70px) calc(0.65 * 70px);
  }
`;
