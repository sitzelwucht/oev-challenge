'use client';

import { useState, useEffect } from 'react';

import { Product } from './PropData';

export const useProducts = () => {
  // States
  const [favorites, setfavorites] = useState<Product[]>([]);
  const [isListCleared, setIsListCleared] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<Product[]>([]);
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);

  // Constants
  const noResults: boolean =
    !filteredSuggestions.length && searchInput.length > 0;

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
        setSuggestions(data.products);
        setIsListCleared(false);
      })
      .catch((err) => {
        console.log('Following error occurred: ', err);
      });
  };

  const handleSearch = (event: any): void => {
    setSearchInput(event.target.value);
    setIsListCleared(false);

    if (searchInput.length > 0) {
      setFilteredSuggestions(
        suggestions.filter((elem) =>
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

  useEffect(() => {
    if (filteredSuggestions.length > 0) {
      setProductsToShow(filteredSuggestions);
    }
  }, [filteredSuggestions]);

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
