import React from 'react';
import "./styles.css"

const CategoryButtons = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-buttons-container">
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`
              px-4 py-2 border border-2 bg-gray-100 rounded-xl hover:bg-blue-100
              ${selectedCategory === category ? 'active' : ''} 
            `}
            onClick={() => onSelectCategory(category)}
          >  
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryButtons