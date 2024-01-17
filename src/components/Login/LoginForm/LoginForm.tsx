import { FC, FormEvent, ReactNode } from 'react';
import {
  AuthForm,
  AuthFormBtn,
  AuthFormContainer,
  AuthFormTitle,
  AuthPositionWrap,
} from 'components/Registration/RegisterForm/RegisterForm.styled';

interface LoginFormProps {
  title: string;
  text: string;
  login?: boolean;
  children: ReactNode;
}

const LoginForm: FC<LoginFormProps> = ({ title, text, login, children }) => {
  const onLogSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <AuthPositionWrap>
      <AuthFormContainer>
        <AuthFormTitle $login={login}>{title}</AuthFormTitle>
        <AuthForm onSubmit={onLogSubmit}>
          {children}
          <AuthFormBtn type="submit">{text}</AuthFormBtn>
        </AuthForm>
      </AuthFormContainer>
    </AuthPositionWrap>
  );
};

export default LoginForm;
