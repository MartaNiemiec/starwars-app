import React from 'react';
import Card from './Card';

const CardList = ({films}) =>{
  return (
    <div className="pa3">
      { 
        films.map((film, i) => {
            return (
                <Card 
                key = {i}
                title={films[i].title} 
                episode_id={films[i].episode_id} 
                director={films[i].director} 
                producer={films[i].producer}
                release_date={films[i].release_date}
                />
            );
        })
      }
    </div>
      );
}

export default CardList;