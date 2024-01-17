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
  color: var(--light);
  background-color: transparent;
  transition: border-color var(--easedTransition);

  &::placeholder {
    letter-spacing: -0.28px;
    text-transform: capitalize;
    color: ${({ theme }) => `${theme.lightOpacity} 0.6)`};
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

  &.success {
    border: 1px solid var(--success);

    &.success ~ svg {
      fill: var(--success);
      stroke: var(--success);
      opacity: 1;
    }
  }

  &.error {
    border: 1px solid var(--error);

    &.error ~ svg {
      fill: var(--error);
      stroke: var(--error);
      opacity: 1;
    }
  }

  &.warning {
    border: 1px solid var(--warning);

    &.warning ~ svg {
      fill: var(--warning);
      stroke: var(--warning);
      opacity: 1;
    }
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
  top: 23px;
  left: 14px;
  transform: translateY(-55%);
  transition: opacity var(--easedTransition);
  fill: var(--light);
  stroke: var(--light);
  opacity: 0.8;

  @media screen and (min-width: 768px) {
    top: 30px;
    width: 24px;
    height: 24px;
  }
`;

export const IndicatorIconWrap = styled.div`
  position: absolute;
  top: 14px;
  right: 16px;

  @media screen and (min-width: 768px) {
    top: 20px;
    right: 16px;
  }
`;

export const ValidationMsg = styled.p`
  font-size: 12px;
  margin-top: 5px;

  &.success {
    color: var(--success);
  }

  &.error {
    color: var(--error);
  }

  &.warning {
    color: (--warning);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
