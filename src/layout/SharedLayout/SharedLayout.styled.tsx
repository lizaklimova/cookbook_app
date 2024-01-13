import styled, { css } from 'styled-components';
import {
  topMob,
  bottomMob,
  topTab,
  bottomTab,
  topDesk,
  bottomDesk,
} from 'assets/images/background';

const CommonStyles = css`
  position: absolute;
  filter: blur(4.5px);
  z-index: -1;
`;

export const BgLeavesTop = styled.div`
  ${CommonStyles};
  left: 0;
  bottom: 300px;
  width: 256px;
  height: 392px;
  background: url(${topMob}) no-repeat center/cover;

  @media screen and (min-width: 768px) {
    bottom: 250px;
    width: 423px;
    height: 646px;
    background-image: url(${topTab});
  }

  @media screen and (min-width: 1440px) {
    bottom: 0px;
    width: 558px;
    height: 852px;
    background-image: url(${topDesk});
  }
`;

export const BgLeavesBottom = styled.div`
  ${CommonStyles};
  bottom: 0;
  right: 0;
  width: 160px;
  height: 172px;
  background: url(${bottomMob}) no-repeat center/cover;

  @media screen and (min-width: 768px) {
    width: 290px;
    height: 313px;
    background-image: url(${bottomTab});
  }

  @media screen and (min-width: 1440px) {
    width: 438px;
    height: 474px;
    background-image: url(${bottomDesk});
  }
`;
