import styled from 'styled-components';

type ShowPasswordProps = {
  $action?: boolean;
};

export const AuthInputContainer = styled.div`
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

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px rgba(139, 170, 54, 0.5) inset;
  }

  &:-moz-autofill {
    box-shadow: 0 0 0 1000px rgba(139, 170, 54, 0.5) inset;
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
  fill: var(--light);
  stroke: var(--light);
  opacity: 0.8;

  @media screen and (min-width: 768px) {
    top: 50%;
    width: 24px;
    height: 24px;
  }
`;

export const IndicatorIconWrap = styled.div<ShowPasswordProps>`
  display: ${({ $action }) => ($action ? 'block' : 'none')};
  position: absolute;
  top: 14px;
  right: 16px;

  @media screen and (min-width: 768px) {
    top: 20px;
    right: 16px;
  }
`;

export const ValidationMsg = styled.p`
  font-size: 11px;
  margin-top: 5px;

  &.success {
    color: var(--success);
  }

  &.error {
    color: var(--error);
  }

  &.warning {
    color: var(--warning);
  }

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const ShowPasswordBtn = styled.button<ShowPasswordProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  position: absolute;
  right: ${({ $action }) => ($action ? '40px' : '15px')};
  top: ${({ $action }) => ($action ? '13px' : '15px')};
  background-color: transparent;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--light);
    stroke: var(--light);
  }

  &.is-shown {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    top: 15px;

    svg {
      width: 25px;
      height: 25px;
    }
  }
`;
