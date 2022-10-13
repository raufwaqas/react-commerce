import React from 'react';
import { ButtonProps } from '../../../../types';

const Btn: React.FC<ButtonProps> = ({
  text,
  leftIcon,
  rightIcon,
  bgcolor,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={`button ${bgcolor}`}>
      {leftIcon && <i className={`bi ${leftIcon} me-2`}></i>}
      {text}
      {rightIcon && <i className={`bi ${rightIcon} ms-2`}></i>}
    </button>
  );
};

export default Btn;
