import React, { HTMLInputTypeAttribute } from 'react';
import classnames from 'classnames';

import classes from './Input.module.css';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  type: HTMLInputTypeAttribute;
  error?: string;
}

export const Input = ({ type, onChange, error, className }: InputProps) => {
  return (
    <div>
      <input className={classnames(classes.Input, className)} type={type} onChange={onChange} />
      <div className={classes.error}>{error}</div>
    </div>
  );
};
