import { ChangeEvent, FC } from 'react';
import sprite from 'assets/icons/sprite.svg';
import {
  AuthInputContainer,
  AuthInputField,
  AuthInputIcon,
} from './InputField.styled';

interface InputFieldProps {
  label: string;
  icon: string;
  type: string;
}

const InputField: FC<InputFieldProps> = ({ label, icon, type }) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <AuthInputContainer>
      <AuthInputField
        type={type}
        name={label}
        placeholder={label}
        onChange={onInputChange}
      />
      <AuthInputIcon width={18} height={18}>
        <use href={`${sprite}#icon-${icon}`}></use>
      </AuthInputIcon>
    </AuthInputContainer>
  );
};

export default InputField;
