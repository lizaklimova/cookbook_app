import styled from 'styled-components';
import { bgElemMob, bgElemTab, bgElemDesk } from 'assets/images/authorization';
import { Link } from 'react-router-dom';

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

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: start;
    gap: 115px;
  }
`;

export const AuthPicWrap = styled.picture`
  position: relative;
  z-index: -1;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-top: 15px;
    }
  }

  @media screen and (min-width: 1440px) {
    justify-content: end;

    img {
      margin-top: 0;
    }
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

export const AuthFormLinkWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    max-width: 550px;
    align-items: start;
  }
`;

export const AuthLink = styled(Link)`
  display: block;
  margin-bottom: 10px;
  color: var(--light);
  text-decoration: underline;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    align-self: center;
  }
`;
