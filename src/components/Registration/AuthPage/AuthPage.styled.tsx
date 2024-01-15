import styled from 'styled-components';
import { bgElemMob, bgElemTab, bgElemDesk } from 'assets/images/authorization';

export const AuthPgContainer = styled.div`
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-color: var(--light);
`;

export const AuthPicFormWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const AuthPicWrap = styled.picture`
  position: relative;
  z-index: -1;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const AuthPgDecorElem = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 63%;
  background-image: url(${bgElemMob});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: url(${bgElemTab});
    height: 606px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${bgElemDesk});
    height: 325px;
  }
`;
