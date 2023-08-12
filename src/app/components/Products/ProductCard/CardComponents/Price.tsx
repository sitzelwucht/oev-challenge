import React from 'react';

import { AppProps } from '@/app/PropData';

export const Price = ({ price, discountPercentage }: AppProps) => (
  <>
    <div className="card-section card-bottom price-wrapper">
      <span className="price">${price}</span>
      <span className="discount"> -{discountPercentage}%</span>
    </div>
  </>
);
