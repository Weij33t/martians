import { emailRegExp } from '../constants';
import { VALIDTION_PASSWORD_LENGTH } from '../constants/validation';

interface ValidationResult {
  isValid: boolean;
  text: string;
}

const emailValidation = (email: string | undefined | null): ValidationResult => {
  if (!email) {
    return { isValid: false, text: 'Некорретный email' };
  }
  const emailMatch = !!email.match(emailRegExp);
  return { isValid: emailMatch, text: emailMatch ? '' : 'Некорретный email' };
};

const passwordValidation = (password: string | undefined | null): ValidationResult => {
  if (!password || password == null) {
    return { isValid: false, text: 'Некорретный пароль' };
  }
  if (password.length < VALIDTION_PASSWORD_LENGTH) {
    return { isValid: false, text: 'Длина пароля не может быть меньше 8' };
  }
  return { isValid: true, text: '' };
};

export const validation = {
  emailValidation,
  passwordValidation,
};
