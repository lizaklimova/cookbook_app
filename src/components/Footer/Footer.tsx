import { FC } from 'react';
import FooterNavigation from './FooterNavigation/FooterNavigation';
import FooterFollowUs from './FooterFollowUs/FooterFollowUs';
import FooterSubscribeForm from './FooterSubscribeForm/FooterSubscribeForm';
import {
  FooterContainer,
  FooterInfoContainer,
  LogoTitle,
} from './Footer.styled';

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterInfoContainer>
        <LogoTitle to="/main">So Yummy</LogoTitle>
        <FooterNavigation />
        <FooterFollowUs />
        <FooterSubscribeForm />
      </FooterInfoContainer>
    </FooterContainer>
  );
};

export default Footer;
