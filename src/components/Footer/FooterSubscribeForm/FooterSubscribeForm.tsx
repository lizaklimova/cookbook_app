import { FC } from 'react';
import {
  FooterSubscribeFormContainer,
  FooterSubscribeFormInput,
  FooterSubscribeFormButton,
} from './FooterSubscribeForm.styled';

const FooterSubscribeForm: FC = () => (
  <FooterSubscribeFormContainer action="submit">
    <FooterSubscribeFormInput placeholder="Enter your email address" />
    <FooterSubscribeFormButton type="submit">
      Subscribe
    </FooterSubscribeFormButton>
  </FooterSubscribeFormContainer>
);

export default FooterSubscribeForm;
