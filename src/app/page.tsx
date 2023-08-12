'use client';

import { ProductList } from './components/Products/ProductList/ProductList';
import { FavoritesList } from './components/Favorites/FavoritesList';
import { useProducts } from './hooks';

export default function Home() {
  const {
    favorites,
    handleRemoveSuggestions,
    removeFavorite,
    addFavorite,
    isListCleared,
    fetchProductData,
    handleSearch,
    productsToShow,
    noResults,
  } = useProducts();

  return (
    <div className="container-box">
      <ProductList
        suggestions={productsToShow}
        favorites={favorites}
        handleRemoveSuggestions={handleRemoveSuggestions}
        addFavorite={addFavorite}
        isListCleared={isListCleared}
        fetchProductData={fetchProductData}
        handleSearch={handleSearch}
        productsToShow={productsToShow}
        noResults={noResults}
        product={{
          title: '',
          description: '',
          price: 0,
          discountPercentage: 0,
          id: 0,
          images: [],
          image: '',
        }}
        description={''}
        price={0}
        discountPercentage={0}
        id={0}
        removeFavorite={Function}
        isFavorite={false}
        title={''}
        image={''}
      />
      <FavoritesList
        favorites={favorites}
        removeFavorite={removeFavorite}
        product={{
          title: '',
          description: '',
          price: 0,
          discountPercentage: 0,
          id: 0,
          images: [],
          image: '',
        }}
        description={''}
        price={0}
        discountPercentage={0}
        id={0}
        suggestions={[]}
        handleRemoveSuggestions={Function}
        addFavorite={Function}
        isListCleared={false}
        fetchProductData={Function}
        handleSearch={Function}
        productsToShow={[]}
        noResults={false}
        isFavorite={false}
        title={''}
        image={''}
      />
    </div>
  );
}
