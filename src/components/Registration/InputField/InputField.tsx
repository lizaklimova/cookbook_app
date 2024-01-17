import { ChangeEvent, FC, useState } from 'react';
import sprite from 'assets/icons/sprite.svg';
import {
  AuthInputContainer,
  AuthInputField,
  AuthInputIcon,
  IndicatorIconWrap,
  ValidationMsg,
} from './InputField.styled';

interface InputFieldProps {
  label: string;
  icon: string;
  type: string;
}

const InputField: FC<InputFieldProps> = ({ label, icon, type }) => {
  const [isSuccess, setIsSuccess] = useState(true);
  const [isError, setIsError] = useState(true);
  const [isWarn, setIsWarn] = useState(true);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  let indicatorIcon;
  switch (true) {
    case isSuccess:
      indicatorIcon = `${sprite}#icon-success`;
      break;

    case isError:
      indicatorIcon = `${sprite}#icon-error`;
      break;

    case isWarn:
      indicatorIcon = `${sprite}#icon-warning`;
      break;
  }

  return (
    <AuthInputContainer>
      <AuthInputField
        className=""
        type={type}
        name={label}
        placeholder={label}
        onChange={onInputChange}
      />
      <ValidationMsg className="">consequatuo odit quibusdam?</ValidationMsg>
      <AuthInputIcon width={18} height={18}>
        <use href={`${sprite}#icon-${icon}`}></use>
      </AuthInputIcon>
      <IndicatorIconWrap>
        <svg width={20} height={20}>
          <use href={indicatorIcon}></use>
        </svg>
      </IndicatorIconWrap>
    </AuthInputContainer>
  );
};

export default InputField;
