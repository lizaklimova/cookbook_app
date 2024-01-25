import { FC, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { AppDispatch } from 'redux/store';
import useAuth from 'hooks/useAuth';
import { register } from '../../../redux/auth/operations';
import { Credentials } from 'components/Registration/RegisterForm/registerFormType';
import { RegisterFormProps } from './registerFormType';
import SmallSpinner from 'components/Loader/SmallSpinner';
import {
  AuthPositionWrap,
  AuthFormContainer,
  AuthForm,
  AuthFormTitle,
  AuthFormBtn,
} from './RegisterForm.styled';

const RegisterForm: FC<RegisterFormProps> = ({ title, text, children }) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { isRegistered, isLoading } = useAuth();

  const onAuthSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const registerCredentials: Credentials = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    dispatch(register(registerCredentials));

    setTimeout(() => {
      if (isRegistered) {
        navigate('/login');

        toast('Verify your email!', {
          icon: '📮',
          duration: 7000,
        });
      }
    }, 2000);
  };

  return (
    <AuthPositionWrap>
      <AuthFormContainer>
        <AuthFormTitle>{title}</AuthFormTitle>
        <AuthForm onSubmit={onAuthSubmit}>
          {children}
          <AuthFormBtn type="submit">
            {isLoading ? <SmallSpinner /> : text}
          </AuthFormBtn>
        </AuthForm>
      </AuthFormContainer>
    </AuthPositionWrap>
  );
};

export default RegisterForm;
