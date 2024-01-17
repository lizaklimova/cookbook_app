import { FC } from 'react';
import AuthPage from 'components/Registration/AuthPage';
import LoginForm from './LoginForm';
import InputField from 'components/Registration/InputField';
import { AuthLink } from 'components/Registration/AuthPage/AuthPage.styled';

const Login: FC = () => {
  return (
    <AuthPage>
      <LoginForm title="Sign in" text="Sign in" login>
        <InputField label="name" icon="user" type="text" />
        <InputField label="password" icon="lock" type="password" />
      </LoginForm>

      <AuthLink to={'/register'}>Registration</AuthLink>
    </AuthPage>
  );
};

export default Login;
