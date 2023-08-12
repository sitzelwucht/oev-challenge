'use client';

import { useState, useEffect } from 'react';

import { Product } from './PropData';

export const useProducts = () => {
  // States
  const [favorites, setfavorites] = useState<Product[]>([]);
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [isListCleared, setIsListCleared] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<Product[]>([]);

  // Constants
  const productsToShow: Product[] = searchInput
    ? filteredSuggestions
    : suggestions;
  const noResults: boolean =
    searchInput.length > 0 && !filteredSuggestions.length;

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
      setSuggestions([]);
      setIsListCleared(true);
    } else {
      setSuggestions(suggestions.filter((item) => item.id !== product.id));
    }
  };

  const handleSearch = (event: any): void => {
    setSearchInput(event.target.value);

    if (searchInput.length > 0) {
      setFilteredSuggestions(
        suggestions.filter((elem) =>
          elem.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    }
  };

  const fetchProductData = async () => {
    await fetch('https://dummyjson.com/products')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSuggestions(data.products);
        setIsListCleared(false);
      })
      .catch((err) => {
        console.log('Following error occurred: ', err);
      });
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
    suggestions,
    isListCleared,
    fetchProductData,
    handleSearch,
    productsToShow,
    noResults,
  };
};
