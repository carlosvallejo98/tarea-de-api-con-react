import React from 'react';
import useFetchProducts from '../../hooks/useFetchProducts';
import ProductsList from '../../components/ProductsList';
import Loader from '../../components/Loader';
import './Products.css';

const Products = () => {
  const { products, loading } = useFetchProducts();

  return (
    <div className="products-page">
      <h2>Productos Más Vendidos</h2>
      {loading ? <Loader /> : <ProductsList products={products} />}
    </div>
  );
};

export default Products;
