/**
 * Global Text
 */
import React from 'react'
import PropTypes from 'prop-types'

import './text.css'

const Text = (props) => {
    const { 
        style = {},
        children,
        size = 'medium', 
        color = 'black', 
        weight = 'light' ,
    } = props
    
    return(
        <p 
            className={`${size} ${color} ${weight} text-global-style`}
            style={style}>
            {children}
        </p>
    )
}

Text.prototypes = {
    style: PropTypes.object,
    children: PropTypes.node,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.oneOf(['primary', 'secondary', 'black', 'danger', 'normal']),
    weight: PropTypes.oneOf(['bold', 'semibold', 'light'])
}

export default Text

