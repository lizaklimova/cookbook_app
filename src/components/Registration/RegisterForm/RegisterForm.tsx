import { FC, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { register } from '../../../redux/auth/operations';
import { Credentials } from 'components/Registration/RegisterForm/registerFormType';
import { RegisterFormProps } from './registerFormType';
import {
  AuthPositionWrap,
  AuthFormContainer,
  AuthForm,
  AuthFormTitle,
  AuthFormBtn,
} from './RegisterForm.styled';

const RegisterForm: FC<RegisterFormProps> = ({ title, text, children }) => {
  const dispatch: AppDispatch = useDispatch();

  const onAuthSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const credentials: Credentials = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };
    dispatch(register(credentials));
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
