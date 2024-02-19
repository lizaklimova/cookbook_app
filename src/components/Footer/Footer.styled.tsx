import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  color: var(--light);
`;

export const FooterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--footerBg);
`;

export const LogoTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  margin: 28px 0 32px 0;
`;
