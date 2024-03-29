import { FC } from 'react';
import {
  authMob1x,
  authMob2x,
  authTab1x,
  authTab2x,
  authDesk1x,
  authDesk2x,
} from 'assets/images/authorization';
import {
  AuthPgContainer,
  AuthPicFormWrap,
  AuthPicWrap,
  AuthFormLinkWrap,
} from './AuthPage.styled';
import { AuthPageProps } from './authPageType';

const AuthPage: FC<AuthPageProps> = ({ children }) => {
  return (
    <AuthPgContainer>
      <AuthPicFormWrap>
        <AuthPicWrap>
          <source
            media="(max-width: 767px)"
            srcSet={`${authMob1x} 1x, ${authMob2x} 2x`}
          />
          <source
            media="(max-width: 1439px)"
            srcSet={`${authTab1x} 1x, ${authTab2x} 2x`}
          />
          <source
            media="(min-width: 1440px)"
            srcSet={`${authDesk1x} 1x, ${authDesk2x} 2x`}
          />
          <img src={authMob1x} alt="Authentication" />
        </AuthPicWrap>

        <AuthFormLinkWrap>{children}</AuthFormLinkWrap>
      </AuthPicFormWrap>
    </AuthPgContainer>
  );
};

export default AuthPage;
