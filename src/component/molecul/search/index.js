import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './search.css'

const Search = (props) => {
    const {placeholder='',
        onSearchClick = () => {},
    } = props
    const [searchValue, setSearchValue] = useState('')
    return(
        <div id='search'>
           <input 
                value={searchValue}
                onChange={(e) => {setSearchValue(e.target.value)}}
                className='input-search' 
                placeholder={placeholder}/>
           <button 
                onClick={() => onSearchClick(searchValue)}
                className='btn-search'>Search</button>
        </div>
    )
}

Search.prototypes = {
    onSearchClick: PropTypes.func,
}

export default Search

