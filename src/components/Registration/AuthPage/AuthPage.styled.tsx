import styled from 'styled-components';
import { bgElemMob, bgElemTab, bgElemDesk } from 'assets/images/authorization';
import { Link } from 'react-router-dom';

export const AuthPgContainer = styled.div`
  position: absolute;
  z-index: -1;
  width: 100vw;
  min-height: 100vh;
  padding: 15px 0;
  background: var(--light) url(${bgElemMob}) no-repeat center 300px / cover;

  @media screen and (min-width: 768px) {
    background-image: url(${bgElemTab});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${bgElemDesk});
  }
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
    position: static;
    transform: unset;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    transform: translate(-50%, -50%);
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
