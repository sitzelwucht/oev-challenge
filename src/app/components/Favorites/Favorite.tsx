import React from 'react';

import { AppProps } from '@/app/PropData';

import { HighlightOff } from '@mui/icons-material';

export const Favorite = ({ product, removeFavorite }: AppProps) => (
  <div className="favorite-item">
    <div className="favorite-title">{product.title}</div>
    <button
      title="remove from favorites"
      className="button button-remove-favorite"
      onClick={() => removeFavorite(product)}>
      <HighlightOff />
    </button>
  </div>
);
