import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa6';

interface SelectProps {
  $theme: string;
}

export const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 42px;

  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    gap: 18px;
    margin-bottom: 90px;
  }
`;

export const SelectName = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 133%;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const Select = styled.div<SelectProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 146px;
  height: 34px;
  border: ${({ $theme }) =>
    $theme === 'light' ? 'none' : '1px solid var(--heroInput)'};
  background-color: ${({ $theme }) =>
    $theme === 'light' ? '#d9d9d928' : 'transparent'};
  color: ${({ $theme }) => ($theme === 'light' ? '#23262a80' : '#fafafa7f')};
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    width: 175px;
    height: 41px;
    font-size: 14px;
    padding: 10px 14px;
  }

  @media screen and (min-width: 1440px) {
    width: 198px;
    height: 49px;
    padding: 14px;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
`;

export const Options = styled.ul`
  position: absolute;
  z-index: 900;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--selectBg);
  border-radius: 6px;
  font-size: 12px;
  padding: 8px 14px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding: 10px 14px;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px;
  }
`;

export const Option = styled.li`
  display: flex;
  align-items: center;
  height: 23px;
  opacity: 0.5;
  transition: all 200ms ease-in-out;

  &:hover {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    height: 27px;
  }

  @media screen and (min-width: 1440px) {
    height: 25px;
  }
`;

export const ArrowDown = styled(FaAngleDown)`
  color: var(--accentGreen);
  width: 14px;

  @media screen and (min-width: 768px) {
    width: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
