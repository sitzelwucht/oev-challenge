export type Product = {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  id: number;
  images: string[];
  image: string;
};

export type AppProps = {
  product: Product;
  description: string;
  title: string;
  price: number;
  discountPercentage: number;
  id: number;
  suggestions: Product[];
  favorites: Product[];
  handleRemoveSuggestions: Function;
  removeFavorite: Function;
  addFavorite: Function;
  isListCleared: boolean;
  fetchProductData: Function;
  handleSearch: Function;
  productsToShow: Product[];
  noResults: boolean;
  isFavorite: boolean;
  image: string;
};

export type ButtonProps = {
  buttonClass: string;
  title: string;
  onAction: Function;
  isDisabled: boolean;
  isRemove: boolean;
};

export type ProductProps = {
  product: Product;
  handleRemoveSuggestions: Function;
  isFavorite: boolean;
  addFavorite: Function;
};

export type HeaderProps = {
  isListCleared: boolean;
  fetchProductData: Function;
  handleSearch: Function;
  handleRemoveSuggestions: Function;
  product: Product;
  searchInput: string;
};
