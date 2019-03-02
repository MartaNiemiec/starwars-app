import React from 'react';

const SearchBox = ({ searchfield, searchChange } ) => {
    return (
        <div className="pa2 mb3">
            <input 
            className="border pa3 bn bw1 br-pill bg-white"
            type="search" 
            placeholder="search films"
            onChange={searchChange}
            />
        </div>
        
    );
}

export default SearchBox;