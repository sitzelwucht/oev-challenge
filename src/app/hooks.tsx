'use client';

import { useState, useEffect } from 'react';

import { Product } from './PropData';

export const useProducts = () => {
  // States
  const [favorites, setfavorites] = useState<Product[]>([]);
  const [isListCleared, setIsListCleared] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);

  const noResults: boolean = searchInput.length > 0 && !productsToShow.length;

  // Handlers
  const addFavorite = (product: Product): void => {
    setfavorites((previousFavorites) => [...previousFavorites, product]);
  };

  const removeFavorite = (product: Product): void => {
    setfavorites(favorites.filter((item) => item.id !== product.id));
  };

  const handleRemoveSuggestions = (
    isClearAll: boolean,
    product: Product
  ): void => {
    if (isClearAll) {
      setProductsToShow([]);
      setIsListCleared(true);
      setSearchInput('');
    } else {
      setProductsToShow(
        productsToShow.filter((item) => item.id !== product.id)
      );
    }
  };

  const fetchProductData = async () => {
    await fetch('https://dummyjson.com/products')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProductsToShow(data.products);
        setIsListCleared(false);
      })
      .catch((err) => {
        console.log('Following error occurred: ', err);
      });
  };

  const handleSearch = (event: any): void => {
    setSearchInput(event.target.value);
    setIsListCleared(false);

    if (searchInput.length > 1) {
      setProductsToShow(
        productsToShow.filter((elem) =>
          elem.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    } else {
      fetchProductData();
    }
  };

  // Effetcs
  useEffect(() => {
    fetchProductData();
  }, []);

  return {
    removeFavorite,
    addFavorite,
    handleRemoveSuggestions,
    favorites,
    isListCleared,
    fetchProductData,
    handleSearch,
    productsToShow,
    noResults,
  };
};
