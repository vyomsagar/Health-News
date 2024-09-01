import React from 'react';
import './FilterBar.css';

function FilterBar({ category, setCategory }) {
  const categories = ['All', 'Fitness', 'Nutrition', 'Mental Health', 'Diseases', 'Medicine'];

  return (
    <div className="filter-bar">
      <label htmlFor="category-select">Category:</label>
      <select
        id="category-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat, idx) => (
          <option value={cat} key={idx}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterBar;
