import React from 'react';

const SearchBox = ({ searchfield, searchChange } ) => {
    return (
        <div className="pa2">
            <input 
            className="pa3 bn bw1 br-pill b--yellow bg-washed-yellow"
            type="search" 
            placeholder="search films"
            onChange={searchChange}
            />
        </div>
        
    );
}

export default SearchBox;