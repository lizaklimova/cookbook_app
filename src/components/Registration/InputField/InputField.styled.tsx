import styled from 'styled-components';

export const AuthInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const AuthInputField = styled.input`
  width: 100%;
  padding: 14px 14px 14px 40px;
  border: ${({ theme }) => `1px solid ${theme.lightOpacity} 0.6)`};
  border-radius: 6px;
  color: ${({ theme }) => `${theme.lightOpacity} 0.6)`};
  background-color: transparent;
  transition: border-color var(--easedTransition);

  &::placeholder {
    letter-spacing: -0.28px;
    text-transform: capitalize;
    color: ${({ theme }) => `${theme.lightOpacity} 0.8)`};
    transition: color var(--easedTransition);
  }

  &:hover {
    border-color: var(--light);
  }

  &:hover::placeholder {
    color: var(--light);
  }

  &:hover ~ svg {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    padding: 21px 21px 21px 50px;

    &::placeholder {
      font-size: 18px;
      letter-spacing: -0.36px;
    }
  }
`;

export const AuthInputIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-55%);
  transition: opacity var(--easedTransition);

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
