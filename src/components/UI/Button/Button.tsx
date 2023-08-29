import React from 'react';
import classnames from 'classnames';

import classes from './Button.module.css';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={classnames(classes.Button, className)}>
      {children}
    </button>
  );
};
