import React from 'react';

import { VisibilityOff, FavoriteBorder, Favorite } from '@mui/icons-material';

import { ButtonProps } from '@/app/PropData';

import './Button.styles.css';

export const Button = ({
  buttonClass,
  title,
  onAction,
  isDisabled,
  isRemove,
}: ButtonProps) => {
  return isDisabled ? (
    <Favorite />
  ) : (
    <button
      type="button"
      title={title}
      className={`button ${buttonClass} `}
      onClick={() => onAction()}>
      {isRemove ? <VisibilityOff /> : <FavoriteBorder />}
    </button>
  );
};
