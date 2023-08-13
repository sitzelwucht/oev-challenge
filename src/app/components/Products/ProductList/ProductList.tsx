import { Product, AppProps } from '@/app/PropData';

import { Spinner } from '../../Spinner/Spinner';
import { Header } from '../../Header/Header';

import { ProductCard } from '../ProductCard/ProductCard';

import './ProductList.styles.css';

export const ProductList = ({
  favorites,
  handleRemoveSuggestions,
  addFavorite,
  isListCleared,
  fetchProductData,
  handleSearch,
  productsToShow,
  noResults,
  removeFavorite,
}: AppProps) => {
  return (
    <main>
      <Header
        fetchProductData={fetchProductData}
        handleRemoveSuggestions={handleRemoveSuggestions}
        handleSearch={handleSearch}
        isListCleared={isListCleared}
        product={{
          title: '',
          description: '',
          price: 0,
          discountPercentage: 0,
          id: 0,
          images: [],
          image: '',
        }}
        searchInput={''}
      />
      <div className="suggestions-container">
        {noResults || isListCleared ? (
          <div className="notification">No suggestions</div>
        ) : productsToShow.length ? (
          productsToShow.map((item: Product) => (
            <ProductCard
              product={item}
              key={item.id}
              handleRemoveSuggestions={handleRemoveSuggestions}
              isFavorite={favorites.some((elem) => elem.id === item.id)}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              description={''}
              price={0}
              discountPercentage={0}
              id={0}
              suggestions={[]}
              favorites={[]}
              isListCleared={false}
              fetchProductData={Function}
              handleSearch={Function}
              productsToShow={[]}
              noResults={false}
              image={''}
              title={''}
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </main>
  );
};
