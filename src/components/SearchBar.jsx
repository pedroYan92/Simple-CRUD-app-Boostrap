import React, { useState } from 'react'

function SearchBar() {

    const [ setFilterFn] = useState('');

   
              
         
    return (
        <div className='d-flex justify-content-center'>
            <input
            className="form-control m-3"
            id="form-width"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={ (e) => setFilterFn(e.target.value)}/>
            
        </div>
    )
}

export default SearchBar
