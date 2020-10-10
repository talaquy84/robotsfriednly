import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className="pa3 ba tc bg-lighest-blue" 
                type="search" 
                placeholder='search robots' 
                onChange={searchChange} />
        </div>
    );
}

export default SearchBox;