import { Product, AppProps } from '@/app/PropData';
import { Favorite } from './Favorite';
import './Favorites.styles.css';

export const FavoritesList = ({ favorites, removeFavorite }: AppProps) => {
  return (
    <div className="favorites-container">
      <h2>Favorites</h2>
      {favorites.length ? (
        favorites.map((item: Product) => (
          <Favorite
            product={item}
            key={item.id}
            removeFavorite={removeFavorite}
            description={''}
            price={0}
            discountPercentage={0}
            id={0}
            suggestions={[]}
            favorites={[]}
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
        ))
      ) : (
        <div className="notification">
          Your added favorites will appear here
        </div>
      )}
    </div>
  );
};
