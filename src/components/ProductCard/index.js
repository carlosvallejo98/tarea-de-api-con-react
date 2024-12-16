import React from 'react';
import './ProductCard.js';
import { ProductCart,ProductImg,ProductTitle,ProductText } from './ProductCard.js';

const ProductCard = ({ product }) => {
  return (
    <ProductCart>
      <ProductImg src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductText>${product.price}</ProductText>
    </ProductCart>
  );
};

export default ProductCard;
