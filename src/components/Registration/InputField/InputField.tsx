import { ChangeEvent, FC, useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import sprite from 'assets/icons/sprite.svg';
import {
  AuthInputContainer,
  AuthInputField,
  AuthInputIcon,
  IndicatorIconWrap,
  ValidationMsg,
  ShowPasswordBtn,
} from './InputField.styled';
import { InputFieldProps } from './inputType';
import { determineInputIcon } from 'helpers/determineInputIcon';

const InputField: FC<InputFieldProps> = ({
  label,
  icon,
  type,
  validationSchema,
  register,
}) => {
  const [validationMsg, setValidationMsg] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isWarn, setIsWarn] = useState<boolean>(false);
  const [actualClassName, setActualClassName] = useState<string>('');
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const [showPasswordButton, setShowPasswordButton] = useState<string>('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value && type === 'password') {
      setShowPasswordButton('is-shown');
    } else {
      setShowPasswordButton('');
    }

    if (register) {
      validationSchema
        .validate(value)
        .then(() => {
          if (label === 'password') {
            setValidationMsg('Password is secure');
          } else {
            setValidationMsg('');
          }
          setIsSuccess(true);
          setIsError(false);
          setActualClassName('success');
        })
        .catch((validationError: any) => {
          const err = validationError.errors[0];

          if (err.includes('little secure')) {
            setValidationMsg(err);
            setIsSuccess(false);
            setIsError(false);
            setIsWarn(true);
            setActualClassName('warning');
          } else {
            setValidationMsg(err);
            setIsSuccess(false);
            setIsError(true);
            setActualClassName('error');
          }
        });
    }
  };

  const onInputBlur = () => {
    if (!showPasswordButton && type === 'password') {
      setShowPasswordButton('');
      setValidationMsg('');
      setIsError(false);
      setActualClassName('');
    }
  };

  const determineInputType = () => (!isPasswordShown ? type : 'text');

  return (
    <AuthInputContainer>
      <AuthInputField
        className={actualClassName}
        type={determineInputType()}
        name={label}
        placeholder={label}
        onChange={onInputChange}
        onBlur={onInputBlur}
        autoComplete={label === 'name' ? 'off' : 'on'}
        required
      />
      {type === 'password' && (
        <ShowPasswordBtn
          $action={register}
          className={showPasswordButton}
          onClick={() => setIsPasswordShown(prev => !prev)}
        >
          {isPasswordShown ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </ShowPasswordBtn>
      )}
      <ValidationMsg className={actualClassName}>{validationMsg}</ValidationMsg>
      <AuthInputIcon width={18} height={18}>
        <use href={`${sprite}#icon-${icon}`}></use>
      </AuthInputIcon>
      <IndicatorIconWrap $action={register}>
        <svg width={20} height={20}>
          <use href={determineInputIcon(isSuccess, isError, isWarn)}></use>
        </svg>
      </IndicatorIconWrap>
    </AuthInputContainer>
  );
};

export default InputField;
