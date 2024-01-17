import { FC, FormEvent, ReactNode } from 'react';
import {
  AuthPositionWrap,
  AuthFormContainer,
  AuthForm,
  AuthFormTitle,
  AuthFormBtn,
} from './RegisterForm.styled';

interface RegisterFormProps {
  title: string;
  text: string;
  children: ReactNode;
}

const RegisterForm: FC<RegisterFormProps> = ({ title, text, children }) => {
  const onAuthSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <AuthPositionWrap>
      <AuthFormContainer>
        <AuthFormTitle>{title}</AuthFormTitle>
        <AuthForm onSubmit={onAuthSubmit}>
          {children}
          <AuthFormBtn type="submit">{text}</AuthFormBtn>
        </AuthForm>
      </AuthFormContainer>
    </AuthPositionWrap>
  );
};

export default RegisterForm;
