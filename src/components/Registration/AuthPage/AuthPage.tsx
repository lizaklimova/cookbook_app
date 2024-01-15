import { FC } from 'react';
import {
  authMob1x,
  authMob2x,
  authTab1x,
  authTab2x,
  authDesk1x,
  authDesk2x,
} from 'assets/images/authorization';
import { MainContainer } from 'components/App/App.styled';
import RegisterForm from '../RegisterForm/RegisterForm';
import InputField from '../InputField/InputField';
import {
  AuthPgContainer,
  AuthPicFormWrap,
  AuthPicWrap,
  AuthPgDecorElem,
} from './AuthPage.styled';

const AuthPage: FC = () => {
  return (
    <>
      <AuthPgContainer>
        <AuthPgDecorElem />
      </AuthPgContainer>

      <MainContainer>
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

          <RegisterForm title="Registration" text="Sign up">
            <InputField label="name" icon="user" type="text" />
            <InputField label="email" icon="mail" type="email" />
            <InputField label="password" icon="lock" type="password" />
          </RegisterForm>
        </AuthPicFormWrap>
      </MainContainer>
    </>
  );
};

export default AuthPage;
