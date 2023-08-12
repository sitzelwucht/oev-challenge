import React from 'react';
import { AppProps } from '../../../../PropData';

export const Description = ({ description }: AppProps) => (
  <div className="card-section card-middle">
    <span className="product-description "> {description}</span>
  </div>
);
