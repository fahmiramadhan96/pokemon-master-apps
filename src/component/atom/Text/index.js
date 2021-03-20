/**
 * Global Text
 */
import React from 'react'
import PropTypes from 'prop-types'

import './text.css'

const Text = (props) => {
    const { text ,
        size = 'medium', 
        color = 'black', 
        weight = 'light' ,
    } = props
    
    return(
        <text className={`${size} ${color} ${weight} text-global-style`}>
            {text}
        </text>
    )
}

Text.prototypes = {
    text: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.oneOf(['primary', 'secondary', 'black', 'danger']),
    weight: PropTypes.oneOf(['bold', 'semibold', 'light'])
}

export default Text

