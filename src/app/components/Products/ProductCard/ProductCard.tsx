import React from 'react';

import { AppProps } from '@/app/PropData';

import { Button } from './CardComponents/Button';
import { ProductName } from './CardComponents/ProductName';
import { Price } from './CardComponents/Price';
import { Description } from './CardComponents/Description';
import { ProductImage } from './CardComponents/Image';

import './ProductCard.styles.css';

export const ProductCard = ({
  product,
  handleRemoveSuggestions,
  isFavorite,
  addFavorite,
}: AppProps) => {
  const { title, description, price, discountPercentage, images } = product;

  return (
    <div className="card">
      <div className="card-section card-top">
        <div className="button-wrapper">
          <Button
            title="add to favorites"
            buttonClass="button-add"
            onAction={() => addFavorite(product)}
            isDisabled={isFavorite}
            isRemove={false}
          />
          <Button
            title="remove from suggestions"
            buttonClass="button-remove"
            isRemove
            onAction={() => handleRemoveSuggestions(false, product)}
            isDisabled={false}
          />
        </div>
        <ProductName
          title={title}
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
          handleSearch={Function}
          productsToShow={[]}
          noResults={false}
          isFavorite={false}
          image={''}
        />
        <ProductImage
          image={images[0]}
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
          handleSearch={Function}
          productsToShow={[]}
          noResults={false}
          isFavorite={false}
          title={''}
        />
      </div>
      <Description
        description={description}
        product={{
          title: '',
          description: '',
          price: 0,
          discountPercentage: 0,
          id: 0,
          images: [],
          image: '',
        }}
        price={0}
        discountPercentage={0}
        id={0}
        suggestions={[]}
        favorites={[]}
        handleRemoveSuggestions={() => {}}
        removeFavorite={() => {}}
        addFavorite={() => {}}
        isListCleared={false}
        fetchProductData={() => {}}
        handleSearch={() => {}}
        productsToShow={[]}
        noResults={false}
        isFavorite={false}
        image={''}
        title={''}
      />
      <Price
        price={price}
        discountPercentage={discountPercentage}
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
        id={0}
        suggestions={[]}
        favorites={[]}
        handleRemoveSuggestions={Function}
        removeFavorite={Function}
        addFavorite={Function}
        isListCleared={false}
        fetchProductData={Function}
        handleSearch={Function}
        productsToShow={[]}
        noResults={false}
        isFavorite={false}
        image={''}
        title={''}
      />
    </div>
  );
};
