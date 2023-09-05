import React, { useState } from 'react';

import { Button, Input } from '../UI';

import classes from './LoginForm.module.css';

import { IAuthData } from '@/services/auth-service';
import { validation } from '@/common/utils/validation';
import { AuthPageStore } from '@/store';
import { emailRegExp } from '@/common/constants';

export const LoginForm = () => {
  const [data, setData] = useState<IAuthData>({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [sumbitButtonDisabled, setSumbitButtonDisabled] = useState(false);

  const clearErrors = () => {
    setErrors({ email: '', password: '' });
  };

  const onFormSumbit = async () => {
    clearErrors();
    const emailValidation = validation.emailValidation(data.email);
    const passValidation = validation.passwordValidation(data.password);

    if (!emailValidation.isValid || !passValidation.isValid) {
      setErrors({ email: emailValidation.text, password: passValidation.text });
      return;
    }

    setSumbitButtonDisabled(() => true);
    await AuthPageStore.login(data);
    setTimeout(() => setSumbitButtonDisabled(() => false), 2000);
  };

  const handleChange = (field: keyof IAuthData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [field]: event.target.value });
  };

  return (
    <div className={classes.LoginForm}>
      <span className={classes.Title}>Добро пожаловать!</span>
      <label className={classes.InputWrapper}>
        Email
        <Input
          name='email'
          type='email'
          pattern={emailRegExp}
          required
          aria-invalid='true'
          aria-errormessage='email-error'
          value={data.email}
          placeholder='email@example.com'
          onChange={handleChange('email')}
          className={classes.Input}
          error={errors.email}
          autoComplete='email'
          aria-autocomplete='inline'
        />
      </label>
      <label className={classes.InputWrapper}>
        Пароль
        <Input
          name='password'
          type='password'
          required
          value={data.password}
          onChange={handleChange('password')}
          className={classes.Input}
          error={errors.password}
          autoComplete='password'
        />
      </label>
      <Button
        type='submit'
        disabled={sumbitButtonDisabled}
        name='loginButton'
        className={classes.Button}
        onClick={onFormSumbit}
      >
        Login
      </Button>
    </div>
  );
};
