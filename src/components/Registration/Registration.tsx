import { FC } from 'react';
import AuthPage from './AuthPage';
import RegisterForm from './RegisterForm/RegisterForm';
import InputField from './InputField/InputField';
import { AuthLink } from './AuthPage/AuthPage.styled';

const Registration: FC = () => {
  return (
    <AuthPage>
      <RegisterForm title="Registration" text="Sign up">
        <InputField label="name" icon="user" type="text" />
        <InputField label="email" icon="mail" type="email" />
        <InputField label="password" icon="lock" type="password" />
      </RegisterForm>

      <AuthLink to={'/login'}>Sign in</AuthLink>
    </AuthPage>
  );
};

export default Registration;
