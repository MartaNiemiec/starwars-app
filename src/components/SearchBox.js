import React from 'react';

const SearchBox = ({ searchfield, searchChange } ) => {
    return (
        <div className="pa2 mb2">
            <input 
            className="border pa3 bn bw1 br-pill bg-white tc"
            type="search" 
            placeholder="search"
            onChange={searchChange}
            />
        </div>
        
    );
}

export default SearchBox;