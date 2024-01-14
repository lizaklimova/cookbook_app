import styled from 'styled-components';
import { bgElemMob, bgElemTab, bgElemDesk } from 'assets/images/authorization';

export const AuthPgContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: var(--light);
`;

export const AuthPgPicWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthPgDecorElem = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 490px;
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
