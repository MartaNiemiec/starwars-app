import React from 'react';

const Categories = ({ onCategoryClick }) => {
  return ( 
      <div className="mb4">
        <button onClick={onCategoryClick} className='grow button-categories b pa3 ma2 f4 ttu bg-animate bn pointer br1'>people</button>
        <button onClick={onCategoryClick} className='grow button-categories b pa3 ma2 f4 ttu bg-animate bn pointer br1'>films</button>
        <button onClick={onCategoryClick} className='grow button-categories b pa3 ma2 f4 ttu bg-animate bn pointer br1'>starships</button>
        <button onClick={onCategoryClick} className='grow button-categories b pa3 ma2 f4 ttu bg-animate bn pointer br1'>vehicles</button>
        <button onClick={onCategoryClick} className='grow button-categories b pa3 ma2 f4 ttu bg-animate bn pointer br1'>species</button>
        <button onClick={onCategoryClick} className='grow button-categories b pa3 ma2 f4 ttu bg-animate bn pointer br1'>planets</button>
      </div>
  )
}

export default Categories;