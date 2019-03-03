import React from 'react';

const Categories = ({ onCategoryClick }) => {
  return ( 
    <nav className="f6 fw6 ttu ma1">
      <p onClick={onCategoryClick} className="b-solid pointer bw1 b--white button-categories f4 f6-s pa2 pa3-m pa3-l white dib">people</p>
      <p onClick={onCategoryClick} className="b-solid pointer bw1 b--white button-categories f4 f6-s pa2 pa3-m pa3-l white dib">films</p>
      <p onClick={onCategoryClick} className="b-solid pointer bw1 b--white button-categories f4 f6-s pa2 pa3-m pa3-l white dib">starships</p>
      <p onClick={onCategoryClick} className="b-solid pointer bw1 b--white button-categories f4 f6-s pa2 pa3-m pa3-l white dib">vehicles</p>
      <p onClick={onCategoryClick} className="b-solid pointer bw1 b--white button-categories f4 f6-s pa2 pa3-m pa3-l white dib">species</p>
      <p onClick={onCategoryClick} className="b-solid pointer bw1 b--white button-categories f4 f6-s pa2 pa3-m pa3-l white dib">planets</p>
    </nav>
  )
}

export default Categories;