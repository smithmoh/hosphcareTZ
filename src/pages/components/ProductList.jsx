import React from 'react';
import ProductCard from './ProductCard.jsx';

const ProductList = ({ products }) => {

  return (
    <div className="flex flex-wrap items-start gap-4 p-10">
      {products.length > 0 ? (
        products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
          />
        ))
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default ProductList;