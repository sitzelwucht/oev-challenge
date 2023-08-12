import React from 'react';

import { AppProps, HeaderProps } from '@/app/PropData';

import './Search.styles.css';

export const Search = ({ handleSearch }: HeaderProps) => (
  <form>
    <input
      type="text"
      onChange={(e) => handleSearch(e)}
      placeholder="type here to search..."
    />
  </form>
);
