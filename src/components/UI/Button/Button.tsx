import React from 'react';
import classnames from 'classnames';

import classes from './Button.module.css';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export const Button = ({ children, className, onClick, ...props }: ButtonProps) => {
  return (
    <button onClick={onClick} className={classnames(classes.Button, className)} {...props}>
      {children}
    </button>
  );
};
