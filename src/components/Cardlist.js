import React from 'react';
import Card from './Card';

const CardList = ({object, category}) =>{
  return (
    <div className="pa3">
      { 
        object.map((object, i) => {
            return (
                <Card 
                key = {i}
                object={object}
                category={category}
                />
            );
        })
      }
    </div>
      );
}

export default CardList;