import * as yup from 'yup';

export const nameSchema = yup.string().required('Name is required');

export const emailSchema = yup
  .string()
  .email('Inappropriate email format')
  .required('Email is required');

export const passwordSchema = yup
  .string()
  .test('is-secure', 'Password is not secure', function (value) {
    if (!value) {
      return this.createError({
        message: 'Password is required.',
      });
    }

    const minSafeLength = 7;
    const hasUppercase = /[A-Z]/.test(value);

    if (value.length < minSafeLength) {
      return this.createError({
        message: 'Password is not secure. At least 7 symbols.',
      });
    } else if (!hasUppercase) {
      return this.createError({
        message:
          'Your password is little secure. Enter at least one uppercase letter.',
      });
    } else {
      return true;
    }
  });
