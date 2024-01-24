import { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { LoginFormProps, CredentialsLog } from './loginFormTypes';
import { logIn } from '../../../redux/auth/operations';
import {
  AuthForm,
  AuthFormBtn,
  AuthFormContainer,
  AuthFormTitle,
  AuthPositionWrap,
} from 'components/Registration/RegisterForm/RegisterForm.styled';

const LoginForm: FC<LoginFormProps> = ({ title, text, login, children }) => {
  const dispatch: AppDispatch = useDispatch();

  const onLogInSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loginCredentials: CredentialsLog = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    dispatch(logIn(loginCredentials));
  };

  return (
    <AuthPositionWrap>
      <AuthFormContainer>
        <AuthFormTitle $login={login}>{title}</AuthFormTitle>
        <AuthForm onSubmit={onLogInSubmit}>
          {children}
          <AuthFormBtn type="submit">{text}</AuthFormBtn>
        </AuthForm>
      </AuthFormContainer>
    </AuthPositionWrap>
  );
};

export default LoginForm;
