import { FC } from 'react';
import AuthPage from './AuthPage';
import RegisterForm from './RegisterForm/RegisterForm';
import InputField from './InputField/InputField';
import {
  nameSchema,
  emailSchema,
  passwordSchema,
} from 'helpers/validationSchema';
import { AuthLink } from './AuthPage/AuthPage.styled';

const Registration: FC = () => {
  return (
    <AuthPage>
      <RegisterForm title="Registration" text="Sign up">
        <InputField
          label="name"
          icon="user"
          type="text"
          validationSchema={nameSchema}
          register
        />
        <InputField
          label="email"
          icon="mail"
          type="email"
          validationSchema={emailSchema}
          register
        />
        <InputField
          label="password"
          icon="lock"
          type="password"
          validationSchema={passwordSchema}
          register
        />
      </RegisterForm>

      <AuthLink to={'/login'}>Sign in</AuthLink>
    </AuthPage>
  );
};

export default Registration;
