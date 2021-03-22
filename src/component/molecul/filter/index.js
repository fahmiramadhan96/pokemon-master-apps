import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './filter.css'

const Filter = (props) => {
    const {
        filterData=[],
        onFilterClick = () => {}
    } = props
    const [isShowBox, setShowBox] = useState(false)
    return(
        <div id='filter'>
            <button 
                onClick={() => setShowBox(!isShowBox)}
                className = 'btn-filter'>
                Filter By Type
            </button>
            {isShowBox && 
            <div className='filter-box'>
                <div className='filter-main'>
                    {filterData.map (value => 
                        <div className='filter-items' key={value.name}>
                            <input 
                                onChange = {(e) => onFilterClick(e.target.value)}
                                type="checkbox" 
                                value={value.name} 
                                checked={value.selected}/>
                            <label> {value.name}</label>  
                        </div>
                    )}
                </div>
            </div>
            } 

        </div>
    )
}

Filter.prototypes = {
    onFilterClick : PropTypes.func,
    filterData: PropTypes.array,
}

export default Filter

