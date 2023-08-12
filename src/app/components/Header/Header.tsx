import { NotInterested, TravelExplore } from '@mui/icons-material';

import { HeaderProps } from '@/app/PropData';

import { Search } from '../Search/Search';
import './Header.styles.css';

export const Header = ({
  handleRemoveSuggestions,
  isListCleared,
  fetchProductData,
  handleSearch,
}: HeaderProps) => (
  <header>
    <h2>You might like:</h2>
    <div className="flex">
      <Search
        handleSearch={handleSearch}
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
        favorites={[]}
        handleRemoveSuggestions={Function}
        removeFavorite={Function}
        addFavorite={Function}
        isListCleared={false}
        fetchProductData={Function}
        productsToShow={[]}
        noResults={false}
        isFavorite={false}
        image={''}
        title={''}
        error={''}
      />
      <div className="action-prompt-container flex">
        {isListCleared ? (
          <div className="fetch flex" onClick={() => fetchProductData()}>
            <TravelExplore /> get suggestions
          </div>
        ) : (
          <div
            className="clear flex"
            onClick={() => handleRemoveSuggestions(true, null)}>
            <NotInterested /> clear list
          </div>
        )}
      </div>
    </div>
  </header>
);
