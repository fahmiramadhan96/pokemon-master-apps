import React from 'react'
import PropTypes from 'prop-types'

import './boxViews.css'

const BoxViews = (props) => {
    const { children, style } = props
    return(
        <div 
            id='container-boxviews'
            style={style}>
            {children}
        </div>
    )
}

BoxViews.prototypes = {
    children: PropTypes.node,
    style : PropTypes.object,
}

export default BoxViews