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

  const clearErrors = () => {
    setErrors({ email: '', password: '' });
  };

  const onFormSumbit = async () => {
    clearErrors();
    const emailValidation = validation.emailValidation(data.email);
    const passValidation = validation.passwordValidation(data.password);

    if (!emailValidation.isValid || !passValidation.isValid) {
      setErrors({ email: emailValidation.text, password: passValidation.text });
    }

    await AuthPageStore.login(data);
  };

  const handleChange = (field: keyof IAuthData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [field]: event.target.value });
  };

  return (
    <div className={classes.LoginForm}>
      <span className={classes.Title}>Добро пожаловать!</span>
      <Input
        name='email'
        type='email'
        pattern={emailRegExp}
        required
        value={data.email}
        placeholder='Email'
        onChange={handleChange('email')}
        className={classes.EmailInput}
        error={errors.email}
      />
      <Input
        name='password'
        type='password'
        required
        value={data.password}
        placeholder='Password'
        onChange={handleChange('password')}
        className={classes.PassowrdInput}
        error={errors.password}
      />
      <Button name='loginButton' className={classes.Button} onClick={onFormSumbit}>
        Login
      </Button>
    </div>
  );
};
