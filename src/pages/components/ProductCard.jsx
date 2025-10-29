import React from 'react';
import "./styles.css"

const ProductCard = ({ product }) => {
  return (
    <div className="w-[340px] h-[400px] bg-white border border-1 border-black rounded-md p-2 justify-between">
      <img src={product.cover} alt={product.name} className="w-full h-[280px] object-cover"/>      
      <p className="py-2 font-poppins font-semibold text-[12px] text-[#007bff]">{product.category}</p>
      <p className="py-2 font-poppins font-regular text-[14px] text-black">{product.name}</p>
    </div>
  );
};

export default ProductCard;