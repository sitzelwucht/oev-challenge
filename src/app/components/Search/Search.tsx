import React from 'react';

import { AppProps } from '@/app/PropData';

import './Search.styles.css';

export const Search = ({ handleSearch }: AppProps) => (
  <form>
    <input
      type="text"
      onChange={(e) => handleSearch(e)}
      placeholder="type here to search..."
    />
  </form>
);
