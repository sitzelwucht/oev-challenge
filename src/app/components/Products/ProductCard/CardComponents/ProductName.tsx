import React from 'react';

import { AppProps } from '@/app/PropData';

export const ProductName = ({ title }: AppProps) => (
  <div className="product-name">{title}</div>
);
